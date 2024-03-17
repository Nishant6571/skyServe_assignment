import {
  FormControl,
  FormLabel,
  Box,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";
import React from "react";
import { Link } from "react-router-dom";

const Loginpage = () => {
  return (
    <Box
      w="100%"
      h="600px"
      display="flex"
      justifyContent="center"
      alignItems="center"
    >
      <Box
        backgroundColor="#85c8f5"
        w="30%"
        h="400px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        p={"20px 20px 20px 20px"}
        borderRadius="10px"
      >
        <form>
          <Heading>Login</Heading>
          <FormControl>
            <FormLabel mt={"10px"}>Email address:</FormLabel>
            <Input bg={"white"} mt={"10px"} type="email" />
          </FormControl>
          <FormControl>
            <FormLabel mt={"10px"}>Password:</FormLabel>
            <Input
              bg={"white"}
              mt={"10px"}
              type="password
            "
            />
          </FormControl>
          <p
            style={{
              display: "flex",
              justifyContent: "flex-end",
              marginTop: "10px",
              gap: "5px",
            }}
          >
            Not Registered?
            <span style={{ color: "white" }}>
              <Link to="/signup">Signup</Link>
            </span>
          </p>
          <Button mt={"40px"} w="100%" bg="#2c96dc">
            Login
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Loginpage;
