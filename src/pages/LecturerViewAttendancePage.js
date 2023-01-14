import { useState, useEffect } from "react";
import { Heading, Stack, HStack, Box, Badge } from "@chakra-ui/react";

import FileUpload from "../components/FileUpload/FileUpload";
import StudentsList from "../components/StudentsList/StudentsList";
import { MockStudentList } from "../mock_data/MockStudentList";
import AppHeader from "../components/AppHeader/AppHeader";
import { useParams } from "react-router-dom";
import axios from "axios";

import { URL } from "../constants";
// const TEST_CLASS_CODE = "cs2040s-ay2021-s1-class1";

/* Helper Functions */
const initialiseStudentList = (studentList) => {
  return studentList.map((studentName) => {
    return {
      name: studentName,
      present: false,
    };
  });
};

export default function LecturerViewAttendancePage() {
  let { classCode } = useParams();

  const [studentList, setStudentList] = useState([]);

  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {    
    axios.get(`${URL}/api/class/${classCode}/students/`)
      .then(res => res.data)
      .then(data => {
        const studentListWithAllAbsentAttendance = initialiseStudentList(data);
        setStudentList(studentListWithAllAbsentAttendance)

        console.log(studentList)
    })
      .catch(err => console.log(err))
  }, [])

  return (
    <>
      <Stack padding="5" spacing="5">
        <AppHeader />

        <Box borderRadius={10} backgroundColor="transparent" padding="5">
          <HStack>
            <Badge>Class Code</Badge>
            <Heading size="sm">{classCode}</Heading>
          </HStack>
        </Box>

        <FileUpload
          setStudentList={setStudentList}
          isLoading={isLoading}
          setIsLoading={setIsLoading}

          classCode={classCode}
        />

        <StudentsList
          studentList={studentList}
          isLoading={isLoading}

          classCode={classCode}
        />
      </Stack>
    </>
  );
}
