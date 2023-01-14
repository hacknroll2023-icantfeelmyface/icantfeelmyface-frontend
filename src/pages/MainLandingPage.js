import { Link } from "react-router-dom"
import { Stack, Heading, HStack, Button, Box, Flex } from "@chakra-ui/react"
import AppHeader from "../components/AppHeader/AppHeader"

export default function MainLandingPage() {
    return (
        <Stack padding="5" spacing="5">
            <AppHeader />
            
            <Flex justifyContent="center">
                <HStack>
                    <Link to="/student">
                        <Button size="lg" colorScheme="teal">I'm a Student</Button>
                    </Link>

                    <Link to="/lecturer">
                        <Button size="lg" colorScheme="cyan">I'm a Lecturer</Button>
                    </Link>
                </HStack>
            </Flex>
        </Stack>
    )
}