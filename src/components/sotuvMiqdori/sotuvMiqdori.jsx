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
    Text,
    Toast,
    useToast,
} from "@chakra-ui/react";
import { MdOutlineMoreVert } from 'react-icons/md'
import axios from "axios";
import { API } from "../../api";
import { useState } from 'react';
import { AiFillMinusCircle, AiFillPlusCircle, AiOutlineCheckCircle, AiOutlineLeft, AiOutlineRight } from 'react-icons/ai';

const SotuvMiqdori = () => {
    const [validateDate, setValiDate] = useState(false)
    const [files, setFiles] = useState({ file: '' })
    const [fileName, setFileName] = useState("Yuklash")
    const [loading, setLoading] = useState(true)
    const [saveData, setSaveData] = useState(false)
    const [valueData, setVAlueData] = useState('')
    const toast = useToast()
    const [data, setData] = useState([])
    const handleFile = (e) => {
        setFiles({ ...files, file: e.target.files[0] })
    }
    const handleSubmitDoc = () => {
        const formData = new FormData()
        formData.append("file", files.file)
        setLoading(false)
        if (!files.file) {
            setLoading(true)
        }
        axios
            .post(`${API}api/unit/upload`, formData, {
                headers: {
                    // "ngrok-skip-browser-warning": true,
                    // "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },
            })
            .then((res) => {
                setLoading(true)
                setFileName("Yuklandi")
                setSaveData(true)
                setTimeout(() => {
                    setFileName("Yuklash")
                    setSaveData(false)
                }, 2000)
                if (res.status === 200) {
                    toast({
                        description: `${res.data.message}`,
                        status: 'success',
                        position: 'top-right',
                        duration: 2000,
                        isClosable: true,
                    })
                    axios
                        .get(`${API}api/unit`, {
                            headers: {
                                // "ngrok-skip-browser-warning": true,
                                // "Access-Control-Allow-Origin": "*",
                                Authorization: `Bearer ${localStorage.getItem("token")}`,
                            },
                        })
                        .then((res) => {
                            setData(res.data);
                        });

                }

            }).catch((err) => {
                toast({
                    description: `File Tanlanmadi`,
                    status: 'error',
                    position: 'top-right',
                    duration: 2000,
                    isClosable: true,
                })
            });
    }




    useEffect(() => {
        axios
            .get(`${API}api/unit`, {
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

    const handleSubmit = () => {
        axios
            .post(`${API}api/unit/new`, {
                "name": valueData,
            }, {
                headers: {
                    // "ngrok-skip-browser-warning": true,
                    // "Access-Control-Allow-Origin": "*",
                    Authorization: `Bearer ${localStorage.getItem("token")}`,
                },

            })
            .then((res) => {

                console.log(res.data);
                toast({
                    description: `Malumot saqlandi`,
                    status: 'success',
                    position: 'top-right',
                    duration: 2000,
                    isClosable: true,
                })
                axios
                    .get(`${API}api/unit`, {
                        headers: {
                            // "ngrok-skip-browser-warning": true,
                            // "Access-Control-Allow-Origin": "*",
                            Authorization: `Bearer ${localStorage.getItem("token")}`,
                        },
                    })
                    .then((res) => {
                        setData(res.data);
                    });
            })
            .catch((err) => {
                toast({
                    description: `${err.response.data.message}`,
                    status: 'error',
                    position: 'top-right',
                    duration: 2000,
                    isClosable: true,
                })
            });
    }

    // const monthNames = [
    //     "January",
    //     "February",
    //     "March",
    //     "April",
    //     "May",
    //     "June",
    //     "July",
    //     "August",
    //     "September",
    //     "October",
    //     "November",
    //     "December",
    //   ];
    //   const d = new Date();
    //   let name = monthNames[d.getMonth()];
    //   const [data1, setData1] = useState([]);
    const [open, setopen] = useState(false);
    const handleClick = () => setopen(!open);
    //   useEffect(() => {
    //     axios
    //       .get(`${API}api/category`, {
    //         headers: {
    //           // "ngrok-skip-browser-warning": true,
    //           // "Access-Control-Allow-Origin": "*",
    //           Authorization: `Bearer ${localStorage.getItem("token")}`,
    //         },
    //       })
    //       .then((res) => {
    //         setData1(res.data)
    //       });
    //   }, []);
    return (
        <Box>
            <Box>
        <Box>
          <Box display={"Flex"} mb={'10px'} alignItems={"center"} justifyContent={'space-between'} gap="10px" mt={"35px"}>
            <Box display={'flex'} alignItems={'center'}>
              <Text fontSize={'20px'} fontWeight={'500'}>Tovar sotiladigan qurilmalar</Text>
              <Button
              display={'flex'}
                pt={'8px'}
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
              <Box display={'flex'} cursor={'pointer'}>
                <AiOutlineLeft /> 
                <AiOutlineRight />
              </Box>
          </Box>
          
          </Box>
          {open && (
            <Box>
              <Box pb={"25px"} display={"flex"} alignItems={"center"}>
                <Box display={'flex'} border={'1px'} rounded={'3px'} alignItems={'center'} borderColor={'#B5BDC5'} >
                  <input className={validateDate ? "success" : 'sucPre'}
                    onChange={function(e) {
                      if(e.target.value.match("[0-9*]")){
                        e.target.value = ""
                      } else {
                        setVAlueData(e.target.value)
                      }
                     
                    }}
                    // width={"20%"}
                    placeholder="Ventilyator"
                    // h={"2.7rem"}
                    size="md"
                    value={valueData}
                  />

                  
                  <Button
                    onClick={function() {
                      
                      if(!valueData == '') {
                        handleSubmit()
                        if(!valueData === '') {
                          setValiDate(false)
                        }
                      } else {
                        setValiDate(true)
                      }
                    }}
                    bg={"#4CAF50"}
                    color={"#fff"}
                    borderRadius={"3px"}
                    rounded={'3px'}
                    _hover={"none"}
                    _active={"none"}
                  >
                    Qo’shish
                  </Button>
                  
                </Box>
                
                  <Box pl={"15px"} display={"flex"} alignItems={"center"} gap={"15px"}>
                      <form action="" >
                        <input  className='input-field' hidden type="file" accept=".xlsx,.xls"  onChange={handleFile} />
                      </form>
                        <Button
                          onClick={() => document.querySelector('.input-field').click()}
                          _hover={"none"}
                          color={"#fff"}
                          padding={"11px 31px"}
                          _active={"none"}
                          bg={"#404E67"}
                          borderRadius={"3px"}
                        >
                          Exel
                        </Button>

                    
                    
                    {loading && <Button
                      onClick={handleSubmitDoc}
                      _hover={"none"}
                      color={"#fff"}
                      padding={"11px 31px"}
                      _active={"none"}
                      bg={saveData ? "green" : "#3A69BB"}
                      borderRadius={"3px"}
                    >
                      {fileName}
                      {saveData &&< AiOutlineCheckCircle color="white" fontSize={'25px'} /> }
                    </Button>}

                   {!loading && <Button
                      isLoading
                      loadingText='Yuklanmoqda...'
                      spinnerPlacement='end'
                      color={"#fff"}
                      bg={"#3A69BB"}
                      borderRadius={"3px"}
                      _hover={{bg: ''}}
                    >
                      Continue
                    </Button>}
                  </Box>
              </Box>
            </Box>
        
      )}
     
     
      </Box>
            <TableContainer shadow={"0px 2px 8px 0px rgba(0, 0, 0, 0.12)"} mt={'15px'}>
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
                            <Tr key={i} bg={i % 2 == 1 ? '#F8F9FC' : ''}>
                                <Td>{i + 1}</Td>
                                <Td width={'50%'}>{item.name}</Td>
                                <Td>{String(item.date).slice(0, 4) +
                                    " " +
                                    `${name}` +
                                    " " +
                                    String(item.date).slice(8, 10) +
                                    " " +
                                    String(item.date).slice(11, 16)}</Td>
                                <Td>Komiljon Soliyev Xaydarovich</Td>
                                <Td display={'flex'} alignItems={'flex-end'} justifyContent={'flex-end'}><MdOutlineMoreVert size={"29px"} /></Td>
                            </Tr>
                        ))}



                    </Tbody>
                </Table>
            </TableContainer>
        </Box>
    )
}

export default SotuvMiqdori