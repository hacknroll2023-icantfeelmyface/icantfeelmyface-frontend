import { Stack, Box, Heading, TableContainer, Table, Tbody, Thead, Tr, Th, Td, Button, Image, Flex } from "@chakra-ui/react"

export default function StudentsList({ studentList }) {
    return (
        <Stack padding="10" spacing={5}>
            <Box>
                <Heading>Students List</Heading>
            </Box>

            <Box>
                <TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                <Th>Photo</Th>
                                <Th>Present</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {studentList.map((s) => {
                                return (
                                    <Tr>
                                        <Td>{s.name}</Td>
                                        <Td>
                                            <Image
                                                boxSize='150px'
                                                src={require(`/src/mock_data/student_images/${s.name}.jpg`)}
                                            />
                                        </Td>
                                        <Td>{s.present ? "✅" : "❌"}</Td>
                                    </Tr>
                                )
                            })}                           
                        </Tbody>
                    </Table>
                </TableContainer>
            </Box>

            <Box>
                <Flex justifyContent="flex-end">
                    <Button size="lg">Add Student</Button>
                </Flex>
            </Box>
        </Stack>
    )
}