import { useState } from "react"
import { Heading, Stack, Box } from "@chakra-ui/react"

import FileUpload from "./components/FileUpload/FileUpload";
import StudentsList from "./components/StudentsList/StudentsList";
import { MockStudentList } from "./mock_data/MockStudentList"

const initialiseStudentList = (studentList) => {
    return studentList.map((s) => {
        return {
            name: s.name,
            present: false
        }
    })
}

function App() {
  const [studentList, setStudentList] = useState(initialiseStudentList(MockStudentList))
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
        <Stack padding="10" spacing="5">
          <Box borderRadius={10} backgroundColor="green.800" padding="5">
            <Heading>I Can't Feel My Face 😳</Heading>
          </Box>

          <FileUpload
            setStudentList={setStudentList}
            
            isLoading={isLoading}
            setIsLoading={setIsLoading}
          />
          <StudentsList
            studentList={studentList}

            isLoading={isLoading}
          />
        </Stack>
    </>
  );
}

export default App;
