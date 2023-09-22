import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
  Button,
  Input,
} from "@chakra-ui/react";
import axios from "axios";
import { API } from "../../api";

const Tables = ({ title }) => {
  const [open, setopen] = useState(false);
  const [data, setData] = useState([]);
  
  
  const handleClick = () => setopen(!open)
  



  return (
    <Box>
      <Box display={"Flex"} alignItems={"center"} gap="10px"pb={'10px'} mt={"35px"}>
        <Text fontSize={'20px'}>{title}</Text>
        <Text bg={'transparent'} _hover={''} _active={''} onClick={handleClick}>{open ? <AiFillMinusCircle color="#B10202" /> : <AiFillPlusCircle color="#4CAF50" />}</Text>
      </Box>
      {open && <Box pb={"25px"} display={"flex"} alignItems={"center"}>
        <Input
          width={"20%"}
          placeholder="Ventilyator"
          h={"2.4rem"}
          size="md"
          borderRightRadius={"none"}
        />
        <Button
          bg={"#4CAF50"}
          color={"#fff"}
          size="md"
          borderRadius={"3px"}
          _hover={"none"}
          _active={"none"}
        >
          Qo’shish
        </Button>
        <Box pl={"15px"} display={'flex'} alignItems={'center'} gap={'15px'}>
          <Button
            _hover={"none"}
            color={"#fff"}
            padding={"11px 31px"}
            _active={"none"}
            bg={"#404E67"}
            borderRadius={'3px'}
          >
            Excel
          </Button>
          <Button
            _hover={"none"}
            color={"#fff"}
            padding={"11px 31px"}
            _active={"none"}
            bg={"#3A69BB"}
            borderRadius={'3px'}
          >
            Yuklash
          </Button>
        </Box>
      </Box>}

    
    </Box>
  );
};

export default Tables;
