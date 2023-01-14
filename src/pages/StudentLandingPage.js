import { Link } from "react-router-dom";
import { Stack, HStack, Button, Flex } from "@chakra-ui/react";
import AppHeader from "../components/AppHeader/AppHeader";
import { ArrowBackIcon } from "@chakra-ui/icons";

export default function StudentLandingPage() {
  return (
    <>
      <Stack padding="5" spacing="5">
        <AppHeader backNavigation={"/"} />

        <Flex justifyContent="center">
          <HStack>
            <Link to="/student/join-class">
              <Button size="lg" colorScheme="teal">
                Join Class
              </Button>
            </Link>

            <Link to="/student/view-attendance">
              <Button size="lg" colorScheme="cyan" variant="ghost">
                View Attendance
              </Button>
            </Link>
          </HStack>
        </Flex>
      </Stack>
    </>
  );
}
