import * as React from 'react'

import MenuIcon from '@mui/icons-material/Menu'
import { Menu } from '@mui/material'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Button from '@mui/material/Button'
import CssBaseline from '@mui/material/CssBaseline'
import Divider from '@mui/material/Divider'
import Drawer from '@mui/material/Drawer'
import IconButton from '@mui/material/IconButton'
import List from '@mui/material/List'
import ListItem from '@mui/material/ListItem'
import ListItemButton from '@mui/material/ListItemButton'
import ListItemText from '@mui/material/ListItemText'
import Toolbar from '@mui/material/Toolbar'
import Typography from '@mui/material/Typography'

import { Link, routes } from '@redwoodjs/router'
const SubmitterLayout = ({ children }) => {
  return (
    <>
      <header>
        <nav>
          <ul id="navbar-ul">
            <li id="navbar-li">
              <Link id="navbar-link" to={routes.home()}>
                Home
              </Link>
            </li>
            <li id="navbar-li">
              <Link id="navbar-link" to={routes.myProjects()}>
                My Projects
              </Link>
            </li>
          </ul>
        </nav>
      </header>

      <main>{children}</main>
    </>
  )
}

export default SubmitterLayout
