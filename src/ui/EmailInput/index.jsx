import React, { useState } from 'react'
import { Box } from '@material-ui/core'
import { makeStyles } from '@material-ui/styles'
import { customTheme } from '../../theme'
import { images } from '../../images'

const useStyles = makeStyles(() => ({
  root: {
    width: '100%',
    maxWidth: '20rem',
    padding: '.25rem .4rem .25rem 1rem',
    backgroundColor: customTheme.color.white,
    border: `2px solid ${customTheme.color.purple}`
  },
  input: {
    color: 'inherit',
    padding: 0,
    margin: 0,
    border: 'none',
    '&::placeholder': {
      color: customTheme.color.gray,
      opacity: 1
    },
    '&:focus': {
      outline: '2px solid transparent',
      outlineOffset: 2
    }
  },
  imgWrapper: {
    cursor: 'pointer',
    '&:hover': {
      opacity: 0.6
    }
  }
}))

const EmailInput = () => {
  const classes = useStyles()
  const [value, setValue] = useState('')

  return (
        <Box borderRadius={25} display="flex" justifyContent="space-between" alignItems="center" className={classes.root}>
            <input className={classes.input} value={value} onChange={(e) => setValue(e.target.value)} placeholder="Your email"/>
            <Box display="flex" justifyContent="center" alignItems="center" borderRadius="50%" p={0.8} bgcolor={customTheme.color.purple} className={classes.imgWrapper} onClick={() => setValue('')}>
                <img src={images.arrowRight} width={22} height={22}/>
            </Box>
        </Box>
  )
}

export default EmailInput
