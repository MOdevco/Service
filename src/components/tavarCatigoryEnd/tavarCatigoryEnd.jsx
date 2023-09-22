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
  } from "@chakra-ui/react";
  import { MdOutlineMoreVert } from "react-icons/md";
import TavartableStart from '../tavartableStart/tavartableStart';
import axios from 'axios';
import { API } from '../../api';
function TavarCatigoryEnd() {
    const [data,setData] = useState([])
    useEffect(() => {
        axios
          .get(`${API}api/category-types`, {
            headers: {
              // "ngrok-skip-browser-warning": true,
              // "Access-Control-Allow-Origin": "*",
              Authorization: `Bearer ${localStorage.getItem("token")}`,
            },
          })
          .then((res) => {
            setData(res.data);
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
              </Tr>
            </Thead>
            <Tbody>
                {data.map((item,i) =>(
                     <Tr>
                     <Td>1</Td>
                     <Td w={'50%'}>{item.name}</Td>
                     <Td>{item.date}</Td>
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

export default TavarCatigoryEnd