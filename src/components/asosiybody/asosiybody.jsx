import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
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
  Button,
  Input,
} from "@chakra-ui/react";
import Tables from "../tables/tables";
import TovarTable from "../tovarTable/tovarTable";
import TableEnd from "../tableEnd/tableEnd";
import { API } from "../../api";
import axios from "axios";

const Asosiybody = () => {
  const [data, setData] = useState([]);
  const [data1, setData1] = useState([]);
  const monthNames = ["January", "February", "March", "April", "May", "June",
  "July", "August", "September", "October", "November", "December"
  ];
  const d = new Date();
  let name = monthNames[d.getMonth()]; 
  useEffect(() => {
    axios
      .get(`${API}api/device-type`, {
        headers: {
          // "ngrok-skip-browser-warning": true,
          // "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data)
      });
  }, []);

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
      {/* birinvhi table */}
      <Box>
        <Tables title={'Tavarlar sotiladigan qurulma'}/>
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
                {data.map((item, i) => (
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


      <Box>
        <Tables title={'Tavar Kategoriyalari'} />
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

      <Box>
        <Tables title={'Tavar Kategoriyalari'} />
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
                    <Td>1</Td>
                    <Td w={'50%'}>fdsfsdfsdf</Td>
                    <Td>fdsfdsf</Td>
                    <Td>Komiljon Soliyev Xaydarovich</Td>
                    <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                      <MdOutlineMoreVert  size={"29px"} />
                    </Td>
               </Tr>
               <Tr >
                    <Td>1</Td>
                    <Td w={'50%'}>fdsfsdfsdf</Td>
                    <Td>fdsfdsf</Td>
                    <Td>Komiljon Soliyev Xaydarovich</Td>
                    <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                      <MdOutlineMoreVert  size={"29px"} />
                    </Td>
               </Tr>
               <Tr >
                    <Td>1</Td>
                    <Td w={'50%'}>fdsfsdfsdf</Td>
                    <Td>fdsfdsf</Td>
                    <Td>Komiljon Soliyev Xaydarovich</Td>
                    <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                      <MdOutlineMoreVert  size={"29px"} />
                    </Td>
               </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>

      <Box>
        <Tables title={'Tavar Kategoriyalari'} />
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
                    <Td>1</Td>
                    <Td w={'50%'}>fdsfsdfsdf</Td>
                    <Td>fdsfdsf</Td>
                    <Td>Komiljon Soliyev Xaydarovich</Td>
                    <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                      <MdOutlineMoreVert  size={"29px"} />
                    </Td>
               </Tr>
               <Tr >
                    <Td>1</Td>
                    <Td w={'50%'}>fdsfsdfsdf</Td>
                    <Td>fdsfdsf</Td>
                    <Td>Komiljon Soliyev Xaydarovich</Td>
                    <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                      <MdOutlineMoreVert  size={"29px"} />
                    </Td>
               </Tr>
               <Tr >
                    <Td>1</Td>
                    <Td w={'50%'}>fdsfsdfsdf</Td>
                    <Td>fdsfdsf</Td>
                    <Td>Komiljon Soliyev Xaydarovich</Td>
                    <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}>
                      <MdOutlineMoreVert  size={"29px"} />
                    </Td>
               </Tr>
            </Tbody>
          </Table>
        </TableContainer>
      </Box>
    </Box>
  );
}

export default Asosiybody
