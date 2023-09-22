import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { coin, coins, recive, report } from "../../assets";
function NavbarLinks() {
  return (
    <Box display={"flex"} alignItems={"center"} gap={"50px"}>
      <Box display={"flex"} alignItems={"center"} gap={"14px"}>
        <Image src={coin} />
        <Text color={"#00C566"} fontSize={"24px"} fontWeight={"500"}>
          Asosiy ma’lumotlar
        </Text>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"14px"}>
        <Image src={coins} />
        <Text color={"#fff"} fontSize={"24px"} fontWeight={"500"}>
          Sotuv
        </Text>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"14px"}>
        <Image src={recive} />
        <Text color={"#fff"} fontSize={"24px"} fontWeight={"500"}>
          Maxsulot qabuli
        </Text>
      </Box>
      <Box display={"flex"} alignItems={"center"} gap={"14px"}>
        <Image src={report} />
        <Text color={"#fff"} fontSize={"24px"} fontWeight={"500"}>
          Hisobotlar
        </Text>
      </Box>
    </Box>
  );
}

export default NavbarLinks;
