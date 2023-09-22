import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

import Tables from "../tables/tables";
import TovarTable from "../tovarTable/tovarTable";
import TableEnd from "../tableEnd/tableEnd";
import axios from "axios";
import { API } from "../api/api";

const Asosiybody = () => {
 const [dataTab,setDataTab] = useState([])
  useEffect(() => {
    axios
      .get(`${API}api/category-types`, {
        headers: {
          // "ngrok-skip-browser-warning": true,
          // "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setDataTab(res.data);
        console.log(dataTab);
      });
  }, []);
  return (
    <Box>
      {/* birinvhi table */}
      <Box>
         <Tables title={"Tovar sotiladigan qurilmalar"} />
      </Box>

      <Box>
        <Tables title={"Tovar kategoriyalari"} />
      </Box>

      <Box>
        
        <TovarTable title={"Tovar kategoriyalari"}/>
      </Box>
      <Box>
        <TableEnd title={"Tovar kategoriyalari"}/>
      </Box>
    </Box>
  );
}

export default Asosiybody
