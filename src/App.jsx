import { Box, Tab, TabIndicator, TabList, TabPanel, TabPanels, Tabs } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AsosiyMalumatlar from "./pages/AsosiyMalumotlar";
import Asosiybody from "./components/asosiybody/asosiybody";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/Login";

function App() {
  return (
    <Box width={"100%"}  >
      <Box>
        <Navbar />
      </Box>
      <Tabs position="relative">
    <TabList display={'flex'}>
      <Tab fontSize={'20px'} fontWeight={'500'} lineHeight={'20px'} wordBreak={'break-word'} color={'#FF5C00'}>Tovar sotiladigan qurilmalar</Tab>
      <Tab fontSize={'20px'} fontWeight={'500'} lineHeight={'20px'} wordBreak={'break-word'}>Tovar kategoriyalar</Tab>
      <Tab fontSize={'20px'} fontWeight={'500'} lineHeight={'20px'} wordBreak={'break-word'}>Tovar turlari</Tab>
      <Tab fontSize={'20px'} fontWeight={'500'} lineHeight={'20px'} wordBreak={'break-word'}>Kategoriya turlar</Tab>
      <Tab fontSize={'20px'} fontWeight={'500'} lineHeight={'20px'} wordBreak={'break-word'}>Sotuv miqdor turlari</Tab>
      <Tab fontSize={'20px'} fontWeight={'500'} lineHeight={'20px'} wordBreak={'break-word'}>Tovar firmalari</Tab>
    </TabList>
    <TabIndicator
      mt="-1.5px"
      height="2px"
      bg="blue.500"
      borderRadius="1px"
    />
    <TabPanels>
      <TabPanel>
       
      </TabPanel>
      <TabPanel>
      </TabPanel>
      <TabPanel>
      </TabPanel>
    </TabPanels>
  </Tabs>
      <Box maxWidth={"1832px"} m={"auto"} >
        <Routes>
          <Route path="/" element={<AsosiyMalumatlar />}></Route>
          <Route path="/asosiy" element={<Asosiybody />}></Route>
          <Route path="/login" element={<Login />}></Route>
        </Routes>
      </Box>
    </Box>
  );
}

export default App;
