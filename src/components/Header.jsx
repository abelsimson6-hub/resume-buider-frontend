import React from 'react'
import AppBar from '@mui/material/AppBar'
import Box from '@mui/material/Box'
import Toolbar from '@mui/material/Toolbar'
import IconButton from '@mui/material/IconButton'
import Typography from '@mui/material/Typography'
import Menu from '@mui/material/Menu'
import MenuIcon from '@mui/icons-material/Menu'
import Container from '@mui/material/Container'
import Avatar from '@mui/material/Avatar'
import Tooltip from '@mui/material/Tooltip'
import MenuItem from '@mui/material/MenuItem'
import ChaletIcon from '@mui/icons-material/Chalet'
import Button from '@mui/material/Button'
import { Link } from 'react-router-dom'

const pages = ['All Resumes', 'Downloads', 'About Us']
const settings = ['Profile', 'Account', 'Dashboard', 'Logout']

function Header() {

  const [anchorElNav, setAnchorElNav] = React.useState(null)
  const [anchorElUser, setAnchorElUser] = React.useState(null)

  const handleOpenNavMenu = (event) => {
    setAnchorElNav(event.currentTarget)
  }

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget)
  }

  const handleCloseNavMenu = () => {
    setAnchorElNav(null)
  }

  const handleCloseUserMenu = () => {
    setAnchorElUser(null)
  }

  return (
    <AppBar
      position="static"
      sx={{
        backgroundColor: 'black'
      }}
    >

      <Container maxWidth="xl">

        <Toolbar disableGutters>

          <Typography
            variant="h6"
            noWrap
            component={Link}
            to="/"
            sx={{
              mr: 4,
              display: { xs: 'none', md: 'flex' },
              alignItems: 'center',
              fontFamily: 'monospace',
              fontWeight: 700,
              letterSpacing: '.3rem',
              color: 'yellow',
              textDecoration: 'none'
            }}
          >
            LOGO
            <ChaletIcon sx={{ ml: 1 }} />
          </Typography>


          <Box
            sx={{
              flexGrow: 1,
              display: { xs: 'flex', md: 'none' }
            }}
          >

            <IconButton
              size="large"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>

            <Menu
              anchorEl={anchorElNav}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
            >

              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/all-resumes"
              >
                <Typography textAlign="center">
                  All Resumes
                </Typography>
              </MenuItem>

              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/downloads"
              >
                <Typography textAlign="center">
                  Downloads
                </Typography>
              </MenuItem>

              <MenuItem
                onClick={handleCloseNavMenu}
                component={Link}
                to="/about"
              >
                <Typography textAlign="center">
                  About Us
                </Typography>
              </MenuItem>

            </Menu>

          </Box>


          <Box
            sx={{
              display: { xs: 'none', md: 'flex' },
              gap: 2,
              flexGrow: 1
            }}
          >

            <Button
              variant="contained"
              component={Link}
              to="/all-resumes"
            >
              All Resumes
            </Button>

            <Button
              variant="contained"
              component={Link}
              to="/downloads"
            >
              Downloads
            </Button>

            <Button
              variant="contained"
              component={Link}
              to="/about"
            >
              About Us
            </Button>

          </Box>


          <Box sx={{ flexGrow: 0 }}>

            <Tooltip title="Open settings">

              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0 }}
              >
                <Avatar
                  alt="User"
                  src="/static/images/avatar/2.jpg"
                />
              </IconButton>

            </Tooltip>


            <Menu
              sx={{ mt: '45px' }}
              anchorEl={anchorElUser}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
              anchorOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
              transformOrigin={{
                vertical: 'top',
                horizontal: 'right'
              }}
            >

              {settings.map((setting) => (

                <MenuItem
                  key={setting}
                  onClick={handleCloseUserMenu}
                >

                  <Typography textAlign="center">
                    {setting}
                  </Typography>

                </MenuItem>

              ))}

            </Menu>

          </Box>

        </Toolbar>

      </Container>

    </AppBar>
  )
}

export default Header