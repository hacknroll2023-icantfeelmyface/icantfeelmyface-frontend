import { useState } from "react";
import { Input, Button, Stack, Box, Heading, Flex } from "@chakra-ui/react"

export default function FileUpload() {
    const [file, setFile] = useState(null);

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
          .catch((err) => console.error(err));
      };

    return (
        <>
            <Stack padding="10" spacing={5}>
                <Box>
                    <Heading>Upload Zoom Participants</Heading>
                </Box>

                <Box>
                    <Input
                        type="file"
                        onChange={handleFileChange}
                    />
                </Box>

                <Box>
                    <Flex justifyContent="flex-end">
                        <Button onClick={handleUploadClick} size="lg">Upload</Button>
                    </Flex>
                </Box>
            </Stack>
        </>
    )
}