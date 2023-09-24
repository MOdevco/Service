import React, { useState } from 'react'
import { AiFillMinusCircle, AiFillPlusCircle } from 'react-icons/ai';
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
  import {
    FormControl,
    FormLabel,
    FormErrorMessage,
    FormHelperText,
  } from '@chakra-ui/react'
  import {MdOutlineMoreVert} from 'react-icons/md'
const TovarFirmalar = () => {
    const [open, setopen] = useState(false);
    const handleClick = () => setopen(!open);
  return (
    <Box>
        <Box>
            <Box>
            <Box display={"Flex"} alignItems={"center"} gap="10px" mt={"35px"}>
            <Text fontSize={'20px'} fontWeight={'500'}>Tovar kategoriyalari</Text>
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
            <Box  width={'100%'} display={"flex"} alignItems={"center"}>
                <Box display={'flex'} justifyContent={'space-between'} alignItems={'center'} width={'100%'} gap={'20px'}>
                    <FormControl isRequired>
                        <FormLabel>Nomie</FormLabel>
                        <Input placeholder='Nomi..' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Address</FormLabel>
                        <Input placeholder='Address..' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Telefon</FormLabel>
                        <Input placeholder='Telefon..' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Email</FormLabel>
                        <Input placeholder='Email..' />
                    </FormControl>

                    <FormControl isRequired>
                        <FormLabel>Web</FormLabel>
                        <Input placeholder='Web..' />
                    </FormControl>
                    <Button
                        mt={'30px'}
                        bg={"#4CAF50"}
                        color={"#fff"}
                        size="md"
                        borderRadius={"3px"}
                        _hover={"none"}
                        _active={"none"}
                        width={'400px'}
                    >
                        Qo’shish
                    </Button>
                </Box>


            </Box>
         )}

        
            </Box>
        </Box>

        <TableContainer shadow={"0px 2px 8px 0px rgba(0, 0, 0, 0.12)"} mt={'20px'}>
            <Table width={"100%"} rounded={"16px"} fontSize={'19px'}>
                <Thead>
                <Tr bg="#F1F3F9" >
                    <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>№</Th>
                    <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}> Nomi</Th>
                    <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>Address</Th>
                    <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>Telefon</Th>
                    <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>Email</Th>
                    <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>Web</Th>
                    <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>Date</Th>
                    <Th fontWeight={'bold'} color={'#1D2433'} textTransform={'capitalize'} fontSize={'17px'}>User</Th>
                    <Th></Th>
                </Tr>
                </Thead>
                <Tbody>
                    <Tr fontSize={'14px'}>
                        <Td>1</Td>
                        <Td width={'15%'}>Fintech</Td>
                        <Td>China, HongKong</Td>
                        <Td>+998 (90) 123-45-67</Td>
                        <Td>fintechreality@gmail.com</Td>
                        <Td>fintechhub.com</Td>
                        <Td>12 Dek, 2023</Td>
                        <Td>Humoyun Ergashaliyev Hamdamovich</Td>
                        <Td><MdOutlineMoreVert size={"29px"} /></Td>
                    </Tr>
                    <Tr fontSize={'14px'}>
                        <Td>2</Td>
                        <Td width={'15%'}>Fintech</Td>
                        <Td>China, HongKong</Td>
                        <Td>+998 (90) 123-45-67</Td>
                        <Td>fintechreality@gmail.com</Td>
                        <Td>fintechhub.com</Td>
                        <Td>12 Dek, 2023</Td>
                        <Td>Humoyun Ergashaliyev Hamdamovich</Td>
                        <Td><MdOutlineMoreVert size={"29px"} /></Td>
                    </Tr>
                    <Tr fontSize={'14px'}>
                        <Td>3</Td>
                        <Td width={'15%'}>Fintech</Td>
                        <Td>China, HongKong</Td>
                        <Td>+998 (90) 123-45-67</Td>
                        <Td>fintechreality@gmail.com</Td>
                        <Td>fintechhub.com</Td>
                        <Td>12 Dek, 2023</Td>
                        <Td>Humoyun Ergashaliyev Hamdamovich</Td>
                        <Td><MdOutlineMoreVert size={"29px"} /></Td>
                    </Tr>
                    <Tr fontSize={'14px'}>
                        <Td>4</Td>
                        <Td width={'15%'}>Fintech</Td>
                        <Td>China, HongKong</Td>
                        <Td>+998 (90) 123-45-67</Td>
                        <Td>fintechreality@gmail.com</Td>
                        <Td>fintechhub.com</Td>
                        <Td>12 Dek, 2023</Td>
                        <Td>Humoyun Ergashaliyev Hamdamovich</Td>
                        <Td><MdOutlineMoreVert size={"29px"} /></Td>
                    </Tr>
                    <Tr fontSize={'14px'}>
                        <Td>5</Td>
                        <Td width={'15%'}>Fintech</Td>
                        <Td>China, HongKong</Td>
                        <Td>+998 (90) 123-45-67</Td>
                        <Td>fintechreality@gmail.com</Td>
                        <Td>fintechhub.com</Td>
                        <Td>12 Dek, 2023</Td>
                        <Td>Humoyun Ergashaliyev Hamdamovich</Td>
                        <Td><MdOutlineMoreVert size={"29px"} /></Td>
                    </Tr>
                
                </Tbody>
            </Table>
        </TableContainer>
    </Box>
  )
}

export default TovarFirmalar