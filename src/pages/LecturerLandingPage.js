import { Link } from "react-router-dom"
import { Stack, Heading, HStack, Button, Box, Flex } from "@chakra-ui/react"
import AppHeader from "../components/AppHeader/AppHeader"

export default function LecturerLandingPage() {
    return (
        <Stack padding="5" spacing="5">
            <AppHeader />
            
            <Flex justifyContent="center">
                <HStack>
                    <Link to="/lecturer/add-class">
                        <Button size="lg" colorScheme="teal" variant='ghost'>Add Class</Button>
                    </Link>

                    <Link to="/lecturer/view-attendance">
                        <Button size="lg" colorScheme="cyan">View Attendance</Button>
                    </Link>
                </HStack>
            </Flex>
        </Stack>
    )
}