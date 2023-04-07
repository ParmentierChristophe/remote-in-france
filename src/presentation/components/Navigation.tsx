import { Flex, Link, Heading, ButtonGroup, chakra } from '@chakra-ui/react';
import React from 'react';

export function Navigation() {
	return (
		<chakra.nav
			h="16"
			display="flex"
			alignItems="center"
			justifyContent="space-between"
			pl={{ base: '24', md: '40', lg: '56' }}
			py="12"
			bgColor="white"
		>
			<Flex>
				<Link href="/remote-in-france">
					<Flex as="a">
						<Heading
							size={{ base: 'md', md: 'lg', lg: 'xl' }}
							fontWeight="bold"
						>
							Remote in France
						</Heading>
					</Flex>
				</Link>
			</Flex>
			<Flex justify="center"></Flex>
			<Flex justify="right">
				<ButtonGroup alignItems="center"></ButtonGroup>
			</Flex>
		</chakra.nav>
	);
}
