import {
  Box,
  Center,
  Flex,
  Heading,
  ListItem,
  Text,
  UnorderedList,
} from "@chakra-ui/react";
import { CgProfile } from "react-icons/cg";
import { CiLogout } from "react-icons/ci";
import { GoHeartFill } from "react-icons/go";
import { IoMdHome } from "react-icons/io";
import { MdOutlinePersonSearch } from "react-icons/md";
import { useDispatch, useSelector } from "react-redux";
import { NavLink } from "react-router-dom";
import { AUTH_LOGOUT } from "../stores/rootReducer";
import { RootState } from "../stores/types/rootState";
import PostModal from "./PostModal";
import { BiLogoXing } from "react-icons/bi";

export default function MenuBar() {
  const profile = useSelector((state: RootState) => state.profile);
  const dispatch = useDispatch();
  const handleLogout = () => {
    localStorage.removeItem("authData");
    dispatch(AUTH_LOGOUT());
    window.location.href = "/login";
  };

  return (
    <Box
      bg={"#EEEDED"}
      rounded={"lg"}
      mx={2}
      my={2}
      boxShadow="0px 4px 6px rgba(0, 0, 0, 0.5)"
    >
      <Box h={"94vh"} m={4} pt={2}>
        <Flex gap={3} ml={4}>
          <Heading bgGradient="linear(to-l, #1e6091,#40916c)" bgClip="text">
            ChaTime
          </Heading>
          <Heading color="#1b4332" mt={1}>
            <BiLogoXing />
          </Heading>
        </Flex>
        <UnorderedList ml={7} my={4} style={{ listStyleType: "none" }}>
          <ListItem my={2} color={"#2d6a4f"}>
            <Flex>
              <Center>
                <NavLink
                  to={"/"}
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "",

                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  <Flex
                    fontWeight={"bold"}
                    _hover={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "green.500",
                    }}
                  >
                    <Text fontSize={"2xl"}>
                      <IoMdHome />
                    </Text>
                    <Text pl={2}>HOME</Text>
                  </Flex>
                </NavLink>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} mt={5} color={"#2d6a4f"}>
            <Flex>
              <Center>
                <NavLink
                  to={"/search"}
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "",

                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  <Flex
                    fontWeight={"bold"}
                    _hover={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "green.500",
                    }}
                  >
                    <Text fontSize={"2xl"}>
                      <MdOutlinePersonSearch />
                    </Text>
                    <Text pl={2}>SEARCH</Text>
                  </Flex>
                </NavLink>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} mt={5} color={"#2d6a4f"}>
            <Flex>
              <Center>
                <NavLink
                  to={"/follow"}
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "",

                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  <Flex
                    fontWeight={"bold"}
                    _hover={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "green.500",
                    }}
                  >
                    <Text fontSize={"2xl"}>
                      <GoHeartFill />
                    </Text>
                    <Text pl={2}>FOLLOWS</Text>
                  </Flex>
                </NavLink>
              </Center>
            </Flex>
          </ListItem>
          <ListItem my={2} mt={5} color={"#2d6a4f"}>
            <Flex>
              <Center>
                <NavLink
                  onClick={() =>
                    localStorage.setItem("id", JSON.stringify(profile.id))
                  }
                  to={`/detail-profile/${profile.id}`}
                  style={({ isActive, isTransitioning }) => {
                    return {
                      fontWeight: isActive ? "bold" : "",
                      color: isActive ? "green" : "",

                      viewTransitionName: isTransitioning ? "slide" : "",
                    };
                  }}
                >
                  <Flex
                    fontWeight={"bold"}
                    _hover={{
                      textDecoration: "none",
                      fontWeight: "bold",
                      color: "green.500",
                    }}
                  >
                    <Text fontSize={"2xl"}>
                      <CgProfile />
                    </Text>
                    <Text pl={2}>PROFILE</Text>
                  </Flex>
                </NavLink>
              </Center>
            </Flex>
          </ListItem>
          /{" "}
        </UnorderedList>
        <PostModal />
        <Box
          mt={220}
          display={"flex"}
          justifyContent={"center"}
          alignItems={"center"}
          onClick={handleLogout}
          cursor="pointer"
          color={"#bc4749"}
          fontWeight={"bold"}
          _hover={{ fontWeight: "bold", color: "red" }}
        >
          <Box ml={2}>
            {" "}
            <CiLogout />
          </Box>
          <Text>Logout</Text>
        </Box>
      </Box>
    </Box>
  );
}
