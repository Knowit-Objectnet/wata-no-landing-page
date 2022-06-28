import React from 'react'
import Page from '../components/Page'
import { Container } from '@mui/material'
import Gradient from '../components/Gradient'
import Employee from '../components/Employee'
import { NextPage } from 'next'

const Contact: NextPage = () => {
  const contactPerson = {
    image: 'img/employees/JPEG/gurrich.jpg',
    name: 'Jonas Gürrich',
    title: 'product manager',
    email: 'jonas.gurrich@knowit.no',
    phone: '+47 95 11 87 44',
  }

  return (
    <Page title='Kontakt'>
      <Gradient
        title='Kontakt oss'
        subtitle='Ta gjerne kontakt med oss for en mer detaljert gjennomgang og hyggelig diskusjon rundt hvordan wata kan løse dine utfordringer.'
      />
      <Container sx={{ py: 10 }}>
        <Employee {...contactPerson} />
      </Container>
    </Page>
  )
}

export default Contact