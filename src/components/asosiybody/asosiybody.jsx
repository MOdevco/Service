import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel, TabIndicator } from '@chakra-ui/react'
import TableSotuv from "../tableSotuv/tableSotuv";
import TavarCatigoryTab from "../tavarCatigoryTab/tavarCatigoryTab";
import TavarCatigory from "../tavarCatigory/tavarCatigory";
import TavarCatigoryEnd from "../tavarCatigoryEnd/tavarCatigoryEnd";
import { Box } from "@chakra-ui/react";
import SotuvMiqdori from "../sotuvMiqdori/sotuvMiqdori";
import TovarFirmalar from "../tovarFirmalar/tovarFirmalar";
import Lavozimlar from "../lavozimlar/lavozimlar";

const Asosiybody = () => {


  
  return (
    <Box p={'50px'} width={'100%'}>
      {/* birinvhi table */}
      <Tabs  variant='red'>
        <TabList >
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
          <Tab
            fontSize={"20px"}
            fontWeight={"500"}
            lineHeight={"20px"}
            wordBreak={"break-word"}
            _selected={{ color: '#FF5C00'}}
          >
            Lavozimlar
          </Tab>
        </TabList>
        
        <TabPanels >
          <TabPanel maxWidth={"1832px"} m={"auto"}> <TableSotuv /> </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> <TavarCatigory /> </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> <TavarCatigoryTab /></TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> 
            <Box pt={'50px'} pb={'40px'}>
              <Tabs colorScheme='blue'>
                <TabList>
                  <Tab>Kabel</Tab>
                  <Tab>Notifications</Tab>
                  <Tab>Interations</Tab>
                  <Tab>Plans</Tab>
                  <Tab>Billing</Tab>
                  <Tab>Account</Tab>
                  <Tab>Notifications</Tab>
                  <Tab>Interations</Tab>
                  <Tab>Plans</Tab>
                  <Tab>Billing</Tab>
                  <Tab>Account</Tab>
                  <Tab>Notifications</Tab>
                  <Tab>Interations</Tab>
                  <Tab>Plans</Tab>
                  <Tab>Billing</Tab>
                </TabList>

                <TabPanels>
                  <TabPanel>
                    <TavarCatigoryEnd />
                  </TabPanel>
                  <TabPanel>
                    <p>two!</p>
                  </TabPanel>
                  <TabPanel>
                    <p>three!</p>
                  </TabPanel>
                </TabPanels>
              </Tabs>
            </Box>
          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> 
            <SotuvMiqdori />
          </TabPanel>

          <TabPanel maxWidth={"1832px"} m={"auto"}> 
            <TovarFirmalar />
          </TabPanel>

          <TabPanel maxWidth={"1832px"} m={"auto"}> 
            <Lavozimlar />
          </TabPanel>

        </TabPanels>
      </Tabs>
     

      
        
      


     

      
    </Box>
  );
}

export default Asosiybody