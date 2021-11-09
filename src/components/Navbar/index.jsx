import React, { useState } from 'react'
import {
  AppBar,
  Box, Container,
  IconButton,
  makeStyles,
  SwipeableDrawer,
  Toolbar, Typography,
  useMediaQuery,
  useTheme
} from '@material-ui/core'
import { images } from '../../images'
import { customTheme } from '../../theme'
import { useHistory } from 'react-router'
import Button from '../../ui/Button'
import { headerLinks, siteRoutes } from '../../constants'

const useStyles = makeStyles((theme) => ({
  root: {
    width: '100%',
    backgroundColor: customTheme.color.white,
    padding: 0
  },
  burger: {
    marginLeft: 'auto'
  },
  link: {
    cursor: 'pointer',
    color: customTheme.color.night,
    borderBottom: '3px solid transparent',
    transition: '0.3s',
    '&:hover, &.active': {
      borderBottom: `3px solid ${customTheme.color.purple}`
    },
    '& p': {
      letterSpacing: '0rem'
    }
  }
}))

const Navbar = () => {
  const history = useHistory()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [drawerOpen, setDrawerOpen] = useState(false)
  const classes = useStyles()

  const handleDrawer = (value) => {
    setDrawerOpen(value)
  }

  const goTo = (link) => {
    history.push(link)
    setDrawerOpen(false)
  }

  const getDrawerChoices = () => {
    return headerLinks.map(({ label, href }) => (
        <Box py={1} key={label} className={classes.link} px={2} onClick={() => goTo(href)}>
            <Typography variant="body1">{label}</Typography>
        </Box>
    ))
  }

  const displayDesktop = () => {
    return (
       <Box display="flex" justifyContent="end" alignItems="center" className={classes.root}>
            <Container>
                <Box display="flex" justifyContent="space-between" alignItems="center">
                    <img onClick={() => goTo(siteRoutes.home)} className="logo" src={images.logoSvg} alt="no" width={50} height={50} style={{ cursor: 'pointer' }}/>
                    <Box display="flex" justifyContent="end" alignItems="center">
                        {headerLinks.map(({ label, href }) => (
                            <Box py={2} key={label} className={classes.link} px={2} onClick={() => goTo(href)}>
                                <Typography variant="body1">{label}</Typography>
                            </Box>
                        ))}
                        <Button onClick={() => {}} activeColor="red" size="small"><Typography variant="button">Buy now</Typography></Button>
                    </Box>
                </Box>
            </Container>
       </Box>
    )
  }

  const displayMobile = () => {
    return (
      <Toolbar>
          <Box display="flex" justifyContent="start" alignItems="center" pt={0.5}>
              <a onClick={() => goTo(siteRoutes.home)}>
                  <img src={images.logoPng} alt="no" width={44} height={44}/>
              </a>
          </Box>
          <IconButton
              {...{
                edge: 'end',
                color: 'inherit',
                'aria-label': 'menu',
                'aria-haspopup': 'true',
                className: classes.burger,
                onClick: () => handleDrawer(true)
              }}
          >
              <img src={images.burger} alt="no" width={32} height={32}/>
          </IconButton>
          <SwipeableDrawer
              {...{
                anchor: 'right',
                open: drawerOpen,
                onClose: () => handleDrawer(false),
                onOpen: () => handleDrawer(true)
              }}
          >
              <Box textAlign="right" p={0.8}>
                <img src={images.close} width={44}/>
              </Box>
              <Box display="flex" flexDirection="column" p={5} pt={1}>
                  {getDrawerChoices()}
                  <Box py={5}>
                      <Button onClick={() => {}} activeColor="red"><Typography variant="button">Buy now</Typography></Button>
                  </Box>
              </Box>
          </SwipeableDrawer>
      </Toolbar>
    )
  }

  return (
    <AppBar position="sticky" color="error" data-aos="fade-down" style={{ boxShadow: '0px 0px 55px rgba(0, 0, 0, 0.1)' }}>
        {isMobile ? displayMobile() : displayDesktop()}
    </AppBar>
  )
}

export default Navbar
