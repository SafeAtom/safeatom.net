import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { images } from '../../images'
import { customTheme } from '../../theme'
import { siteRoutes, socialLinks } from '../../constants'
import EmailInput from '../../ui/EmailInput'
import { useHistory } from 'react-router'

const useStyles = makeStyles(() => ({
  weightFont: {
    fontWeight: 700
  },
  link: {
    paddingTop: 12,
    padding: '0 .25rem',
    '&:hover': {
      opacity: 0.6
    }
  },
  footerLink: {
    cursor: 'pointer',
    opacity: 0.7,
    '&:hover': {
      opacity: 1
    }
  }
}))

const Footer = () => {
  const history = useHistory()
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  const goTo = (link) => {
    history.push(link)
  }

  return (
        <Box borderTop={`2px solid ${customTheme.color.stroke}`}>
            <Container>
                <Box py={isMobile ? 3 : 6}>
                    <Grid container spacing={2} alignItems="flex-start">
                        <Grid item xs={12} md={3}>
                            <Box py={1} display="flex" alignItems="center">
                                <img src={images.logoPng} width={52}/>
                                <Box px={1}>
                                    <Typography variant="h2" color="primary" className={classes.weightFont}>SAFEATOM</Typography>
                                    <Typography variant="body2" color="textSecondary">Are you with us?</Typography>
                                </Box>
                            </Box>
                            <Box py={2}>
                                {socialLinks.map(({ link, icon }) => (
                                    <a className={classes.link} key={icon} href={link} onClick={() => goTo(link)}>
                                        <img src={images[icon + 'Black']} width={32} height={32}/>
                                    </a>
                                ))}
                            </Box>
                        </Grid>
                        <Grid item xs={12} md={3} >
                            <Box py={1}>
                                <Typography variant="h2" className={classes.weightFont} color="primary">Website</Typography>
                            </Box>
                            <a onClick={() => goTo(siteRoutes.home)}>
                                <Typography variant="body1" color="primary" className={classes.footerLink}>Home</Typography>
                            </a>
                            <a onClick={() => goTo(siteRoutes.markets)}>
                                <Typography variant="body1" color="primary" className={classes.footerLink}>Markets</Typography>
                            </a>
                            <a onClick={() => goTo(siteRoutes.ourTeam)}>
                                <Typography variant="body1" color="primary" className={classes.footerLink}>Our Team</Typography>
                            </a>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box py={1}>
                                <Typography variant="h2" className={classes.weightFont} color="primary">Resources</Typography>
                            </Box>
                            <a>
                                <Typography variant="body1" color="primary" className={classes.footerLink} onClick={() => goTo(siteRoutes.contract)}>Contract</Typography>
                            </a>
                            <a>
                                <Typography variant="body1" color="primary" className={classes.footerLink} onClick={() => goTo(siteRoutes.whitePaper)}>White Paper</Typography>
                            </a>
                        </Grid>
                        <Grid item xs={12} md={3}>
                            <Box py={1}>
                                <Typography variant="h2" className={classes.weightFont} color="primary">Be in touch with us</Typography>
                            </Box>
                            <Box py={1}>
                                <Typography variant="body2" color="textSecondary">Subscribe our newsletter to get news and announcements first</Typography>
                            </Box>
                            <Box pt={1}>
                                <EmailInput/>
                            </Box>
                        </Grid>
                    </Grid>
                </Box>
                <Box borderTop={`1px solid ${customTheme.color.stroke}`} pt={3} pb={1} width="100%"/>
                <Box mb={isMobile ? 3 : 9}>
                    <Grid container justifyContent="space-between">
                        <Typography variant="body2" color="textSecondary">
                            Copyright © SAFEATOM | 2021
                        </Typography>
                        <Typography variant="body2" color="textSecondary">
                            supportatom@gmail.com
                        </Typography>
                    </Grid>
                </Box>
            </Container>
        </Box>
  )
}

export default Footer
