import { useState } from "react";
import { Input, Button, Stack, Box, Heading, Flex } from "@chakra-ui/react"

export default function FileUpload({ setStudentList }) {
    const [file, setFile] = useState(null);

    const handleUpdateStudentList = (newStudentList) => {
        const FAKE_API_RESPONSE = [
            {
                name: "Ryan",
                present: true
            },
            {
                name: "Anun",
                present: false
            },
            {
                name: "James",
                present: true
            },
        ]

        setStudentList(oldStudentList => {
            return oldStudentList.map(s => {
                const newStudentStatus = FAKE_API_RESPONSE.find(x => x.name === s.name)
                
                if (newStudentStatus) {
                    return {
                        ...s,
                        present: newStudentStatus.present
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
    
        // 👇 Uploading the file using the fetch API to the server
        fetch('https://httpbin.org/post', {
          method: 'POST',
          body: file,
          // 👇 Set headers manually for single file upload
          headers: {
            'content-type': file.type,
            'content-length': `${file.size}`, // 👈 Headers need to be a string
          },
        })
          .then((res) => res.json())
          .then((data) => console.log(data))
          .then((data) => handleUpdateStudentList(data))
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
                        <Button disabled={!file} onClick={handleUploadClick} size="lg" colorScheme='blue'>Upload</Button>
                    </Flex>
                </Box>
            </Stack>
        </>
    )
}