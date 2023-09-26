import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { coin, coins, recive, report } from "../../assets";
import NavbarLinksProps from "../navbarLinksProps/navbarLinksProps";
function NavbarLinks() {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"50px"}>
      <NavbarLinksProps
        linkName={"Asosiy ma’lumotlar"}
        linkIcon={coin}
        path={"/asosiy"}
       
      />
      <NavbarLinksProps linkName={"Sotuv"} linkIcon={coins} />
      <NavbarLinksProps linkName={"Maxsulot qabuli"} linkIcon={recive} />
      <NavbarLinksProps linkName={"Hisobotlar"} linkIcon={report} />
    </Box>
  );
}

export default NavbarLinks;
