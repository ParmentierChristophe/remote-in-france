import {SearchIcon} from '@chakra-ui/icons';
import {
    Box,
    Card,
    CardBody,
    CardHeader,
    Heading,
    Input,
    InputGroup,
    InputLeftElement,
    Link,
    StackDivider,
    VStack
} from '@chakra-ui/react';
import React from 'react';
import {useNavigate} from 'react-router-dom';
import {useSearch} from '../hooks/useSearch';

function SearchBar() {
    const {searchResults, query, setQuery} = useSearch();
    const navigate = useNavigate();
    const handleClick = (index: string) => {
        navigate(`/company/${index}`);
    };
    return (
        <div className="container">
            <InputGroup>
                <InputLeftElement pointerEvents='none'>
                    <SearchIcon color='gray.300'/>
                </InputLeftElement>
                <Input type='search'
                       variant='search'
                       fontSize='sm'
                       fontWeight='500'
                       _placeholder={{color: "gray.400", fontSize: "14px"}}
                       borderRadius={"15px"}
                       borderColor={"transparent"}
                       boxShadow={"0 1px 3px 0 rgba(0, 0, 0, 0.1),0 1px 2px 0 rgba(0, 0, 0, 0.1)"}
                       placeholder={"Search..."}
                       value={query}
                       onChange={(e) => setQuery(e.target.value)}
                />
            </InputGroup>

            {searchResults.length ?
                <div className={"absolute"}>
                    <Card width={"90%"}
                          marginTop={"10px"}>
                        <CardHeader>
                            <Heading size='md'>Result:</Heading>
                        </CardHeader>

                        {searchResults.map((result, index) => (
                            <Link onClick={() => handleClick(result.id.toString())}>
                                <CardBody>
                                    <VStack divider={<StackDivider borderColor='gray.200'/>} spacing='4'>
                                        <Box>
                                            <Heading size='xs' textTransform='uppercase'>
                                                {result.name}
                                            </Heading>
                                            <p>
                                                {result.description.substring(0, 50)}...
                                            </p>
                                        </Box>
                                    </VStack>
                                </CardBody>
                            </Link>
                        ))}
                    </Card>
                </div>
                : null}
        </div>
    );
}

export default SearchBar;