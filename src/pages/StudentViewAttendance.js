import {
  Box,
  Heading,
  Stack,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
} from "@chakra-ui/react";
import React from "react";
import AppHeader from "../components/AppHeader/AppHeader";
// useparams
import { useParams } from "react-router-dom";

function StudentViewAttendance() {
  const { studentName } = useParams();

  //   TODO: post request with studentName as argument to get dictionary response of class attendance

  const classAttendance = {
    CZ2033: true,
    CZ2006: false,
  };

  const attendance = Object.entries(classAttendance);

  return (
    <>
      <Stack padding="5" spacing="5">
        <AppHeader backNavigation={"/student/view-attendance"} />

        <Stack
          padding="5"
          spacing={5}
          backgroundColor="purple.700"
          borderRadius="10"
        >
          <Box>
            <Heading size="md">View Attendance</Heading>
          </Box>

          <Box>
            {/* {isLoading ? (
              <Spinner />
            ) : ( */}
            <TableContainer>
              <Table>
                <Thead>
                  <Tr>
                    <Th>Name</Th>
                    {/* <Th>Photo</Th> */}
                    <Th>Present</Th>
                  </Tr>
                </Thead>

                <Tbody>
                  {attendance.map((className, present) => {
                    return (
                      <Tr>
                        <Td>{className}</Td>
                        {/* <Td>
                                            <Image
                                                boxSize='150px'
                                                src={require(`/src/mock_data/student_images/${s.name}.jpg`)}
                                            />
                                        </Td> */}
                        <Td>{present ? "✅" : "❌"}</Td>
                      </Tr>
                    );
                  })}
                </Tbody>
              </Table>
            </TableContainer>
          </Box>
        </Stack>
      </Stack>
    </>
  );
}

export default StudentViewAttendance;
