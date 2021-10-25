import traceback
import uvicorn
from fastapi import FastAPI

from typing import (
    List,
    Dict,
)

from backend.api_helper import (
    search_news,
    get_news,
    verify_attribute,
)

from pydantic import BaseModel
from fastapi.middleware.cors import CORSMiddleware

app = FastAPI()

# origins = ["http://localhost:3000", "https://andrewdash.github.io"]
origins = ["*"]
# what is a middleware? 
# software that acts as a bridge between an operating system or database and applications, especially on a network.
app.add_middleware(
    CORSMiddleware,
    allow_origins=origins,
    allow_credentials=True,
    allow_methods=["*"],
    allow_headers=["*"],
)


# === Application Main Endpoint
@app.get("/news")
def list_news(
    q: str=None, 
    limit: int=10):
    """
    This single endpoint will server getting Top-Listings and Search functionality
    for news aggregation APIs.

    :param q: Search query in request url.
    :param limit: Integer number to limit number of results to fetch from each dependent API.
    :return: JSON response of aggregated results.
    """
    try:
        if q:
            # call search endpoint
            print("running search news...")
            result = search_news(query=q, limit=limit)
        else:
            # call news listing endpoint
            print("running get news...")
            result = get_news(limit=limit)
        return result
    except:
        return traceback.print_exc()

if __name__ == "__main__":
    uvicorn.run("api:app", host="localhost", port=8000, reload=True)
    