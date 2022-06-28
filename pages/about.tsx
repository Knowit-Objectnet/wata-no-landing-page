import React from 'react'
import Page from '../components/Page'
import Gradient from '../components/Gradient'
import { Container, Grid } from '@mui/material'
import { employees } from '../config'
import Employee from '../components/Employee'
import { NextPage } from 'next'

const About: NextPage = () => {
  return (
    <Page title='Om oss'>
      <Gradient
        title='Om oss'
        subtitle='Wata ble til som et samarbeidsprosjekt mellom Pipelife og Knowit i 2021. Pipelife er Norges største produsent av plastrør og har spesialisert seg på IoT-teknologi, mens Knowit er et IT-konsulentselskap med spisskompetanse på AI og maskinlæring, digitalisering og utvikling av digitale produkter.'
      />
      <Container sx={{ py: 10 }}>
        <Grid
          container
          spacing={6}
        >
          {employees.map(employee => (
            <Grid item xs={6} md={4} key={employee.name}>
              <Employee {...employee} />
            </Grid>
          ))}
        </Grid>
      </Container>
    </Page>
  )
}

export default About
