import { useRef } from "react"
import { Stack, Box, Heading, TableContainer, Table, Tbody, Thead, Tr, Th, Td, Button, Image, Flex, Spinner, Modal, ModalOverlay, ModalContent, ModalHeader, ModalCloseButton, ModalBody, ModalFooter, FormControl, FormLabel, Input, useDisclosure } from "@chakra-ui/react"

export default function StudentsList({ studentList, isLoading }) {

    const { isOpen, onOpen, onClose } = useDisclosure()
    const initialRef = useRef(null)
    const finalRef = useRef(null)

    return (
        <Stack padding="5" spacing={5} backgroundColor="purple.700" borderRadius="10">
            <Box>
                <Heading size="md">Students List</Heading>
            </Box>

            <Box>
                {isLoading ? (<Spinner />) : (<TableContainer>
                    <Table>
                        <Thead>
                            <Tr>
                                <Th>Name</Th>
                                {/* <Th>Photo</Th> */}
                                <Th>Present</Th>
                            </Tr>
                        </Thead>

                        <Tbody>
                            {studentList.map((s) => {
                                return (
                                    <Tr>
                                        <Td>{s.name}</Td>
                                        {/* <Td>
                                            <Image
                                                boxSize='150px'
                                                src={require(`/src/mock_data/student_images/${s.name}.jpg`)}
                                            />
                                        </Td> */}
                                        <Td>{s.present ? "✅" : "❌"}</Td>
                                    </Tr>
                                )
                            })}                           
                        </Tbody>
                    </Table>
                </TableContainer>)
                }
            </Box>

            <Box>
                <Flex justifyContent="flex-end">
                    <Button size="lg" colorScheme='blue' onClick={onOpen}>Add Student</Button>
                </Flex>
            </Box>

            <Modal
                initialFocusRef={initialRef}
                finalFocusRef={finalRef}
                isOpen={isOpen}
                onClose={onClose}
            >
                <ModalOverlay />
                <ModalContent>
                <ModalHeader>Add a student</ModalHeader>
                <ModalCloseButton />
                <ModalBody pb={6}>
                    <FormControl>
                        <FormLabel>Student name</FormLabel>
                        <Input ref={initialRef} placeholder='Name of student...' />
                    </FormControl>
                </ModalBody>

                <ModalFooter>
                    <Button colorScheme='blue' mr={3}>
                    Save
                    </Button>
                    <Button onClick={onClose}>Cancel</Button>
                </ModalFooter>
                </ModalContent>
            </Modal>
        </Stack>
    )
}