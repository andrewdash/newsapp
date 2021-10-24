from typing import List
from pydantic import BaseModel

class NewsBase:
    """
    One unit of news data
    
    title: str,
    link: str,
    source: str,
    created_utc: str,
    """
    def __init__(self, 
                title: str,
                link: str,
                created_utc: str,
                source: str,
    ):
        self.title: str = title
        self.link: str = link
        self.created_utc: str = created_utc
        self.source: str = source


class NewsList(NewsBase):
    """
    List of news data
    """
    def __init__(self, data: List[NewsBase] = None):
        self.data: List[NewsBase] = []

    def append(self, NewsBase)-> List[NewsBase]:
        """
        append an item to the list of 'data'
        """
        self.data.append(NewsBase)