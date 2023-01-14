import { Box, Heading, Text } from "@chakra-ui/react"

export default function AppHeader() {
    return (
        <>
            <Box borderRadius={10} backgroundColor="green.800" padding="5">
                <Heading>I Can't Feel My Face 😳</Heading>

                <Text as='samp'>(an attendance taking tool)</Text>
            </Box>
        </>
    )
}