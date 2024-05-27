import { Box } from "@chakra-ui/react";
import { FormRegister } from "../features/auth/components/FormRegister";

export const Register = () => {
  return (
    <Box
      display={"flex"}
      flexDirection={"column"}
      alignItems={"center"}
      justifyContent={"center"}
      backgroundSize="cover"
      backgroundPosition="center"
      minHeight="100vh"
      bg={"white"}
    >
      <FormRegister />
    </Box>
  );
};
