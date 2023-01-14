import { useState } from "react"
import { Stack, FormControl, FormLabel, Input, Button } from "@chakra-ui/react"
import axios from "axios"

import AppHeader from "../components/AppHeader/AppHeader"
import { URL } from "../constants";

export default function LecturerLoginPage() {
    const [name, setName] = useState("")   
    
    const handleLogin = () => {
        const API_URL = `${URL}/api/teachers/`

        axios.post(API_URL, {})
    }

    return (
        <Stack padding="5" spacing="5">
            <AppHeader />

            <FormControl>
                <FormLabel>Name</FormLabel>
                <Input onChange={e => setName(e.target.value)} />
                <Button onClick={handleLogin}>Proceed</Button>
            </FormControl>            
        </Stack>
    )
}