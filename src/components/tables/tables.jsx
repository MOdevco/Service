import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
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

const Tables = ({ title }) => {
  const [open, setopen] = useState(false);
  const handleClick = () => setopen(!open)
  return (
    <Box>
      <Box display={"Flex"} alignItems={"center"} gap="10px" mt={"35px"}>
        <Text>{title}</Text>
        <Button bg={'transparent'} _hover={''} _active={''} onClick={handleClick}>{open ? <AiFillMinusCircle color="#B10202" /> : <AiFillPlusCircle color="#4CAF50" />}</Button>
      </Box>
      {open && <Box pb={"25px"} display={"flex"} alignItems={"center"}>
        <Input
          width={"20%"}
          placeholder="Ventilyator"
          h={"2.4rem"}
          size="md"
          borderRightRadius={"0"}
        />
        <Button
          bg={"#4CAF50"}
          color={"#fff"}
          size="md"
          borderRightRadius={'0'}
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
            <Tr bg="#F1F3F9" >
              <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>№</Th>
              <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}> Nomi</Th>
              <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>Qo’shilgan sana</Th>
              <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>User</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr >
              <Td>1</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                <MdOutlineMoreVert  size={"29px"} />
              </Td>
            </Tr>
            <Tr bg={'#F8F9FC'}>
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
            <Tr bg={'#F8F9FC'}>
              <Td>3</Td>
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
};

export default Tables;
