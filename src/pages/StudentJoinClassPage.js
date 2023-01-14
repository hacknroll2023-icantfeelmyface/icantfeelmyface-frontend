import { useState } from "react";
import { Flex, Box, Stack, Heading, FormControl, FormLabel, Input, Button, useToast } from "@chakra-ui/react"
import { Link, useNavigate } from "react-router-dom"
import axios from "axios";

import AppHeader from "../components/AppHeader/AppHeader";

export default function StudentJoinClassPage() {
    const [name, setName] = useState("")
    const [classCode, setClassCode] = useState("")
    const [file, setFile] = useState("")

    const [isLoading, setIsLoading] = useState(false);
    const navigate = useNavigate();

    const handleStudentJoinClass = () => {
        const API_URL = "http://172.31.123.185:8000/api/students/";

        const body = {
            'name': name,
            'class': classCode,
            'file': file
        }

        setIsLoading(true);

        axios.post(API_URL, JSON.stringify(body))
            .then((response) => {
                console.log(response);

                setIsLoading(false);

                navigate("/student");
            })
            .catch((err) => {
                console.error(err)

                navigate("/student")
            });
    }

    const handleFileChange = (e) => {
        if (e.target.files) {
            setFile(e.target.files[0]);
        }
    };

    return (
        <Stack padding="5" spacing="5">
            <AppHeader />

            <Flex justifyContent="center">
                <Stack spacing="10" width="50%" borderRadius="20" backgroundColor="blue.800" padding="10">
                    <FormControl>
                        <FormLabel>Name</FormLabel>
                        <Input type='text' onChange={(e) => setName(e.target.value)}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Class Code</FormLabel>
                        <Input type='text' onChange={(e) => setClassCode(e.target.value)}/>
                    </FormControl>

                    <FormControl>
                        <FormLabel>Picture</FormLabel>
                        <Input type='file' style={{ border: "0" }} onChange={handleFileChange} />
                    </FormControl>

                    {/* <Link to="/student"> */}
                        <Button style={{ width: "100%" }} onClick={handleStudentJoinClass} >Join Class</Button>
                    {/* </Link> */}
                </Stack>
            </Flex>
        </Stack>
    )
}