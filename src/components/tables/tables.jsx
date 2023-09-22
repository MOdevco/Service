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
        <Button bg={'transparent'} _hover={''} _active={''} onClick={handleClick}>{open ? <AiFillMinusCircle /> : <AiFillPlusCircle />}</Button>
      </Box>
      {open && <Box pb={'20px'} display={"flex"} alignItems={"center"} gap={'25px'}>
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
          borderRadius={"4px"}
          _hover={"none"}
          _active={"none"}
        >
          Qo’shish
        </Button>
      </Box>}

      <TableContainer shadow={"0px 2px 8px 0px rgba(0, 0, 0, 0.12)"}>
        <Table width={"100%"} rounded={"16px"} fontSize={'19px'}>
          <Thead>
            <Tr bg="#F1F3F9" >
              <Th fontSize={'17px'}>№</Th>
              <Th fontSize={'17px'}> Nomi</Th>
              <Th fontSize={'17px'}>Qo’shilgan sana</Th>
              <Th fontSize={'17px'}>User</Th>
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
