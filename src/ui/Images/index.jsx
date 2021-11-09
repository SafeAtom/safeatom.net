import React from 'react'

import { images } from '../../images'
import { Box, Container, Grid, makeStyles, useMediaQuery, useTheme } from '@material-ui/core'

const useStyles = makeStyles(() => ({
  img: {
    objectFit: 'contain',
    maxWidth: '100%',
    maxHeight: 38,
    height: '100%'
  },
  imgWrapper: {
    textAlign: 'center'
  }
}))

const Images = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
        <Container data-aos="fade-down">
            <Box py={isMobile ? 4 : 8}>
                <Grid container spacing={2} alignItems="stretch" justifyContent="center">
                    <Grid item spacing={2} xs={8} md={3} className={classes.imgWrapper}>
                        <img src={images.bsc} className={classes.img}/>
                    </Grid>
                    <Grid item spacing={2} xs={4} md={3} className={classes.imgWrapper}>
                        <img src={images.matic} className={classes.img}/>
                    </Grid>
                    <Grid item spacing={2} xs={7} md={3} className={classes.imgWrapper}>
                        <img src={images.huobi} className={classes.img}/>
                    </Grid>
                    <Grid item spacing={2} xs={5} md={3} className={classes.imgWrapper}>
                        <img src={images.eth} className={classes.img}/>
                    </Grid>
                </Grid>
            </Box>
        </Container>
  )
}

export default Images
