import React from 'react'
import { Stack } from '@mui/material'
import Header from './Header'
import Footer from './Footer'

type LayoutProps = {
  children: React.ReactNode
}

export default function Layout({ children }: LayoutProps) {
  return (
    <Stack>
      <Header />
      <main>
        {children}
      </main>
      <Footer />
    </Stack>
  )
}