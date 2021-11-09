import PropTypes from 'prop-types'
import React from 'react'
import { makeStyles } from '@material-ui/styles'
import { customTheme } from '../../theme'

const useStyles = makeStyles((theme) => ({
  btn: {
    padding: '0 24px 3px 24px',
    border: `2px solid ${customTheme.color.stroke}`,
    color: customTheme.color.night,
    margin: '0 10px',
    textAlign: 'center',
    height: '100%',
    transition: '0.3s',
    borderRadius: '90px',
    cursor: 'pointer',
    '&:hover': {
      color: customTheme.color.white,
      background: customTheme.color.night,
      border: `2px solid ${customTheme.color.night}`
    },
    [theme.breakpoints.down('md')]: {
      padding: '6px 20px'
    }
  },
  small: {
    padding: '0 24px 3px 24px',
    '& span': {
      letterSpacing: '0.1rem',
      fontSize: '1.25rem'
    }
  },
  red: {
    border: `2px solid ${customTheme.color.red}`,
    color: customTheme.color.red,
    '&:hover': {
      color: customTheme.color.white,
      background: customTheme.color.red,
      border: `2px solid ${customTheme.color.red}`
    }
  }

}))

const Button = ({ onClick, activeColor, children, className, size, link }) => {
  const classes = useStyles()
  return (
     <a role="button" href={link} className={`${classes.btn} ${classes[activeColor]} ${className} ${classes[size]}`}
        onClick={() => onClick()}>{children}</a>
  )
}
Button.propTypes = {
  onClick: PropTypes.func,
  activeColor: PropTypes.string,
  children: PropTypes.any,
  className: PropTypes.string,
  size: PropTypes.string,
  link: PropTypes.string
}

export default Button
