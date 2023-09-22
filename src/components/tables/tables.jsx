import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Tables = ({ title }) => {
  return (
    <Box>
      <Box display={"Flex"} alignItems={"center"} gap="10px" mt={"35px"}>
        <Text>{title}</Text>
        <Button bg={'transparent'} _hover={''} _active={''} onClick={handleClick}>{open ? <AiFillMinusCircle color="#B10202" /> : <AiFillPlusCircle color="#4CAF50" />}</Button>
      </Box>

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
