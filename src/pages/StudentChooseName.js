import React from "react";
import { useState } from "react";

import {
  Stack,
  Select,
  Flex,
  FormControl,
  FormLabel,
  Button,
} from "@chakra-ui/react";
import { Link } from "react-router-dom";
import axios from "axios";

import { URL } from "../constants";
import AppHeader from "../components/AppHeader/AppHeader";

function StudentChooseName() {
  const [names, setNames] = useState([]);
  const [studentName, setStudentName] = useState("James");

  //  #TODO - Get all students names from database

  React.useEffect(() => {
    // API call to get all student names, to list in the dropdown
    axios.get(`${URL}/api/students/`).then((res) => {
      console.log(res.data);
      res.data.map((student) => {
        console.log(student.name);
        setNames((names) => [...names, student.name]);
      });
    });
  }, []);

  return (
    <>
      <Stack padding="5" spacing="5">
        <AppHeader backNavigation={"/student"} />

        <Flex justifyContent="center">
          <Stack
            spacing="10"
            width="50%"
            borderRadius="20"
            backgroundColor="blue.800"
            padding="10"
          >
            <FormControl>
              <FormLabel>List of students in all classes.</FormLabel>
              <Select
                mb="10"
                placeholder="Select your Name"
                onChange={(e) => {
                  setStudentName(e.target.value);
                }}
              >
                {names.map((name) => (
                  <option value={name}>{name}</option>
                ))}
              </Select>

              <Link to={`${studentName}`}>
                <Button style={{ width: "100%" }}>
                  View your Attendance in your classes
                </Button>
              </Link>
            </FormControl>
          </Stack>
        </Flex>
      </Stack>
    </>
  );
}

export default StudentChooseName;
