import requests
from datetime import datetime
import time
from typing import (
    Dict,
    List,
)
from backend.config import (
    REDDIT_SCRIPT_ID,
    REDDIT_SECRET_KEY,
    REDDIT_USERNAME,
    REDDIT_PASSWORD,
    REDDIT_ACCESS_TOKEN_URL,
)
from backend.external_api.models import NewsBase
import praw

def reddit_response_parser(results) -> List[NewsBase]:
    """
    :param results: JSON Object
    :return: List of dictionaries
            [
                {
                    "title": "title of the news",
                    "link": "original link of the news source",
                    "source": "your-api-name"
                    "created_utc": "date in epoc time"
                },
            ...
            ]
    """
    response = []
    for child in results["data"]["children"]:    
        news_base = NewsBase(
            title=child["data"]["title"],
            link=child["data"]["url"],
            created_utc=child["data"]["created_utc"],
            source="Reddit",
        )
        response.append(news_base)
    return response


###########################################
#### reddit api pushshift #################
###########################################
def pushshift_reddit_response_parser(results) -> List[NewsBase]:
    """
    :param results: JSON Object
    :return: List of dictionaries
            [
                {
                    "title": "title of the news",
                    "link": "original link of the news source",
                    "source": "your-api-name"
                    "created_utc": "date in epoc time"
                },
            ...
            ]
    """
    response = []
    for child in results["data"]:
        news_base = NewsBase(
            title=child["title"],
            link=child["full_link"],
            created_utc=child["created_utc"],
            source="Reddit",
        )
        response.append(news_base)

     # if nothing was added to the response list, append an empty NewsBase
    if not response:
        empty_news_base = NewsBase(
            title="No items found!",
            link="",
            created_utc=datetime.today().timestamp(),
            source="Reddit"
        )
        response.append(empty_news_base)
    return response


current_timestamp = time.time()
# 60 seconds * 60 minutes * 24 hours * 60 days = 2 months
current_period = int(current_timestamp - (60 * 60 * 24 * 90))

pushshift_url = "https://api.pushshift.io/reddit/search/submission/"
subreddit = "news"
base_url = (f"{pushshift_url}?subreddit={subreddit}&after={current_period}&sort=desc")
api_filter = ("title,full_link,created_utc,score")
listing_url = (base_url + "&"
        "score=>1&"
        "limit={limit}"
)
search_url = (base_url + "&"
        "score=>1&"
        "q={query}&"
        "limit={limit}"
)

REDDIT_API_MAPPING_V3 = {
    "api_name": "Reddit",
    "parser": pushshift_reddit_response_parser,
    "listing_url": listing_url,
    "search_url": search_url,
    "headers": "",
}

# test the response for pushshift
# response = requests.get(full_url)
# pushshift_response = response.json()
# print(pushshift_reddit_response_parser(pushshift_response))