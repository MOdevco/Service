import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel } from '@chakra-ui/react'
import TableSotuv from "../tableSotuv/tableSotuv";
import TavarCatigoryTab from "../tavarCatigoryTab/tavarCatigoryTab";
import TavarCatigory from "../tavarCatigory/tavarCatigory";
import TavarCatigoryEnd from "../tavarCatigoryEnd/tavarCatigoryEnd";
import { Box } from "@chakra-ui/react";
import SotuvMiqdori from "../sotuvMiqdori/sotuvMiqdori";
import TovarFirmalar from "../tovarFirmalar/tovarFirmalar";

const Asosiybody = () => {


  
  return (
    <Box p={'50px'} width={'100%'}>
      {/* birinvhi table */}
      <TableSotuv />


      <TavarCatigoryTab />
      

      <TavarCatigory />

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
                <p>one!</p>
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
        
      <TavarCatigoryEnd />

      <SotuvMiqdori />

      <TovarFirmalar />
    </Box>
  );
}

export default Asosiybody