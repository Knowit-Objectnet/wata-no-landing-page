import { NextPage } from 'next'
import Link from 'next/link'
import { Box, Button, Container, Grid, Stack, Typography } from '@mui/material'
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Partners from '../sections/Partners'
import Solutions from '../sections/Solutions'
import Page from '../components/Page'
import React from 'react'

const Home: NextPage = () => {
  return (
    <Page title="Wata">
      <Box
        sx={{
          width: '100%',
          height: 'calc(100vh - 120px)',
          display: 'flex',
          alignItems: 'center',
        }}
      >
        <Box
          sx={{
            zIndex: 9,
            width: '100%',
            height: '100%',
            objectFit: 'cover',
            position: 'absolute',
            background: 'linear-gradient(0deg, rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), url(water-image-smaller.jpg)',
            backgroundPosition: 'center',
            backgroundSize: 'cover'
          }}
        />
        <Container>
          <Grid
            container
            spacing={2}
            sx={{
              zIndex: 10,
              position: 'relative',
            }}
          >
            <Grid item>
              <Typography
                variant="h2"
                sx={{ color: 'common.white' }}
              >
                Making sense of water <br />for a sustainable future.
              </Typography>
            </Grid>
            <Grid item>
              <Typography
                variant="subtitle1"
                sx={{ color: 'common.white' }}
              >
                Klimaendringer har skapt et behov for en løsning som kan forutse og varsle om
                flomhendelser tidligere, og med større sikkerhet. Tidlig varsling gjør det mulig å
                iverksette risikoreduserende tiltak for å sikre liv og helse, kritiske tjenester og verdier.
              </Typography>
            </Grid>
            <Grid item>
              <Link href={'/contact'} passHref>
                <Button
                  endIcon={<ArrowForwardIcon />}
                  variant='contained'
                  size="large"
                  sx={{ borderRadius: '24px', width: '164px' }}
                >
                  Lær mer
                </Button>
              </Link>
            </Grid>
          </Grid>
        </Container>
      </Box>
      <Partners />
      <Solutions />
    </Page>
  )
}

export default Home
