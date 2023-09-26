import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import NavbarLinks from "../navbarLinks/NavbarLinks";

function Navbar() {
  return (
<<<<<<< HEAD
    <Box position={'fixed'} width={'100%'} zIndex={100}>
      <Box bg={"#404E67"} pl={"26px"} pt={"16px"} pb={"17px"} width={"100%"}>
=======
    <Box w={'100%'} >
      <Box bg={"#404E67"} pl={"26px"}  pt={"16px"} pb={"17px"} width={"100%"}>
>>>>>>> 6aeae5a7860c3a323379b6a8866b20f3b28f2ee9
        <Box display={"flex"} alignItems={"center"} gap={"50px"}>
          <Heading fontSize={"36px"} fontWeight={"500"} color={"#fff"}>
            iStore
          </Heading>
          <NavbarLinks className={({ isActive }) => (isActive ? 'active' : 'inactive')} />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
