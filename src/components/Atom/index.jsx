import { Typography, Box, makeStyles, Grid, useTheme, useMediaQuery } from '@material-ui/core'
import React from 'react'
import Particles from 'react-particles-js'
import Button from '../../ui/Button'
import { customTheme } from '../../theme'
import { images } from '../../images'

const useStyles = makeStyles((theme) => ({
  header: {
    top: '50%',
    left: '50%',
    transform: 'translate(-50%, -50%)',
    width: '90%'
  }
}))

const Atom = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()

  return (
    <Box position="relative" width="100%" height={isMobile ? 600 : 700}>
      <Box position="absolute" className={classes.header}>
        <Grid container justifyContent="center" alignItems="center" spacing={1} data-aos="fade-down">
          <Grid item xs={12} md={4} lg={3}>
            <Box textAlign="center">
              <img src={images.noCircleLogo} width={250}/>
            </Box>
          </Grid>
          <Grid item xs={12} md={7} lg={5}>
            <Typography variant="h1" color="primary">SAFEATOM</Typography>
            <Typography variant="h2" color="textSecondary">The Safeatom protocol is a next generation fair launched Defi Token. Designed to evolve and build to last.</Typography>
            <Box display="flex" mt={5} ml={-1} justifyContent="flex-start" alignItems="center">
              <Button onClick={() => {}}><Typography variant="button">Live chart</Typography></Button>
              <Button onClick={() => {}} activeColor="red"><Typography variant="button">Buy now</Typography></Button>
            </Box>
          </Grid>
        </Grid>
      </Box>
      <Particles
        height={700}
        params={{
          autoPlay: true,
          particles: {
            color: {
              value: customTheme.color.purple
            },
            links: {
              blink: false,
              color: {
                value: customTheme.color.purple
              },
              consent: false,
              distance: 100,
              enable: true,
              frequency: 1,
              opacity: 1,
              shadow: {
                blur: 5,
                color: {
                  value: customTheme.color.purple
                },
                enable: false
              },
              triangles: {
                enable: false,
                frequency: 1
              },
              width: 1,
              warp: false
            },
            number: {
              density: {
                enable: true,
                area: 800,
                factor: 1000
              },
              limit: 0,
              value: 120
            }
          }
        }
        }
      />
  </Box>
  )
}

export default Atom
