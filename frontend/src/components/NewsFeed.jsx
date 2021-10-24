import React, { useEffect, useState } from "react";
import PropTypes from 'prop-types';
import pushid from 'pushid';
import { useLocation } from 'react-router-dom';
import { 
    Box, 
    HStack,
    VStack,
    Stack,
    Text
} from '@chakra-ui/react';
import timeConverter from "../utils/timeConverter";


const NewsContext = React.createContext({
    list_of_news: [], setNewsObject: () => {}
});


const fetchNews = async (query) => {
    let response = "";
    if (query == "") {
        response = await fetch(`${process.env.REACT_APP_FASTAPI_NEWSAPP_URL}`);
    } 
    else {
        response = await fetch(`${process.env.REACT_APP_FASTAPI_NEWSAPP_URL}?q=${query}&limit=10`)
    }
    const news_response = await response.json();
    

    // for testing
    // let news_response = {"data": []};
    // if (query == "") {
    //     news_response = {
    //         "data": [
    //           {
    //             "title": "Vermont becomes first state to reach 80% vaccination; Gov. Scott says, \"There are no longer any state Covid-19 restrictions. None.\"",
    //             "link": "https://www.wcax.com/2021/06/14/vermont-just-01-away-its-reopening-goal/",
    //             "source": "Reddit",
    //             "created_utc": "1634678911.0"
    //           },
    //           {
    //             "title": "Her husband needs this life-support machine, but she says Florida has none to spare",
    //             "link": "https://www.cnn.com/videos/health/2021/08/08/florida-woman-searching-for-ecmo-treatment-for-husband-out-of-state-hospital-icu-covid-19-vaccine-bts-ndwknd-vpx.cnn?utm_source=feedburner&amp;utm_medium=feed&amp;utm_campaign=Feed%3A+rss%2Fcnn_topstories+%28RSS%3A+CNN+-+Top+Stories%29",
    //             "source": "Reddit",
    //             "created_utc": "1634678914.0"
    //           }
    //     ]}
    // } else {
    //     news_response = {
    //         "data": [
    //           {
    //             "title": "YYYEEEEEE HHAAAWWWW",
    //             "link": "https://www.wcax.com/2021/06/14/vermont-just-01-away-its-reopening-goal/",
    //             "source": "Reddit",
    //             "created_utc": "1634678914.0"
    //           }
    //     ]}
    // }
    return news_response;
}

const setNewsItems = (news_data) => {
    const NewsItem = (article, id) => (
        <Box spacing={8} p="3" shadow="md" borderWidth="1px" borderRadius="lg" key={id}>
            <Stack>
                <Box fontWeight="semibold">
                    <a href={`${article.link}`}>{article.title}</a>
                </Box>
                <Box>
                    <Text mt={2} fontSize="sm">
                        {article.source}: {timeConverter(article.created_utc)}
                    </Text>
                </Box>
            </Stack>
                
        
            
        </Box>
    );
    const map_response_to_news_item = (response) => {
        const news_item_data = response.data.map(
            (news) => NewsItem(news, pushid())
        );
        return news_item_data;
    }
    const news_items = map_response_to_news_item(news_data);
    return news_items;
}


const NewsFeed = () => {
    const [ newsObject, setNewsObject ] = useState([]);

    // get the query inside the URL
    const url = useLocation().search;
    let query = new URLSearchParams(url).get('q') || "";
    query = query.trim().replace(" ", "+");

    useEffect(() => {
        const getNews = async () => {
            fetchNews(query)
            .then(news_response => setNewsItems(news_response))
            .then((res) => setNewsObject(res))
        };
        getNews();
    }, []);
    
    return (
            <ErrorBoundary>
                <div className="news-feed">
                    {newsObject}
                </div>
            </ErrorBoundary>
    )
}


class ErrorBoundary extends React.Component {
    constructor(props) {
      super(props);
      this.state = { error: null, errorInfo: null};
    }
    
    componentDidCatch(error, errorInfo) {
      // Catch errors in any components below and re-render with error message
      this.setState({
        error: error,
        errorInfo: errorInfo
      })
      // You can so log error messages to an error reporting service here
    }
    
    render() {
      if (this.state.errorInfo) {
        // Error path
        return (
          <div>
            <h2>Something went wrong.</h2>
            <details style={{ whiteSpace: 'pre-wrap' }}>
              {this.state.error && this.state.error.toString()}
              <br />
              {this.state.errorInfo.componentStack}
            </details>
          </div>
        );
      }
      // Normally, just render children
      return this.props.children;
    }  
}

export default NewsFeed;