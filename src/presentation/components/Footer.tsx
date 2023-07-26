import {Container, Stack, Text} from '@chakra-ui/react';

export function Footer() {
    return (
        <Container as="footer" role="contentinfo" py={{base: '12', md: '16'}} data-testid="footer">
            <Stack justify="center" direction="column" align="center">
                <Text textAlign="center" fontSize="sm" color="subtle">
                    {new Date().getFullYear()} Remote in France - Proudly
                    developed by Christophe PARMENTIER
                </Text>
            </Stack>
        </Container>
    );
}
