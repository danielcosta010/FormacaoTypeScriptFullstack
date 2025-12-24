import { Box, Flex, Button, HStack, Heading } from '@chakra-ui/react'
import { Link as RouterLink } from 'react-router-dom'

export const Header = () => {
    return(
        <Box bg="black" w="100%" p="5" position="fixed">
            <Flex justifyContent="space-between" align="center">
                <Heading as="h1" size="lg" color="brand.500">
                    Dio Bank
                </Heading>
                <HStack spacing="4">
                    <Button as={RouterLink} to="/" variant="ghost" color="white" _hover={{ color: "brand.500" }}>
                        Home
                    </Button>
                    <Button as={RouterLink} to="/login" variant="ghost" color="white" _hover={{ color: "brand.500" }}>
                        Login
                    </Button>
                </HStack>
            </Flex>
        </Box>
    )
}