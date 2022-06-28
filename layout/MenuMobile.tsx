import React, { useState } from 'react'
import MenuIcon from '@mui/icons-material/Menu';
import { Drawer, IconButton, List, ListItemButton, ListItemText } from '@mui/material'
import Link from 'next/link'
import NAV_CONFIG from './navConfig'

type MenuMobileItemProps = {
  title: string,
  path: string,
}

function MenuMobileItem({ title, path }: MenuMobileItemProps) {
  return (
    <Link href={path} passHref>
      <ListItemButton>
        <ListItemText
          sx={{ textTransform: 'capitalize', textAlign: 'center' }}
          primary={title}
        />
      </ListItemButton>
    </Link>
  )
}

function MenuMobile() {
  const [open, setOpen] = useState(false);

  const handleOpenDrawer = () => {
    setOpen(true)
  }

  const handleCloseDrawer = () => {
    setOpen(false)
  }

  return (
    <>
      <IconButton
        onClick={handleOpenDrawer}
        sx={{
          "&.MuiButtonBase-root:hover": {
            bgcolor: "transparent"
          }
        }}
      >
        <MenuIcon />
      </IconButton>
      <Drawer
        anchor="top"
        open={open}
        onClose={handleCloseDrawer}
        ModalProps={{
          keepMounted: true
        }}
      >
        <List>
          {NAV_CONFIG.map(item => (
            <MenuMobileItem
              key={item.title}
              title={item.title}
              path={item.path}
            />
          ))}
        </List>
      </Drawer>
    </>
  )
}

export default MenuMobile;