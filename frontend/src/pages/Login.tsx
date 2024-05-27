import { Box } from "@chakra-ui/react";
import { FormLogin } from "../features/auth/components/FormLogin";

export default function Login() {
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
      <FormLogin />
    </Box>
  );
}
