import { Box, Container, Grid, Typography } from '@material-ui/core'
import React from 'react'
import Title from '../../ui/Title'
import { customTheme } from '../../theme'
import { makeStyles } from '@material-ui/styles'
import { images } from '../../images'

const useStyles = makeStyles(() => ({
  icon: {
    border: `3px solid ${customTheme.color.purple}`,
    borderRadius: '50%',
    width: '100%',
    maxWidth: 220
  }
}))

const teamMembers = [
  { name: 'Artem Trifaniuck', title: 'CEO & Programmer IT' },
  { name: 'Jack Nicholson', title: 'Programmer IT' },
  { name: 'Jack Nicholson', title: 'Programmer IT' },
  { name: 'Jack Nicholson', title: 'Programmer IT' },
  { name: 'Jack Nicholson', title: 'Programmer IT' },
  { name: 'Jack Nicholson', title: 'Programmer IT' }
]

const Team = () => {
  const classes = useStyles()

  return (
        <Box mb={10} data-aos="fade-down">
            <Container>
                <Title title="Our Team" subtitle="Our Core Team Members" logo="team2" width={110}/>
                <Grid container spacing={1} justifyContent="center" alignItems="center">
                    {teamMembers.map((member, index) => (
                        <Grid item sm={6} md={4} key={index} data-aos="fade-down" data-aos-delay={index * 150}>
                            <Box display="flex" flexDirection="column" width="100%" alignItems="center" justifyContent="center" py={2}>
                                <img src={images.teamMember1} className={classes.icon}/>
                                <Box pt={2} pb={1}>
                                    <Typography variant="body1" color="primary">{member.name}</Typography>
                                </Box>
                                <Box>
                                    <Typography variant="body2" color="textSecondary">{member.title}</Typography>
                                </Box>
                            </Box>
                        </Grid>
                    ))}
                </Grid>
            </Container>
        </Box>
  )
}

export default Team
