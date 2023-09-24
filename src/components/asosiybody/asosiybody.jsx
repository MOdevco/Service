import React from "react";

import TableSotuv from "../tableSotuv/tableSotuv";
import TavarCatigoryTab from "../tavarCatigoryTab/tavarCatigoryTab";
import TavarCatigory from "../tavarCatigory/tavarCatigory";
import TavarCatigoryEnd from "../tavarCatigoryEnd/tavarCatigoryEnd";
import {
  Box,
  Tab,
  TabIndicator,
  TabList,
  TabPanel,
  TabPanels,
  Tabs,
} from "@chakra-ui/react";

const Asosiybody = () => {
  return (
    <Box p={"50px"}>
      {/* birinvhi table */}
      <Tabs position="relative" variant="">
        <TabList>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: "#FF5C00" }}
          >
            Tovar sotiladigan qurilmalar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: "#FF5C00" }}
          >
            Tovar kategoriyalar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: "#FF5C00" }}
          >
            Tovar turlari
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: "#FF5C00" }}
          >
            Kategoriya turlar
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: "#FF5C00" }}
          >
            Sotuv miqdor turlari
          </Tab>
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: "#FF5C00" }}
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
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            {" "}
            <TableSotuv />{" "}
          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            {" "}
            <TavarCatigory />{" "}
          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}>
            {" "}
            <TavarCatigoryTab />
          </TabPanel>
        </TabPanels>
      </Tabs>

      {/* <TavarCatigoryEnd /> */}
    </Box>
  );
};

export default Asosiybody;
