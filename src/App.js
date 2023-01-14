import { useState } from "react"
import { Stack } from "@chakra-ui/react"

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

  return (
    <>
        <Stack>
          <FileUpload
            setStudentList={setStudentList}
          />
          <StudentsList
            studentList={studentList}
          />
        </Stack>
    </>
  );
}

export default App;
