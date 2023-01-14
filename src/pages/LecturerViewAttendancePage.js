import { useState } from "react"
import { Heading, Stack, HStack, Box, Badge } from "@chakra-ui/react"

import FileUpload from "../components/FileUpload/FileUpload";
import StudentsList from "../components/StudentsList/StudentsList";
import { MockStudentList } from "../mock_data/MockStudentList"
import AppHeader from "../components/AppHeader/AppHeader";

const TEST_CLASS_CODE = "cs2040s-ay2021-s1-class1"

/* Helper Functions */
const initialiseStudentList = (studentList) => {
    return studentList.map((s) => {
        return {
            name: s.name,
            present: false
        }
    })
}

export default function LecturerViewAttendancePage() {
  const [studentList, setStudentList] = useState(initialiseStudentList(MockStudentList))
  const [isLoading, setIsLoading] = useState(false)

  return (
    <>
        <Stack padding="5" spacing="5">
          <AppHeader />

          <Box borderRadius={10} backgroundColor="transparent" padding="5">
            <HStack>
              <Badge>Class Code</Badge>
              <Heading size="sm">{TEST_CLASS_CODE}</Heading>
            </HStack>
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
