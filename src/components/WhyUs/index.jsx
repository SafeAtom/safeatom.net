import React, { useState } from 'react'
import { makeStyles } from '@material-ui/styles'
import { Box, Container, Grid, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Icon from '../../ui/Icon'
import { customTheme } from '../../theme'
import Title from '../../ui/Title'

const useStyles = makeStyles(() => ({
  box: {
    transition: 'background-color 1000ms linear',
    display: 'flex',
    justifyContent: 'flex-start',
    alignItems: 'flex-start',
    flexDirection: 'column'
  }
}))

const tabs = [
  { title: 'Community', desc: 'The Safeatom protocol was built with mechanisms to ensure active community governance and participation.', img: 'heart' },
  { title: 'RFI Static Rewards', desc: 'Holders earn passive rewards through static reflection as they watch their balance of Safeatom grow indefinitely.', img: 'tabs' },
  { title: 'Clients', desc: 'Our token is only created because we trust in crypto future and we wanted to be not last part of it. But this can be done only with your help', img: 'community' },
  { title: 'Automatic LP', desc: 'Every trade contributes towards automatically generating liquidity that goes into multiple pools used by exchanges', img: 'chain' },
  { title: 'Secure', desc: 'Ownership of Safeatom coins is completely anonymous.', img: 'shield' },
  { title: 'Transparent', desc: 'Transactions are decentralized, publicly recorded, and trackable.', img: 'checkmark' }
]

const WhyUs = () => {
  const [active, setActive] = useState(1)
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))
  const classes = useStyles()

  return (
       <Container>
           <Title title="Why SAFEATOM?" width={90}/>
            <Grid container spacing={2} alignItems="center">
                {tabs.map((tab, index) => (
                    <Grid item sm={6} md={4} key={index}>
                        <Box minHeight={isMobile ? 120 : 200} borderRadius={isMobile ? 16 : 36} onClick={() => setActive(index)} onMouseEnter={() => setActive(index)} p={isMobile ? 3 : 5} bgcolor={index === active ? customTheme.color.purple : 'transparent'} className={classes.box}>
                            <Icon type={tab.img} color={index === active ? customTheme.color.white : customTheme.color.night}/>
                            <Box py={1}>
                                <Typography variant="body1" color={index === active ? 'error' : 'primary'}>{tab.title}</Typography>
                            </Box>
                            <Box py={1}>
                                <Typography variant="body2" color={index === active ? 'error' : 'textSecondary'}>{tab.desc}</Typography>
                            </Box>
                        </Box>
                    </Grid>
                ))}
            </Grid>
       </Container>
  )
}

export default WhyUs
