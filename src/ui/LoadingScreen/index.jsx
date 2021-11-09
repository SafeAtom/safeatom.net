import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box } from '@material-ui/core'
import { images } from '../../images'

const useStyles = makeStyles(() => ({
  circle: {
    animation: 'rotation 5s infinite linear'
  },
  '@keyframes rotation': {
    from: {
      transform: 'rotate(0deg)'
    },
    to: {
      transform: 'rotate(359deg)'
    }
  }
}))

const LoadingScreen = () => {
  const classes = useStyles()

  return (
        <Box width="100%" height="100%" display="flex" justifyContent="center" alignItems="center">
            <Box textAlign="center">
                <img src={images.noCircleLogo} width={250} className={classes.circle}/>
            </Box>
        </Box>
  )
}

export default LoadingScreen
