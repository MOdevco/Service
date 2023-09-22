import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import AsosiyMalumatlar from './pages/AsosiyMalumotlar'
import Asosiybody from './components/asosiybody/asosiybody'

function App() {
  return (
    <Box>
        <Routes>
            <Route path="/" element={<AsosiyMalumatlar />}></Route>
        </Routes>
        <Asosiybody/>
    </Box>
  )
}

export default App