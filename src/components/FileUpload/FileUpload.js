import { useState } from "react";
import { Input, Button, Stack, Box, Heading, Flex, Spinner } from "@chakra-ui/react"
import axios from "axios"

// const API_URL = 'https://httpbin.org/post';
const API_URL = 'http://localhost:8000/upload'

export default function FileUpload({ setStudentList, isLoading, setIsLoading }) {
    const [file, setFile] = useState(null);

    const handleUpdateStudentList = (studentsFound) => {
        // const FAKE_API_RESPONSE = [
        //     {
        //         name: "Ryan",
        //         present: true
        //     },
        //     {
        //         name: "Anun",
        //         present: false
        //     },
        //     {
        //         name: "James",
        //         present: true
        //     },
        // ]

        setStudentList(oldStudentList => {
            return oldStudentList.map(s => {
                // const newStudentStatus = FAKE_API_RESPONSE.find(x => x.name === s.name)
                
                // if (newStudentStatus) {
                //     return {
                //         ...s,
                //         present: newStudentStatus.present
                //     }
                // } else {
                //     return s;
                // }

                // check if student name is in the list of students found

                if (studentsFound.includes(s.name)) {
                    return {
                        ...s,
                        present: true
                    }
                } else {
                    return s;
                }
            })
        })
    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    const handleUploadClick = () => {
        if (!file) {
          return;
        }

        setIsLoading(true)

        const formData = new FormData();
        formData.append('file', file);
        axios.post(API_URL, formData, {
            headers: {
                "Content-Type": "multipart/form-data"
            }
        })
          .then((res) => res.data)
          .then((data) => handleUpdateStudentList(data))
          .then(() => setIsLoading(false))
          .catch((err) => console.error(err));
      };

    return (
        <>
            <Stack padding="5" spacing={5}  backgroundColor="purple.700" borderRadius="10">
                <Box>
                    <Heading size="md">Upload Zoom Screen Cap</Heading>
                </Box>

                <Box>
                    <Input
                        type="file"
                        onChange={handleFileChange}
                        style={{ border: '0px'}}
                    />
                </Box>

                <Box>
                    <Flex justifyContent="flex-end">
                        {isLoading ? <Spinner /> : <Button disabled={!file} onClick={handleUploadClick} size="lg" colorScheme='blue'>Upload</Button>}
                    </Flex>
                </Box>
            </Stack>
        </>
    )
}