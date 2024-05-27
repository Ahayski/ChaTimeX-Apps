import { Box, Button, Flex, FormControl, Input, Text } from "@chakra-ui/react";
import { BiLogoXing } from "react-icons/bi";
import { useRegister } from "../hooks/useRegister";
import { Link } from "react-router-dom";

export const FormRegister = () => {
  const { handleChange, handleRegister } = useRegister();
  return (
    <Box
      bg={"#EEEDED"}
      borderRadius={20}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
      py={"30px"}
    >
      <Flex justifyContent={"center"}>
        <Text fontSize={"2xl"} fontWeight={"bold"} color={"green"}>
          Create Your Account
        </Text>
      </Flex>
      <Flex justifyContent={"center"}>
        <Text color={"green"} fontSize={"2xl"} fontWeight={"bold"}>
          ChaTime
        </Text>
        <Text fontSize={35} color={"green"} mt={1}>
          <BiLogoXing />
        </Text>
      </Flex>
      <FormControl
        color={"black"}
        isRequired
        display={"flex"}
        flexDirection={"column"}
        gap={5}
        width={"350px"}
        p={4}
        borderColor={"green"}
      >
        <Input placeholder="FullName" name="fullName" onChange={handleChange} />
        <Input placeholder="Username" name="username" onChange={handleChange} />
        <Input placeholder="Email" name="email" onChange={handleChange} />
        <Input
          type="password"
          placeholder="Password"
          name="password"
          onChange={handleChange}
        />
        <Button
          backgroundColor={"green"}
          colorScheme="green"
          color={"white"}
          onClick={handleRegister}
        >
          Create
        </Button>
      </FormControl>
      <Box display={"flex"} gap={2} justifyContent={"center"} color={"#606C5D"}>
        <Text>Already have account?</Text>
        <Link to={"/login"}>
          <Text color={"brand.green"} cursor={"pointer"}>
            Login
          </Text>
        </Link>
      </Box>
    </Box>
  );
};
