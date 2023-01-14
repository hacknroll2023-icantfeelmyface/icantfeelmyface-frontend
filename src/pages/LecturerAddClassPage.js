import { Flex, Box, Stack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { Link } from "react-router-dom"

import AppHeader from "../components/AppHeader/AppHeader";

export default function LecturerAddClassPage() {
    return (
        <Stack padding="5" spacing="5">
            <AppHeader />

            <Flex justifyContent="center">
                <Stack spacing="10" width="50%" borderRadius="20" backgroundColor="blue.800" padding="10">
                    <FormControl>
                        <FormLabel>Class Code</FormLabel>
                        <Input type='text' />
                    </FormControl>

                    <Link to="/lecturer">
                        <Button style={{ width: "100%" }}>Add Class</Button>
                    </Link>
                </Stack>
            </Flex>
        </Stack>
    )
}