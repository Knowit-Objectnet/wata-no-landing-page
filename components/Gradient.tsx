import React from 'react'
import { Box, Container, Stack, Typography } from '@mui/material'

type GradientProps = {
  title?: string,
  subtitle?: string,
  height?: string
}

export default function Gradient({ title, subtitle, height='35vh' }: GradientProps) {
  return (
    <Box
      sx={{
        width: '100%',
        height: height,
        display: 'flex',
        position: 'relative',
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
          background: 'linear-gradient(to right top, #0128a6, #0036af, #0043b8, #0050c0, #005cc8, #0068ce, #0074d4, #0080d8, #008edb, #009cdb, #2aa8da, #4ab4d8);',
          backgroundPosition: 'center',
          backgroundSize: 'cover'
        }}
      />
      <Container>
        <Stack
          spacing={3}
          sx={{
            zIndex: 10,
            position: 'relative',
            alignItems: 'center',
          }}
        >
          <Typography
            variant="h2"
            sx={{ color: 'common.white' }}
          >
            {title}
          </Typography>
          <Typography
            textAlign='center'
            variant="subtitle1"
            sx={{ color: 'common.white' }}
          >
            {subtitle}
          </Typography>
        </Stack>
      </Container>
    </Box>
  )
}
