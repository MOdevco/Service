import React from "react";
import { Tabs, TabList, TabPanels, Tab, TabPanel} from '@chakra-ui/react'
import TavarCatigoryEnd from "../tavarCatigoryEnd/tavarCatigoryEnd";
import { Box } from "@chakra-ui/react";
import TovarFirmalar from "../tovarFirmalar/tovarFirmalar";
import PropsTable from "../propsTAble/propsTable";

const Asosiybody = () => {


  
  return (
    <Box p={'40px'} pt={'0px'} height={'100%'} width={'100%'}>
      {/* birinvhi table */}
      <Tabs  variant='red' >
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
          <TabPanel  maxWidth={"1832px"} m={"auto"}>
            <Box > 
              {/* TOVAR SOTILADIGAN QURULMALAR */}
              <PropsTable title={'Tovar sotiladigan qurilmalar'} apiGet={'api/device-type'} apiPost={'api/device-type/new'} apiPostDoc={'api/device-type/upload'} />
              {/* TOVAR SOTILADIGAN QURULMALAR */}

            </Box>
          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> 
          {/* TOVAR KATEGORIYALARI */}
            <PropsTable title={'Tovar kategoriyalar'}  apiGet={'api/category-types'} apiPost={'api/category-types/new'} apiPostDoc={'api/category-types/upload'}/>
          {/* TOVAR KATEGORIYALARI */}

          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> 
          {/* TOVAR TURLARI */}
            <PropsTable title={'Tovar turlari'} apiGet={'api/category'} apiPost={'api/category/new'} apiPostDoc={'api/category/upload'} />
          {/* TOVAR TURLARI */}

          </TabPanel>
          <TabPanel maxWidth={"1832px"} m={"auto"}> 
            <Box >
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
          {/* SOTUV TURLARI */}
            <PropsTable title={'Sotuv miqdor turlari'} apiGet={'api/unit'} apiPost={'api/unit/new'} apiPostDoc={'api/unit/upload'} />
          {/* SOTUV TURLARI */}

          </TabPanel>

          <TabPanel maxWidth={"1832px"} m={"auto"}> 
            <TovarFirmalar />
          </TabPanel>

          <TabPanel maxWidth={"1832px"} m={"auto"}> 
          {/* LAVOZIMLAR */}
            <PropsTable title={'Lavozimlar'} apiGet={'api/stuff'} apiPost={'api/stuff/new'} />
          {/* LAVOZIMLAR */}

          </TabPanel>

        </TabPanels>
      </Tabs>
     

      
        
      


     

      
    </Box>
  );
}

export default Asosiybody