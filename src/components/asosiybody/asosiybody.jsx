import { Box, Center, Flex, Text } from "@chakra-ui/layout";
import React, { useState } from "react";
import { MdOutlineMoreVert } from "react-icons/md";
import { AiFillPlusCircle } from "react-icons/ai";

import Tables from "../tables/tables";
import TovarTable from "../tovarTable/tovarTable";
import TableEnd from "../tableEnd/tableEnd";

const Asosiybody = () => {

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
