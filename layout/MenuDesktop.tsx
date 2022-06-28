import React from 'react'
import { Stack, Link as MUILink } from '@mui/material'
import Link from 'next/link'
import NAV_CONFIG from './navConfig'

export default function MenuDesktop() {
  return (
    <Stack direction="row">
      {NAV_CONFIG.map(item => (
        <DesktopMenuItem
          key={item.title}
          title={item.title}
          path={item.path}
        />
      ))}
    </Stack>
  )
}

type DesktopMenuItemProps = {
  title: string,
  path: string
}


function DesktopMenuItem({ title, path }: DesktopMenuItemProps) {
  return (
    <Link href={path} passHref>
      <MUILink
        sx={{
          mr: 4,
          color: 'text.primary',
          '&:hover': {
            color: 'action.hover',
            textDecoration: 'none',
          },
          textTransform: 'capitalize'
        }}
      >
        {title}
      </MUILink>
    </Link>
  )
}