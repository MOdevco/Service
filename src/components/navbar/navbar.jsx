import { Box, Flex, Heading } from "@chakra-ui/react";
import React from "react";
import NavbarLinks from "../navbarLinks/NavbarLinks";

function Navbar() {
  return (
<<<<<<< HEAD
    <Boxw={'100%'}  >
=======
    <Box position={'fixed'} width={'100%'} zIndex={100}>
>>>>>>> d9e16683869ff9a6b60d3d7be64aeb41e5bde611
      <Box bg={"#404E67"} pl={"26px"} pt={"16px"} pb={"17px"} width={"100%"}>
        <Box display={"flex"} alignItems={"center"} gap={"50px"}>
          <Heading fontSize={"36px"} fontWeight={"500"} color={"#fff"}>
            iStore
          </Heading>
          <NavbarLinks />
        </Box>
      </Box>
    </Box>
  );
}

export default Navbar;
