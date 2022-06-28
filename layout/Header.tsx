import React from 'react'
import {
  AppBar,
  Toolbar,
  Container, Box, Divider,
} from '@mui/material'
import MenuDesktop from './MenuDesktop'
import MenuMobile from './MenuMobile'
import FullLogo from '../components/FullLogo'

function Header() {
  return (
    <AppBar
      sx={{
        boxShadow: 0,
        backgroundColor: 'transparent',
      }}
    >
      <Toolbar
        sx={{
          height: '120px',
          backgroundColor: '#FFFFFF',
        }}
      >
       <Container
         sx={{
           display: 'flex',
           alignItems: 'center',
           justifyContent: 'space-between',
         }}
       >
         <FullLogo />

         <Box sx={{ flexGrow: 1 }} />

         <Box sx={{
           display: { xs: 'none', sm: 'block' }
         }}>
           <MenuDesktop />
         </Box>

         <Box sx={{
           display: { xs: 'block', sm: 'none' }
         }}>
           <MenuMobile />
         </Box>

       </Container>
      </Toolbar>
      <Divider />
    </AppBar>
  )
}

export default Header