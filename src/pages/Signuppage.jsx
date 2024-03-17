import React from "react";
import {
  FormControl,
  FormLabel,
  Box,
  Heading,
  Input,
  Button,
} from "@chakra-ui/react";

const Signuppage = () => {
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
        h="500px"
        display="flex"
        flexDirection="column"
        justifyContent="center"
        textAlign="center"
        p={"20px 20px 20px 20px"}
        borderRadius="10px"
      >
        <form>
          <Heading>Signup</Heading>
          <FormControl>
            <FormLabel mt={"10px"}>Username:</FormLabel>
            <Input mt={"10px"} type="text" bg={"white"} />
          </FormControl>
          <FormControl>
            <FormLabel mt={"10px"}>Email address:</FormLabel>
            <Input mt={"10px"} type="email" bg={"white"} />
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
          <Button mt={"40px"} w="100%" bg="#2c96dc">
            Signup
          </Button>
        </form>
      </Box>
    </Box>
  );
};

export default Signuppage;
