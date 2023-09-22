import { Box, Button, Input, Text } from "@chakra-ui/react";
import React from "react";
import { AiFillPlusCircle } from "react-icons/ai";
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
        <AiFillPlusCircle />
      </Box>

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
      </Box>

      <TableContainer shadow={"0px 2px 8px 0px rgba(0, 0, 0, 0.12)"}>
        <Table width={"100%"} rounded={"16px"} fontSize={'19px'}>
          <Thead>
            <Tr bg="#F1F3F9">
              <Th fontSize={'17px'}>№</Th>
              <Th fontSize={'17px'}> Nomi</Th>
              <Th fontSize={'17px'}>Qo’shilgan sana</Th>
              <Th fontSize={'17px'}>User</Th>
              <Th></Th>
            </Tr>
          </Thead>
          <Tbody>
            <Tr>
              <Td>1</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td>
                <MdOutlineMoreVert size={"29px"} />
              </Td>
            </Tr>
            <Tr bg="#F1F3F9">
              <Td>2</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td>
                <MdOutlineMoreVert size={"29px"} />
              </Td>
            </Tr>
            <Tr>
              <Td>3</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td>
                <MdOutlineMoreVert size={"29px"} />
              </Td>
            </Tr>
            <Tr bg="#F1F3F9">
              <Td>4</Td>
              <Td>Mobile maxsulotlar</Td>
              <Td>22 Noy 2023</Td>
              <Td>Komiljon Soliyev Xaydarovich</Td>
              <Td>
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
