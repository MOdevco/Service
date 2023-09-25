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

const TavartableStart = ({ title }) => {
  const [open, setopen] = useState(false);
  const handleClick = () => setopen(!open);
  const [data, setData] = useState([]);

  return (
    <Box>
      <Box display={"Flex"} alignItems={"center"} gap="10px" mt={"35px"}>
        <Text>Tovar sotiladigan qurilmalar</Text>
        <Button
          bg={"transparent"}
          _hover={""}
          _active={""}
          onClick={handleClick}
        >
          {open ? (
            <AiFillMinusCircle color="#B10202" />
          ) : (
            <AiFillPlusCircle color="#4CAF50" />
          )}
        </Button>
      </Box>
      {open && (
        <Box pb={"25px"} display={"flex"} alignItems={"center"}>
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
          <Box pl={"15px"} display={"flex"} alignItems={"center"} gap={"15px"}>
            <Button
              _hover={"none"}
              color={"#fff"}
              padding={"11px 31px"}
              _active={"none"}
              bg={"#404E67"}
              borderRadius={"3px"}
            >
              Excel
            </Button>
            <Button
              _hover={"none"}
              color={"#fff"}
              padding={"11px 31px"}
              _active={"none"}
              bg={"#3A69BB"}
              borderRadius={"3px"}
            >
              Yuklash
            </Button>
          </Box>
        </Box>
      )}
    </Box>
  );
};

export default TavartableStart;
