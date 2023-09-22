import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AsosiyMalumatlar from './pages/AsosiyMalumotlar'

function App() {
  return (
    <Box>
        <Routes>
        <Route path="/" element={<AsosiyMalumatlar />}></Route>
        </Routes>
    </Box>
  )
}

export default App