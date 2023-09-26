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

function App() {
  return (
    <Box width={"100%"}>
      <Box>
        <Navbar />
      </Box>
   
      <Box maxWidth={"1832px"} m={"auto"} height={'100%'} pt={'50px'}>
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
