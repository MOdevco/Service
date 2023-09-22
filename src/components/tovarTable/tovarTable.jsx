import { Box, Button, Input, Text } from "@chakra-ui/react";
<<<<<<< HEAD
import React, { useState } from "react";
=======
import React from "react";
>>>>>>> 435a84cc7608676adf795817a0a0a52ae61e0a36
import { AiFillMinusCircle, AiFillPlusCircle } from "react-icons/ai";
import { MdOutlineMoreVert } from "react-icons/md";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

function TovarTable({ title }) {
  const [open, setopen] = useState(false);
  const handleClick = () => setopen(!open)
  return (
    <Box>
      <Box
        display={"Flex"}
        alignItems={"center"}
        gap="10px"
        mt={"35px"}
        pb={"16px"}
      >
        <Text color={"#404E67"} fontSize={"20px"} fontWeight={"500"}>
          {title}{" "}
        </Text>
<<<<<<< HEAD
        <Button bg={'transparent'} _hover={''} _active={''} onClick={handleClick}>{open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}</Button>
        
=======
        <AiFillMinusCircle color="#B10202" fontSize={'18px'}/>
>>>>>>> 435a84cc7608676adf795817a0a0a52ae61e0a36
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

      <TableContainer shadow={"0px 2px 8px 0px rgba(0, 0, 0, 0.12)"}>
        <Table width={"100%"} rounded={"16px"} fontSize={'19px'}>
          <Thead>
            <Tr bg="#F1F3F9">
              <Th color={'#1D2433'} fontSize={'17px'} fontWeight={'bold'} textTransform={'capitalize'}>№</Th>
              <Th color={'#1D2433'} fontSize={'17px'} fontWeight={'bold'} textTransform={'capitalize'}> Nomi</Th>
              <Th color={'#1D2433'} fontSize={'17px'} fontWeight={'bold'} textTransform={'capitalize'}>Qo’shilgan sana</Th>
              <Th color={'#1D2433'} fontSize={'17px'} fontWeight={'bold'} textTransform={'capitalize'}>User</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                <MdOutlineMoreVert size={"29px"} />
              </Td>
            </Tr>
            <Tr bg="#F1F3F9">
              <Td>2</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                <MdOutlineMoreVert size={"29px"} />
              </Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                <MdOutlineMoreVert size={"29px"} />
              </Td>
            </Tr>
            <Tr bg="#F1F3F9">
              <Td>4</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                <MdOutlineMoreVert size={"29px"} />
              </Td>
            </Tr>
          </Tbody>
        </Table>
      </TableContainer>
    </Box>
  );
}

export default TovarTable;
