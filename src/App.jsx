import { Box } from '@chakra-ui/react'
import React from 'react'
import { Route, Routes } from 'react-router-dom'
import Home from './pages/home'

function App() {
  return (
    <Box>
        <Routes>
        <Route path="/" element={<Home />}></Route>
        </Routes>
    </Box>
  )
}

export default App