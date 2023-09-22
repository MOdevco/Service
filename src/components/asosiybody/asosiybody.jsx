import React from "react";


import TableSotuv from "../tableSotuv/tableSotuv";
import TavarCatigoryTab from "../tavarCatigoryTab/tavarCatigoryTab";
import TavarCatigory from "../tavarCatigory/tavarCatigory";
import TavarCatigoryEnd from "../tavarCatigoryEnd/tavarCatigoryEnd";
import { Box } from "@chakra-ui/react";

const Asosiybody = () => {


  
  return (
    <Box p={'50px'}>
      {/* birinvhi table */}
     <TableSotuv />


    <TavarCatigoryTab />
    

    <TavarCatigory />

     {/* <TavarCatigoryEnd /> */}
    </Box>
  );
}

export default Asosiybody
