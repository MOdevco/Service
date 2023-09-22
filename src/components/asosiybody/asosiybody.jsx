import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React from "react";
import {MdOutlineMoreVert } from 'react-icons/md'
import {AiFillPlusCircle} from  'react-icons/ai'
import {
  Table,
  Thead,
  Tbody,
  Tr,
  Th,
  Td,
  TableContainer,
} from "@chakra-ui/react";

const Asosiybody = () => {
  return (
    <Box>
      <TableContainer >
        <Box display={'Flex'} alignItems={'center'} gap="10px" mt={'35px'}>
            <Text>Tovar sotiladigan qurilmalar</Text>
            <AiFillPlusCircle />
        </Box>
        <Table width={'100%'} rounded={'16px'} >
            <Thead>
                <Tr bg='#F1F3F9'>
                    <Th>№</Th>
                    <Th> Nomi</Th>
                    <Th>Qo’shilgan sana</Th>
                    <Th >User</Th>
                    <Th></Th>
                </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td><MdOutlineMoreVert size={'29px'} /></Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td><MdOutlineMoreVert size={'29px'} /></Td>
            </Tr>
            <Tr>
              <Td>1</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td><MdOutlineMoreVert size={'29px'} /></Td>
            </Tr>
            
            
          </Tbody>
          
        </Table>
      </TableContainer>
    </Box>
  );
};

export default Asosiybody;
