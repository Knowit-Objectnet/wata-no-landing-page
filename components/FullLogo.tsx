import React from 'react'
import Link from 'next/link'
import { Box, Link as MUILink } from '@mui/material'

export default function FullLogo() {
  const logo = 'logo/logo.svg'

  return (
    <Link href='/' passHref>
      <MUILink>
        <Box
          sx={{ height: 35 }}
          component='img' src={logo}
        />
      </MUILink>
    </Link>
  )
}

