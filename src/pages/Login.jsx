import {
  Box,
  Button,
  FormControl,
  FormLabel,
  Heading,
  Input,
  Toast,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { API } from "../components/api/api";
import axios from "axios";
import { Navigate, useNavigate } from "react-router-dom";

function Login() {
  const [data, setData] = useState({ username: "", password: "" });
    const Navigate = useNavigate()
  const handleSubmit = () => {
    
    axios
      .post(`${API}api/auth/login`, {
        "username": data.username.trim(),
        "password": data.password.trim()

      })
      .then((res) => {
        if (res.status == 200) {
            localStorage.setItem('token', res.data.token)
          Navigate("/");
        } else {
        }
      })
      .catch((err) => {
        Toast({
          title: "Bunda User Mavjud Emas!!!",
          status: "error",
          position: "top-right",
          duration: 2000,
          isClosable: true,
        });
      });
  };

  return (
    <Box>
      <Box
        minHeight={"100vh"}
        width={"100%"}
        bg={"white"}
        display={"flex"}
        flexDirection={"column"}
        alignItems={"center"}
        justifyContent={"center"}
        position={"fixed"}
        top={0}
        left={0}
        zIndex={1000}
      >
        <Box
          display={"flex"}
          gap={"20px"}
          width={"100%"}
          flexDirection={"column"}
          alignItems={"center"}
        >
          {/* start title */}
          <Box>
            <Heading fontSize={"32px"} fontWeight={"bold"}>
              Login
            </Heading>
          </Box>
          {/* start form */}
          <Box width={"30%"}>
            <FormControl display={"flex"} flexDirection={"column"} gap={"0px"}>
              <FormLabel>Username</FormLabel>
              <Input
                onChange={(e) => setData({ ...data, username: e.target.value })}
                width={"100%"}
                type="text"
              />
              <FormLabel mt={"20px"}>Password</FormLabel>
              <Input
                onChange={(e) => setData({ ...data, password: e.target.value })}
                width={"100%"}
                type="password"
              />
              <Button
                onClick={handleSubmit}
                mt={"20px"}
                _hover={{ bg: "#8D5FEF" }}
                color={"white"}
                width={"100%"}
                bg={"#5D5FEF"}
              >
                Login
              </Button>
            </FormControl>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}

export default Login;
