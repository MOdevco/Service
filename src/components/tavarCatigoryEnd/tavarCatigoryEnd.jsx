import React, { useEffect, useState } from 'react'
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
    Box,
    Text,
  } from "@chakra-ui/react";
  import { Checkbox, CheckboxGroup } from '@chakra-ui/react'
  import { MdOutlineMoreVert } from "react-icons/md";
// import TavartableStart from '../tavartableStart/tavartableStart';
import axios from 'axios';
import { API } from '../../api';
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
function TavarCatigoryEnd() {
    // const monthNames = [
    //   "January",
    //   "February",
    //   "March",
    //   "April",
    //   "May",
    //   "June",
    //   "July",
    //   "August",
    //   "September",
    //   "October",
    //   "November",
    //   "December",
    // ];
    // const d = new Date();
    // let name = monthNames[d.getMonth()];
    // const [data,setData] = useState([])
    // const [open, setopen] = useState(false);
    // const handleClick = () => setopen(!open);
    // useEffect(() => {
    //     axios
    //       .get(`${API}api/category-types`, {
    //         headers: {
    //           // "ngrok-skip-browser-warning": true,
    //           // "Access-Control-Allow-Origin": "*",
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       })
    //       .then((res) => {
    //         setData(res.data);
    //       });
    //   }, []);
  return (
    <Box>
      {/* <Box>
      <Box display={"Flex"} alignItems={"center"} gap="10px" mt={"35px"}>
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

     
      </Box> */}
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
                <Tr>
                  <Td w={'0%'}  ><Checkbox size='lg' colorScheme='purple' ></Checkbox></Td>
                  <Td  w={'50%'}>Aux</Td>
                  <Td>20 Okt 2023</Td>
                  <Td>Komiljon Soliyev Xaydarovich</Td>
                </Tr>    
                <Tr>
                  <Td><Checkbox size='lg' colorScheme='purple' ></Checkbox></Td>
                  <Td>TypeC - USB</Td>
                  <Td>20 Okt 2023</Td>
                  <Td>Komiljon Soliyev Xaydarovich</Td>
                </Tr>    
                <Tr>
                  <Td><Checkbox size='lg' colorScheme='purple' ></Checkbox></Td>
                  <Td>Aux - Type C</Td>
                  <Td>20 Okt 2023</Td>
                  <Td>Komiljon Soliyev Xaydarovich</Td>
                </Tr>    
                <Tr>
                  <Td><Checkbox size='lg' colorScheme='purple' ></Checkbox></Td>
                  <Td>HDMI - HDMI</Td>
                  <Td>20 Okt 2023</Td>
                  <Td>Komiljon Soliyev Xaydarovich</Td>
                </Tr>   
                <Tr>
                  <Td><Checkbox size='lg' colorScheme='purple' ></Checkbox></Td>
                  <Td>HDMI - Type - C</Td>
                  <Td>20 Okt 2023</Td>
                  <Td>Komiljon Soliyev Xaydarovich</Td>
                </Tr> 
                <Tr>
                  <Td><Checkbox size='lg' colorScheme='purple' ></Checkbox></Td>
                  <Td>Micro</Td>
                  <Td>20 Okt 2023</Td>
                  <Td>Komiljon Soliyev Xaydarovich</Td>
                </Tr>               
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
  )
}

export default TavarCatigoryEnd