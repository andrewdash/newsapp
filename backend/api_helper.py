import requests

from typing import (
    Dict
)
from backend.config import NEWS_API_KEY
# from backend.external_api.reddit_api import REDDIT_API_MAPPING
from backend.external_api.reddit_api import REDDIT_API_MAPPING_V3
from backend.external_api.news_api import NEWS_API_MAPPING

# Register your API in this API-COLLECTION
API_COLLECTION = [
    # REDDIT_API_MAPPING,
    REDDIT_API_MAPPING_V3,
    NEWS_API_MAPPING,
]


# set headers
# TODO: change this to Enum
def _set_headers(api) -> Dict:
    """
    Pass the User Agent header as the header entirely, or
    attach it to any specific header the input 'api' might have
    """
    headers = {}
    user_agent = {'User-agent': 'your bot 0.1'}
    if api["headers"]:
        headers = {**api["headers"], **user_agent}
    else:
        headers = user_agent
    return headers


# === Listing Endpoint ===
# Verify required Fields in API Parser's response
def verify_attribute(response):
    """
    This function is intended to make sure we are receiving right fields from
    dependent APIs.

    :param response: Response object received from sub APIs.
    :return: Return response object if valid, otherwise raise exception.
    """
    required_fields = ["title", "link", "source"]
    return None


# === Search Endpoint ===
# Call 'Search' endpoint of all registered APIs
def get_news(limit):
    """
    This function will get top news from all registered APIs (in API_COLLECTION).
    :param limit: Integer number to limit number of responses from each API.
    :return: Return aggregated news results.
    """
    # print("running get news...")
    response = []
    for api in API_COLLECTION:
        headers = _set_headers(api)
        print(f"running the {api['api_source']} api...")
        if api["api_source"] == "newsapi":
            limit = 40
        print(api["listing_url"])
        result = requests.get(api["listing_url"].format(limit=limit),
                              headers=headers).json()
        if result:
            response += (api["parser"](result))
    return {"data": response}


#
# Call 'Search' endpoint of all registered APIs
def search_news(query, limit):
    """
     This function will get search results for given QUERY from all registered APIs (in API_COLLECTION).

    :param query: Search Query.
    :param limit: Integer number to limit number of responses from each API.
    :return: Return aggregated news results.
    """
    # print("running search news...")
    response = []
    for api in API_COLLECTION:
        headers = _set_headers(api)
        print(f"running the {api['api_source']} api...")
        if api["api_source"] == "newsapi":
            limit = 40
        result = requests.get(api["search_url"].format(query=query, limit=limit),
                              headers=headers).json()
        if result:
            response += (api["parser"](result))
    return {"data": response}
