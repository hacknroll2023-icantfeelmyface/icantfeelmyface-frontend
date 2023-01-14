import { Link } from "react-router-dom"
import { Stack, Heading, HStack, Button, Box, Flex } from "@chakra-ui/react"
import AppHeader from "../components/AppHeader/AppHeader"

export default function StudentLandingPage() {
    return (
        <Stack padding="5" spacing="5">
            <AppHeader />
            
            <Flex justifyContent="center">
                <HStack>
                    <Link to="/student/join-class">
                        <Button size="lg" colorScheme="teal">Join Class</Button>
                    </Link>

                    <Link>
                        <Button disabled={true} size="lg" colorScheme="cyan">View Attendance</Button>
                    </Link>
                </HStack>
            </Flex>
        </Stack>
    )
}