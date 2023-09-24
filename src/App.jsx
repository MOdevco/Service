import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import AsosiyMalumatlar from "./pages/AsosiyMalumotlar";
import Asosiybody from "./components/asosiybody/asosiybody";
import Navbar from "./components/navbar/navbar";
import Login from "./pages/Login";
import TableSotuv from "./components/tableSotuv/tableSotuv";
import TavarCatigory from "./components/tavarCatigory/tavarCatigory";
import TavarCatigoryTab from "./components/tavarCatigoryTab/tavarCatigoryTab";

function App() {
  return (
    <Box width={"100%"}>
      <Box>
        <Navbar />
      </Box>
      <Tabs position="relative">
        <TabList display={"flex"} gap={"30px"} pt={"20px"} pl={"60px"} borderBottom={'none'}>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00'}}
          >
            Tovar sotiladigan qurilmalar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00'}}
          >
            Tovar kategoriyalar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00'}}
          >
            Tovar turlari
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00'}}
          >
            Kategoriya turlar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00'}}
          >
            Sotuv miqdor turlari
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00'}}
          >
            Tovar firmalari
          </Tab>
        </TabList>
        <TabIndicator
          mt="-1.5px"
          height="2px"
          bg="blue.500"
          borderRadius="1px"
        />
        <TabPanels>
          <TabPanel  maxWidth={"1832px"} m={"auto"}> <TableSotuv /> </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> <TavarCatigory /> </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> <TavarCatigoryTab /></TabPanel>
        </TabPanels>
      </Tabs>
      <Box maxWidth={"1832px"} m={"auto"}>
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
