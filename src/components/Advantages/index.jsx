import React, { useEffect } from 'react'
import { Box, Container, Grid, makeStyles, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import { customTheme } from '../../theme'
import { images } from '../../images'

const useStyles = makeStyles((theme) => ({
  tab: {
    borderLeft: '4px solid transparent',
    transition: '0.3s',
    '&.active': {
      borderLeft: `4px solid ${customTheme.color.purple}`,
      '& .MuiTypography-body1': {
        color: customTheme.color.purple
      }
    }
  },
  img: {
    position: 'absolute',
    opacity: 0,
    transition: 'opacity .15s linear',
    '&.active': {
      transition: 'opacity .15s linear',
      opacity: 1
    },
    '& img': {
      width: '100%',
      height: '100%',
      objectFit: 'contain'
    }
  },
  imgWrapper: {
    position: 'relative',
    height: 400,
    width: '100%'
  }
}))

const columns = [
  {
    title: 'Community Driven',
    text: 'Community driven & fair launch. The dev team burned all of their tokens and participated with everyone else.'
  },
  {
    title: 'Seamlessly, Forklessly, Endlessly Upgradeable',
    text: 'SAFEATOM is built to adjust, adapt, and add features and functionality through its proven on-chain upgrade mechanism.'
  },
  {
    title: 'Purposeful',
    text: 'Contrary to the majority of BSC tokens, SAFEATOM is not a pump & dump token with no purpose'
  }
]

const columnsImages = [images.community, images.upgradeable, images.purposeful]

const Advantages = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const [active, setActive] = React.useState(0)

  useEffect(() => {
    const interval = setInterval(() => {
      console.log('interval')
      setActive(active => active === 2 ? 0 : active + 1)
    }, 7000)
    return () => clearInterval(interval)
  }, [])

  return (
      <Container >
        <Box mb={2} bgColor={customTheme.color.white}>
            <Grid container justifyContent="space-between" alignItems="center" wrap="wrap">
                <Grid item sm={11} md={6} data-aos="fade-down" data-aos-offset="200">
                    {columns.map((col, index) => (
                        <Box width="95%" paddingY={2} paddingRight={1} paddingLeft={isMobile ? 1 : 3} textAlign="start" className={`${classes.tab} ${active === index && 'active'}`} onClick={() => setActive(index)} key={col.title}>
                            <Typography variant="body1" color="primary">{col.title}</Typography>
                            <Typography variant="body2" color="textSecondary">{col.text}</Typography>
                        </Box>
                    ))}
                </Grid>
                <Grid item sm={12} md={6} data-aos="fade-down" data-aos-delay="500" className={classes.imgWrapper}>
                    {columnsImages.map((col, index) => (
                          <Box width="100%" height="100%" className={`${classes.img} ${active === index && 'active'}`} key={index} >
                            <img src={col}/>
                          </Box>
                    ))}
                </Grid>
            </Grid>
        </Box>
      </Container>
  )
}

export default Advantages
