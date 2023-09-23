import React, { useEffect } from 'react'
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
  } from "@chakra-ui/react";
  import {MdOutlineMoreVert} from 'react-icons/md'
import axios from "axios";
import { API } from "../../api";
import { useState } from 'react';
import TavartableStart from '../tavartableStart/tavartableStart';
function TavarCatigoryTab() {
      const [data1, setData1] = useState([]);

  useEffect(() => {
    axios
      .get(`${API}api/category`, {
        headers: {
          // "ngrok-skip-browser-warning": true,
          // "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData1(res.data)
        console.log(res.data);
      });
  }, []);
  
  return (
    <Box>
        <TavartableStart />
    <TableContainer shadow={"0px 2px 8px 0px rgba(0, 0, 0, 0.12)"}>
      <Table width={"100%"} rounded={"16px"} fontSize={'19px'}>
        <Thead>
          <Tr bg="#F1F3F9" >
            <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>№</Th>
            <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}> Nomi</Th>
            <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>Qo’shilgan sana</Th>
            <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>User</Th>
            <Th></Th>
          </Tr>``
        </Thead>
        <Tbody>
          {data1.map((item, i) => (
             <Tr key={i}>
                <Td>{item.id}</Td>
                <Td w={'50%'}>{item.name}</Td>
                <Td>{String(item.date).slice(0 , 4) + ' ' + `${name}` + ' ' + String(item.date).slice(8 , 10) + ' ' + String(item.date).slice(11 , 16)}</Td>
                <Td>Komiljon Soliyev Xaydarovich</Td>
                <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                  <MdOutlineMoreVert  size={"29px"} />
                </Td>
           </Tr>
          ))}
           
        </Tbody>
      </Table>
    </TableContainer>
  </Box>
  )
}

export default TavarCatigoryTab