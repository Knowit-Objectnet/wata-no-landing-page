import React from 'react'
import { Box, Container, Grid, Stack, Typography } from '@mui/material'
import { partners } from '../config'

export default function Partners() {
  return (
    <Container sx={{ py: 10 }} >
      <Typography
        variant='h5'
        sx={{
          textAlign: 'center',
          mb: 3
        }}
      >
        Våre partnere
      </Typography>
      <Grid
        container
        alignItems='center'
        spacing={6}
        sx={{
          justifyContent: { xs: 'center', md: 'space-between' }
        }}
      >
        {partners.map(partner => (
          <Grid item key={partner.key}>
            <Box
              height={36}
              component='img'
              src={partner.image}
            />
          </Grid>
        ))}
      </Grid>
    </Container>
  )
}

