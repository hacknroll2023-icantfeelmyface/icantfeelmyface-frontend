import { useState } from "react";
import { Flex, Spinner, Stack, Heading, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import { useNavigate } from "react-router-dom"
import axios from "axios";

import { URL } from "../constants";

import AppHeader from "../components/AppHeader/AppHeader";

export default function LecturerAddClassPage() {
    const [classCode, setClassCode] = useState("")
    const [isLoading, setIsLoading] = useState(false)

    const handleAddClass = () => {
        const API_URL = `${URL}/api/class/`
        
        setIsLoading(true);

        axios.post(API_URL, {
            'name': classCode
        })
        .then((response) => {console.log(response)})
        .catch((error) => {console.log(error)})

        setIsLoading(false);
    }

    return (
        <Stack padding="5" spacing="5">
            <AppHeader />

            <Flex justifyContent="center">
                <Stack spacing="10" width="50%" borderRadius="20" backgroundColor="blue.800" padding="10">
                    <FormControl>
                        <FormLabel>Class Code</FormLabel>
                        <Input type='text' onChange={(e) => setClassCode(e.target.value)} />
                    </FormControl>
                    
                    {isLoading ? <Spinner /> : <Button onClick={handleAddClass} style={{ width: "100%" }}>Add Class</Button>}                    
                </Stack>
            </Flex>
        </Stack>
    )
}