import requests
from typing import List
from datetime import datetime
import dateutil.parser as dp
from backend.config import NEWS_API_KEY
from backend.external_api.models import NewsBase

# A comma-seperated string of identifiers for the news sources or blogs you want headlines from
# https://newsapi.org/docs/endpoints/top-headlines
SOURCES = """
    'bbc-news', 'cnn', 'bloomberg', 'the-wall-street-journal', 'financial-times',
    'axios', 'bbc-sport', 'cbc-news', 'hacker-news'
"""
def get_sources(sources):
    sources = sources.replace(" ", "")
    sources = sources.replace("\'", "")
    sources = sources.replace("\"", "")
    sources = sources.strip()
    return sources

CHOSEN_NEWS_SOURCES = get_sources(SOURCES)

def newsapi_response_parser(results) -> List[NewsBase]:
    """
    :param results: JSON Object
    :return: List of dictionaries
            [
                {
                    "title": "title of the news",
                    "link": "original link of the news source",
                    "api_source":"your-api-name"
                },
            ...
            ]
    """
    response = []
    for child in results["articles"]:
        # convert 'publishedAt' ISO 8601 to epoch time, so that React can convert it to whatever date format
        created_utc = dp.parse(child["publishedAt"]).timestamp()
        news_base = NewsBase(
            title=child["title"],
            link=child["url"],
            created_utc=created_utc,
            news_source=child["source"]["name"],
            api_source="newsapi",
        )
        response.append(news_base)
    # if nothing was added to the response list, append an empty NewsBase
    if not response:
        print("no response found for newsapi...")
        empty_news_base = NewsBase(
            title="No items found!",
            link="",
            created_utc=datetime.today().timestamp(),
            news_source="No source found",
            api_source="newsapi"
        )
        response.append(empty_news_base)
    # sort the response by created_utc
    response = sorted(response, key=lambda x: x.created_utc, reverse=True)
    return response 


# 'limit' and 'query' are provided when you call 
# NEWS_API_MAPPING['listing_url'] or NEWS_API_MAPPING['search_url']
NEWS_API_MAPPING = {
    "api_source": "newsapi",
    "parser": newsapi_response_parser,
    "listing_url": 'http://newsapi.org/v2/top-headlines?language=en&pageSize={limit}&page=1&' +
                   'sources={sources}&apiKey={api_key}'.format(api_key=NEWS_API_KEY, sources=CHOSEN_NEWS_SOURCES),
    "search_url": 'http://newsapi.org/v2/everything?language=en&q={query}&pageSize={limit}&page=1&' +
                  'sources={sources}&apiKey={api_key}'.format(api_key=NEWS_API_KEY, sources=CHOSEN_NEWS_SOURCES),
    "headers": "",
}


# testing the news api here
# res = requests.get('http://newsapi.org/v2/top-headlines?category=general&pageSize={1}&page=1&' +
#                    'apiKey={api_key}'.format(api_key=NEWS_API_KEY))
# print(newsapi_response_parser(res.json()))
