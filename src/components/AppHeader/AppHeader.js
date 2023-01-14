import { ArrowBackIcon } from "@chakra-ui/icons";
import { Box, Heading, HStack, Text } from "@chakra-ui/react";
import { Link } from "react-router-dom";

export default function AppHeader({ backNavigation, hidden = false }) {
  return (
    <>
      <Box borderRadius={10} backgroundColor="green.800" padding="5">
        <HStack>
          {!hidden && (
            <Link to={backNavigation}>
              <ArrowBackIcon boxSize={8} mt={5} color="cyan" />
            </Link>
          )}
          <Heading>I Can't Feel My Face 😳</Heading>
        </HStack>

        <Text as="samp" ml={10}>
          (an attendance taking tool)
        </Text>
      </Box>
    </>
  );
}
