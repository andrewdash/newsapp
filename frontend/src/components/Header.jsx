import React from "react";
import { FaLinkedin } from "react-icons/fa";
import { GoMarkGithub } from "react-icons/go";
import { IconContext } from "react-icons";
import { 
    Heading,
    Flex,
    Divider,
    Spacer,
    Box
} from "@chakra-ui/react";
import { HStack } from "@chakra-ui/react";
import SearchBar from "./search";


const Header = () => {
    return (
        
            <Flex
                as="nav"
                align="center"
                justify="space-bewteen"
                wrap="wrap"
                padding="0.5rem"
                bg="aliceblue"
            >
                <Box>
                    <Heading as="h1" size="sm">
                        <a href={process.env.REACT_APP_FRONTEND_ROOT_URL}>News Website</a>
                    </Heading>
                </Box>
                <Spacer />
                <Box>
                    <SearchBar />
                </Box>
                <Spacer />
                <HStack>
                    <a href="https://github.com/andrewdash/newsapp">
                        <GoMarkGithub size="2em"/>
                    </a>
                    <a href="https://www.linkedin.com/in/anwle/">
                        <FaLinkedin size="2em" color="dodgerblue"/>
                    </a>
                </HStack>
                <Divider />
            </Flex>
    );
};

export default Header;

