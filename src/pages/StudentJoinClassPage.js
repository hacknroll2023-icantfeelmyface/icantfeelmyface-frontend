import { useState, useEffect } from "react";
import {
  Flex,
  Spinner,
  Stack,
  Select,
  FormControl,
  FormLabel,
  Input,
  Button,
  useToast,
} from "@chakra-ui/react";
import { Link, useNavigate } from "react-router-dom";
import axios from "axios";

import { URL } from "../constants";
import AppHeader from "../components/AppHeader/AppHeader";
<<<<<<< HEAD

/* Helper functions */
const convertBase64 = (file) => {
  return new Promise((resolve, reject) => {
    const fileReader = new FileReader();
    fileReader.readAsDataURL(file);

    fileReader.onload = () => {
      resolve(fileReader.result);
    };

    fileReader.onerror = (error) => {
      reject(error);
    };
  });
};
=======
import { convertBase64 } from "../utils";
>>>>>>> afff92305d951e34ab257ab3e2a72a8bf517713e

export default function StudentJoinClassPage() {
  const [data, setData] = useState([]);

  const [name, setName] = useState("");
  const [classCode, setClassCode] = useState("");
  const [file, setFile] = useState("");

  const [isLoading, setIsLoading] = useState(false);

  const navigate = useNavigate();

  useEffect(() => {
    axios.get(`${URL}/api/class/`).then((res) => {
      //   console.log(res.data);
      setData(res.data);

      // classCodesData = res.data;
    });
  }, []);

  const toast = useToast();

  const showSuccessToast = () => {
    toast({
      title: "You're in!",
      description: "Welcome to the class!",
      status: "success",
      duration: 5000,
      isClosable: true,
    });
  };

  const showErrorToast = () => {
    toast({
      title: "Error.",
      description: "Oops, something went wrong.",
      status: "error",
      duration: 5000,
      isClosable: true,
    });
  };

  const handleStudentJoinClass = async () => {
    const API_URL = `${URL}/api/students/`;

    // convert the image to a base64 string
    const encodedFile = await convertBase64(file);

    const body = {
      name: name,
      class_code: classCode,
      image: encodedFile,
    };

    setIsLoading(true);

    axios
      .post(API_URL, JSON.stringify(body))
      .then((response) => {
        console.log(response);

        setIsLoading(false);
        showSuccessToast();

        navigate("/student");
      })
      .catch((err) => {
        console.error(err);

        showErrorToast();

        setIsLoading(false);
      });
  };

  const handleFileChange = (e) => {
    if (e.target.files) {
      setFile(e.target.files[0]);
    }
  };

  return (
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
            <FormLabel>Name</FormLabel>
            <Input type="text" onChange={(e) => setName(e.target.value)} />
          </FormControl>

          <FormControl>
            <FormLabel>Class Code</FormLabel>
            <Select
              placeholder="Select Class"
              onChange={(e) => {
                setClassCode(e.target.value);
              }}
            >
              {data.map((classCode) => (
                <option value={classCode.name}>{classCode.name}</option>
              ))}
            </Select>
          </FormControl>

          <FormControl>
            <FormLabel>Picture</FormLabel>
            <Input
              type="file"
              style={{ border: "0" }}
              onChange={handleFileChange}
            />
          </FormControl>

          <Flex justifyContent="center">
            {isLoading ? (
              <Spinner size="sm" />
            ) : (
              <Button
                disabled={name === "" || classCode === ""}
                style={{ width: "100%" }}
                onClick={handleStudentJoinClass}
              >
                Join Class
              </Button>
            )}
          </Flex>
        </Stack>
      </Flex>
    </Stack>
  );
}
