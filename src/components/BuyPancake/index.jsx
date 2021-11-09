import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { customTheme } from '../../theme'
import Button from '../../ui/Button'
import { images } from '../../images'
import React from 'react'
import { makeStyles } from '@material-ui/styles'

const useStyles = makeStyles(() => ({
  wrapper: {
    flex: '1 1 0%',
    display: 'flex',
    height: '100%',
    paddingLeft: 40,
    paddingRight: 40,
    backgroundColor: customTheme.color.white,
    borderRadius: 40,
    flewWrap: 'wrap',
    justifyContent: 'flex-center',
    boxShadow: '0px 0px 35px rgba(0, 0, 0, 0.1)'
  },
  imageWrapper: {
    position: 'absolute',
    height: '100%',
    top: '0',
    left: '0',
    width: '100%'
  },
  pancake: {
    animation: '$pancake 5s ease-in-out 0s infinite normal none running'
  },
  topRight: {
    animation: '$topRight 5s ease-in-out 0s infinite normal none running'
  },
  topLeft: {
    animation: '$topLeft 5s ease-in-out 0s infinite normal none running'
  },
  bottomRight: {
    animation: '$bottomRight 5s ease-in-out 0s infinite normal none running'
  },
  '@keyframes pancake': {
    '0%': {
      transform: 'translate(0px)'
    },
    '50%': {
      transform: 'translate(6px, 5px)'
    },
    '100%': {
      transform: 'translate(0px)'
    }
  },
  '@keyframes topRight': {
    '0%': {
      transform: 'translate(0px)'
    },
    '50%': {
      transform: 'translate(5px, 10px)'
    },
    '100%': {
      transform: 'translate(0px)'
    }
  },
  '@keyframes topLeft': {
    '0%': {
      transform: 'translate(0px)'
    },
    '50%': {
      transform: 'translate(4px, 12px)'
    },
    '100%': {
      transform: 'translate(0px)'
    }
  },
  '@keyframes bottomRight': {
    '0%': {
      transform: 'translate(0px)'
    },
    '50%': {
      transform: 'translate(3px, 15px)'
    },
    '100%': {
      transform: 'translate(0px)'
    }
  },
  image: {
    maxHeight: '100%',
    width: 'auto'
  }

}))

const BuyPancake = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
        <Box pt={4} pb={isMobile ? 4 : 8} data-aos="fade-down">
            <Container maxWidth="md">
                <Grid container className={classes.wrapper}>
                    <Grid item sm={12} md={8}>
                        <Box py={isMobile ? 0 : 10} pt={isMobile ? 4 : 10} maxWidth={600}>
                            <Typography variant="h2" color="primary">
                                You can buy our token on PancakeSwap!
                            </Typography>
                            <Box py={4}>
                                <Typography variant="h4" color="textSecondary">
                                    For now it is the only available place to purchase them. We are working hard on getting more platforms listing us.
                                </Typography>
                            </Box>
                            <Box display="flex" ml={-1} alignItems="center">
                                <Button onClick={() => {}} activeColor="red"><Typography variant="button">Buy now</Typography></Button>
                            </Box>
                        </Box>
                    </Grid>
                    <Grid item sm={12} md={4}>
                        <Box position="relative" minHeight={200} height="90%">
                            <Box height="100%" position="relative" className={`${classes.imageWrapper} ${classes.pancake}`}>
                                <img src={images.pancake} className={classes.image}/>
                            </Box>
                            <Box height="100%" position="relative" className={`${classes.imageWrapper} ${classes.topLeft}`}>
                                <img src={images.pancakeTopLeft} className={classes.image}/>
                            </Box>
                            <Box height="100%" position="relative" className={`${classes.imageWrapper} ${classes.topRight}`}>
                                <img src={images.pancakeTopRight} className={classes.image}/>
                            </Box>
                            <Box height="100%" position="relative" className={`${classes.imageWrapper} ${classes.bottomRight}`}>
                                <img src={images.pancakeBottomRight} className={classes.image}/>
                            </Box>
                        </Box>
                    </Grid>
                </Grid>
            </Container>
        </Box>
  )
}

export default BuyPancake
