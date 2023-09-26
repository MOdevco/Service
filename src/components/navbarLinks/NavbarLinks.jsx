import { Box, Image, Text } from "@chakra-ui/react";
import React from "react";
import { coin, coins, recive, report } from "../../assets";
import { Link, NavLink } from "react-router-dom";
function NavbarLinks() {

  return (
    <Box display={"flex"} alignItems={"center"} gap={"50px"}>
      <Text color={"#fff"} display={'flex'} alignItems={'center'} 
          gap={'15px'} fontSize={"20px"} fontWeight={"500"}>
        <Box>
          <Image pt={'5px'} src={coin} />
        </Box>
      <NavLink to={'/asosiy'}>Asosiy ma’lumotlar  
        </NavLink>
        </Text>
      <NavLink>
        <Box
          display={'flex'}
          pt={'5px'}
          alignItems={'center'}
          cursor={'pointer'}
          gap={'15px'}
        >
          <Image pt={'5px'} src={coins} />
          <Text color={"#fff"} fontSize={"20px"} fontWeight={"500"}>
          Sotuv
          </Text>
        </Box>
      </NavLink>
      <NavLink>
        <Box
          display={'flex'}
          pt={'5px'}
          alignItems={'center'}
          cursor={'pointer'}
          gap={'15px'}
        >
          <Image pt={'5px'} src={recive} />
          <Text color={"#fff"} fontSize={"20px"} fontWeight={"500"}>
          Maxsulot qabuli
          </Text>
        </Box>
      </NavLink>
      <NavLink>
        <Box
          display={'flex'}
          pt={'5px'}
          alignItems={'center'}
          cursor={'pointer'}
          gap={'15px'}
        >
          <Image pt={'5px'} src={report} />
          <Text color={"#fff"} fontSize={"20px"} fontWeight={"500"}>
          Hisobotlar
          </Text>
        </Box>
      </NavLink>
    </Box>
  );
}

export default NavbarLinks;
