import React from 'react'
import { Box, Container, Grid, Hidden, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { images } from '../../images'
import { makeStyles } from '@material-ui/styles'
import { customTheme } from '../../theme'
import EmailInput from '../EmailInput'
import { socialLinks } from '../../constants'

const useStyles = makeStyles(() => ({
  root: {
    background: 'linear-gradient(93deg, rgba(94,23,235,1) 29%, rgba(140,82,255,1) 100%)'
  },
  text: {
    color: customTheme.color.white,
    marginRight: '1rem'
  },
  link: {
    paddingTop: 12,
    padding: '0 .25rem',
    '&:hover': {
      opacity: 0.6
    }
  }
}))

const UpToDate = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('md'))

  return (
        <Box width="100%" className={classes.root} py={2} my={8} data-aos="fade-down" data-aos-offset={-200}>
            <Container>
                <Grid justifyContent="space-between" container alignItems="center">
                    <Grid item xs={12} lg={9}>
                        <Box display="flex" justifyContent={isMobile ? 'space-between' : 'flex-start'} alignItems="center" flexWrap="wrap">
                            <Typography className={classes.text} variant="body1">Stay up to date</Typography>
                            <EmailInput isMobile={isMobile}/>
                        </Box>
                    </Grid>
                    <Hidden mdDown>
                        <Grid item xs={12} lg={3}>
                            <Box display="flex" justifyContent="flex-end" alignItems="center" pb={1}>
                                {socialLinks.map(({ link, icon }) => (
                                    <a className={classes.link} key={icon} href={link}>
                                        <img src={images[icon]} width={32} height={32}/>
                                    </a>
                                ))}
                            </Box>
                        </Grid>
                    </Hidden>
                </Grid>
            </Container>
        </Box>
  )
}

export default UpToDate
