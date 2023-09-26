import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { coin, coins, recive, report } from "../../assets";
import { Link } from "react-router-dom";

const NavbarLinksProps = ({ linkName, linkIcon, path }) => {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"50px"}>
      <Link to={path}>
        <Box
          display={"flex"}
          cursor={"pointer"}
          alignItems={"center"}
          gap={"14px"}
        >
          <Image src={linkIcon} />
          <Text color={"#fff"} fontSize={"20px"} fontWeight={"500"}>
            {linkName}
          </Text>
        </Box>
      </Link>
    </Box>
  );
};

export default NavbarLinksProps;

