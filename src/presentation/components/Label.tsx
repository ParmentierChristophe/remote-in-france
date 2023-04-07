import { Box, Text } from '@chakra-ui/react';

interface LabelProps {
	bgColor: string;
	textColor?: string;
	nameLabel: string;
}

export function Label({ nameLabel, bgColor, textColor }: LabelProps) {
	return (
		<Box mx="1" borderRadius="20px" backgroundColor={bgColor}>
			<Text
				textAlign="center"
				color={textColor ? textColor : 'white'}
				fontSize="sm"
				my="auto"
				fontWeight="500"
				px="13px"
				py="5px"
			>
				{nameLabel}
			</Text>
		</Box>
	);
}
