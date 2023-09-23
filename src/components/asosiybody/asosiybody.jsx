import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React, { useEffect, useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

import Tables from "../tables/tables";
import TovarTable from "../tovarTable/tovarTable";
import TableEnd from "../tableEnd/tableEnd";
import { API } from "../../api";
import axios from "axios";

const Asosiybody = () => {
  // {String(date).slice(0 , 10) + ' ' + String(item.date).slice(11 , 16)}
  const [data, setData] = useState([]);
  useEffect(() => {
    axios
      .get(`${API}api/device-type`, {
        headers: {
          // "ngrok-skip-browser-warning": true,
          // "Access-Control-Allow-Origin": "*",
          Authorization: `Bearer ${localStorage.getItem("token")}`,
        },
      })
      .then((res) => {
        setData(res.data)
        console.log(res.data);
      });
  }, []);
  const monthNames = ["Yanvar", "Fevral", "Mart", "Aprel", "May", "Iyun",
  "Iyul", "Avgust", "Sentyabr", "Oktyabr", "Noyabr", "Dekabr"
  ];

  const d = new Date();
  let name = monthNames[d.getMonth()]; 
  console.log(name);
  return (
    <Box>
      {/* birinvhi table */}
      <Box>
        {data.map((item) => (
          <Tables name={item.name} date={String(item.date).slice(8 , 10) + ' ' + `${name}` + ' ' + String(item.date).slice(0 , 4) + ' ' + String(item.date).slice(11 , 16)} title={"Tovar sotiladigan qurilmalar"} />
        ))}
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
