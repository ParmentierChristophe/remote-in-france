import React from 'react';
import {Box, Flex, Text, useColorModeValue, Link} from '@chakra-ui/react';
import {useNavigate} from 'react-router-dom';

interface CardProps {
	companyId: string;
	name: string;
	description: string;
	isRemote: boolean;
	isEnglish: boolean;
	isHybrid: boolean;
	isHiring: boolean;
	onClick: () => void;
}

export function Card({
						 companyId,
						 name,
						 description,
						 isRemote,
						 isEnglish,
						 isHybrid,
						 isHiring,
					 }: CardProps) {
	const navigate = useNavigate();

	const handleClick = () => {
		navigate(`/company/${companyId}`);
	};

	let boxBg = useColorModeValue('white !important', '#111c44 !important');
	let secondaryBg = useColorModeValue('white', 'whiteAlpha.100');
	let mainText = useColorModeValue('gray.800', 'white');

	function excerpt(str: string): string {
		let excerptRes = str;
		if (str.length > 140) {
			excerptRes = str.substring(0, 140) + '...';
		}
		return excerptRes;
	}

	return (
		<div data-testid="company-card">
			<Flex m="20px">
				<div onClick={handleClick} style={{textDecoration: 'none'}}>
					<Flex
						_hover={{
							shadow: 'xl',
							transform: 'translateY(-5px)',
							transitionDuration: '0.5s',
							transitionTimingFunction: 'ease-in-out',
						}}
						borderRadius="20px"
						bg={boxBg}
						h="345px"
						boxShadow="2xl"
						w={{base: '315px', md: '345px'}}
						direction="column"
						onClick={handleClick}
					>
						<Box p="20px">
							<Box>
								<Flex justifyContent="flex-end">
									{isHiring ? (
										<Box
											mx="1"
											borderRadius="20px"
											backgroundColor="#614CFF"
										>
											<Text
												textAlign="center"
												color="white"
												fontSize="sm"
												my="auto"
												fontWeight="500"
												px="13px"
												py="5px"
											>
												Hiring
											</Text>
										</Box>
									) : null}
									{isEnglish ? (
										<Box
											mx="1"
											borderRadius="20px"
											backgroundColor="#9C81FF"
										>
											<Text
												textAlign="center"
												color="white"
												fontSize="sm"
												my="auto"
												fontWeight="500"
												px="13px"
												py="5px"
											>
												English Friendly
											</Text>
										</Box>
									) : null}
								</Flex>

								<Text
									fontWeight="600"
									color={mainText}
									w="100%"
									fontSize="2xl"
									mb="-2"
								>
									{name}
								</Text>
							</Box>
						</Box>
						<Box px="20px">
							<Flex
								bg={secondaryBg}
								w="100%"
								py="10px"
								borderBottomLeftRadius="inherit"
								borderBottomRightRadius="inherit"
								height="100%"
								direction="column"
							>
								<Text
									fontSize="sm"
									color="gray.500"
									lineHeight="24px"
									pe="40px"
									fontWeight="500"
									mb="auto"
								>
									{excerpt(description)}
								</Text>
								<Flex>
									{isRemote ? (
										<Box
											mx="1"
											borderRadius="20px"
											backgroundColor="#719FFF"
										>
											<Flex>
												<Text
													color="white"
													fontSize="sm"
													my="auto"
													fontWeight="500"
													px="13px"
													py="5px"
												>
													Remote
												</Text>
											</Flex>
										</Box>
									) : null}
									{isHybrid ? (
										<Box
											mx="1"
											borderRadius="20px"
											backgroundColor="#eb7151"
										>
											<Flex>
												<Text
													color="white"
													fontSize="sm"
													my="auto"
													fontWeight="500"
													px="13px"
													py="5px"
												>
													Hybride
												</Text>
											</Flex>
										</Box>
									) : null}
								</Flex>
							</Flex>
						</Box>
					</Flex>
				</div>
			</Flex>
		</div>
	);
}