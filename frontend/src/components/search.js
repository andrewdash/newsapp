import React, { Component } from 'react';
import PropTypes from 'prop-types';
import { withRouter } from "react-router";
import { 
    Button,
    Box,
    FormControl,
    Input,
    HStack,
    Link
} from "@chakra-ui/react"; 

// class SearchBar extends Component {
//     constructor(props) {
//         super(props);
//         this.state = {
//             query: '',
//             news_object: {"data": []}
//         }
//     }

//     handleSubmit(search_query) {
//         this.setState({query: search_query.target.value});
//     }

class SearchBar extends React.Component {
    static propTypes = {
        match: PropTypes.object.isRequired,
        location: PropTypes.object.isRequired,
        history: PropTypes.object.isRequired
      }
    render () {
        return (
            <Box>
                <form 
                    action={process.env.REACT_APP_FRONTEND_ROOT_URL}
                    method="get"
                >
                    <FormControl>
                        <HStack>
                            <Input type="text" placeholder="Search news posts" id="header-search" name="q"/>
                            <Link to={process.env.REACT_APP_FRONTEND_ROOT_URL}>
                                <Button type="submit">Search</Button>
                            </Link>
                        </HStack>            
                    </FormControl>    
                </form>
            </Box>
        )
    }
}


export default withRouter(SearchBar);