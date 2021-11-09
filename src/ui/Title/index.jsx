import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'

import React from 'react'
import PropTypes from 'prop-types'

const Title = ({ title, subtitle, logo = 'titleLogo', width = 100 }) => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
      <Box display="flex" justifyContent={isMobile ? 'flex-start' : 'center'} alignItems={isMobile ? 'center' : 'flex-end'} my={isMobile ? 3 : 7} data-aos="fade-down">
        <Box textAlign={isMobile ? 'start' : 'center'}>
          <Typography color="primary" variant="h3">
            {title}
          </Typography>
          <Typography color="textSecondary" variant="h2">
            {subtitle}
          </Typography>
        </Box>
      </Box>
  )
}

Title.propTypes = {
  title: PropTypes.string,
  subtitle: PropTypes.string,
  logo: PropTypes.string,
  width: PropTypes.number
}

export default Title
