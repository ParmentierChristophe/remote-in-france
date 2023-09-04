import {ButtonGroup, chakra, Flex, Heading, Icon, Link} from '@chakra-ui/react';
import React from 'react';
import {Link as RLink} from 'react-router-dom';
import {AiFillGithub, AiFillLinkedin, AiFillTwitterCircle} from 'react-icons/ai';
import SearchBar from './SearchBar';

export function Navigation() {
    return (
        <chakra.nav
            h="16"
            display="flex"
            alignItems="center"
            justifyContent="space-between"
            pl={{base: '24', md: '40', lg: '56'}}
            py="12"
            bgColor="white"
            data-testid="navigation"
            width={"60%"}
        >
            <Flex>
                <Link as={RLink} to={'/'}>
                    <Flex as="a">
                        <Heading
                            size={{base: 'md', md: 'lg', lg: 'xl'}}
                            fontWeight="bold"
                        >
                            Remote in France
                        </Heading>
                    </Flex>
                </Link>
            </Flex>
            <Flex justify="center">
                <SearchBar/>
            </Flex>
            <Flex justify="right">
                <ButtonGroup paddingLeft={"10px"} alignItems="center">
                    <Link href="https://github.com/ParmentierChristophe/remote-in-france" isExternal>
                        <Icon boxSize={6} as={AiFillGithub}/>
                    </Link>
                    <Link href="https://www.linkedin.com/in/christophe-parmentier/" isExternal>
                        <Icon boxSize={6} as={AiFillLinkedin}/>
                    </Link>
                    <Link href="https://twitter.com/theCrispydesign" isExternal>
                        <Icon boxSize={6} as={AiFillTwitterCircle}/>
                    </Link>
                </ButtonGroup>
            </Flex>
        </chakra.nav>
    );
}
