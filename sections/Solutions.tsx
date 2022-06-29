import React from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { solutions } from '../config'
import Gradient from '../components/Gradient'

export default function Solutions() {
  return (
    <Box id="solutions" sx={{ backgroundColor: '#FFFFFF' }}>
      <Gradient title='Våre løsninger' height='250px'/>
      <Container sx={{ py: 4 }}>
        {solutions.map((item, index) => {
          const isEven = index % 2 === 0;
          return (
            <Grid
              container
              spacing={{ xs: 0, md: 8 }}
              alignItems='center'
              key={index}
              sx={{
                my: {xs: 4, md: 8 }
              }}
            >
              <Grid item xs={12} md={5} order={isEven ? index + 1 : index}>
                <Box
                  sx={{
                    display: { xs: 'none', md: 'flex' },
                  }}
                >
                  <Box
                    maxWidth='100%'
                    maxHeight='100%'
                    component='img'
                    src={item.illustration}
                  />
                </Box>
              </Grid>
              <Grid item xs={12} md={7} order={isEven ? index : index + 1}>
                <Typography variant='h4' sx={{ mb: 1 }}>
                  {item.title}
                </Typography>
                <Typography variant="body1">
                  {item.description}
                </Typography>
              </Grid>
            </Grid>)
        })}
      </Container>
    </Box>
  )
}
