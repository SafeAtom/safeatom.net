import React from 'react'
import { Box, Typography } from '@material-ui/core'
import PropTypes from 'prop-types'
import { makeStyles } from '@material-ui/styles'
import { customTheme } from '../../theme'

const useStyles = makeStyles((theme) => ({
  root: {
    border: `2px solid ${customTheme.color.purple}`,
    boxShadow: '0px 3px 8px 1px rgba(0,0,0,0.05)',
    transition: 'box-shadow 0.1s linear 0.1s, top 0.1s linear 0.1s',
    position: 'relative',
    top: 0,
    borderRadius: 12,
    '&:hover': {
      top: -5,
      boxShadow: '0px 3px 8px 1px rgba(0,0,0,0.20)'
    }
  },
  left: {
    textAlign: 'right',
    padding: `${theme.spacing(1)}px 0 ${theme.spacing(1)}px ${theme.spacing(4)}px`
  },
  right: {
    textAlign: 'left',
    padding: `${theme.spacing(1)}px ${theme.spacing(4)}px ${theme.spacing(1)}px 0`
  },
  list: {
    maxWidth: '100%'
  }
}))

const TimelineBox = ({ type, title, list }) => {
  const classes = useStyles()

  return (
      <Box data-aos={'fade-down'}>
        <Box className={`${classes.root} ${type === 'left' ? classes.left : classes.right}`} dir={type === 'left' ? 'rtl' : undefined}>
            <Typography variant="body1">
                {title}
            </Typography>
            <ul className={classes.list}>
                {list.map((item) => <li key={item}><Typography variant="body2" color="textSecondary">{item}</Typography></li>)}
            </ul>
        </Box>
      </Box>
  )
}

TimelineBox.propTypes = {
  type: PropTypes.string,
  title: PropTypes.string,
  list: PropTypes.array
}

export default TimelineBox
