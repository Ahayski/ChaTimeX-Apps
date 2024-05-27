import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { BiLogoXing } from "react-icons/bi";
import { Link } from "react-router-dom";
import { useLogin } from "../hooks/useLogin";

export const FormLogin = () => {
  const { handleChange, handleLogin } = useLogin();
  return (
    <>
      <Box
        bg={"#EEEDED"}
        borderRadius={20}
        boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
        py={"30px"}
      >
        <FormControl
          color={"black"}
          isRequired
          display={"flex"}
          flexDirection={"column"}
          gap={3}
          width={"320px"}
          p={4}
          borderColor={"green"}
        >
          <Flex justifyContent={"center"} mb={5}>
            <Text color={"green"} fontSize={"2xl"} fontWeight={"bold"}>
              Login ChaTime
            </Text>
            <Text fontSize={35} color={"green"} mt={1}>
              <BiLogoXing />
            </Text>
          </Flex>

          <Input placeholder="Email" name="email" onChange={handleChange} />
          <Input
            type="password"
            placeholder="Password"
            name="password"
            onChange={handleChange}
          />
          <Box color={"#606C5D"} display="flex" justifyContent={"flex-end"}>
            <Text>Forgot password?</Text>
          </Box>
          <Button
            backgroundColor={"green"}
            colorScheme="green"
            color={"white"}
            onClick={handleLogin}
          >
            Login
          </Button>
        </FormControl>
        <Box
          display={"flex"}
          gap={2}
          fontSize={"sm"}
          justifyContent={"center"}
          color={"#606C5D"}
        >
          <Text>Don't have an account yet?</Text>
          <Link to={"/register"}>
            <Text cursor={"pointer"}>Create account</Text>
          </Link>
        </Box>
      </Box>
    </>
  );
};
