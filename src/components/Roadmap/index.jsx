import React from 'react'
import Timeline from '@material-ui/lab/Timeline'
import { makeStyles } from '@material-ui/styles'
import {
  TimelineConnector,
  TimelineContent,
  TimelineDot,
  TimelineItem,
  TimelineOppositeContent,
  TimelineSeparator
} from '@material-ui/lab'
import { Box, Typography, useMediaQuery, useTheme } from '@material-ui/core'
import Title from '../../ui/Title'
import TimelineBox from '../../ui/TimelineBox'
import { customTheme } from '../../theme'

const useStyles = makeStyles((theme) => ({
  paper: {
    padding: '6px 16px'
  },
  secondaryTail: {
    backgroundColor: theme.palette.secondary.main
  },
  timeline: {
    width: '100%',
    [theme.breakpoints.down('xs')]: {
      width: '95%',
      padding: '16px 8px',
      maxWidth: 375,
      '& .MuiTypography-body1': {
        paddingBottom: 8,
        paddingTop: 0
      },
      '& .MuiTimelineItem-missingOppositeContent': {
        '&::before': {
          display: 'none'
        }
      }
    },
    [theme.breakpoints.down('md')]: {
      maxWidth: 800
    },
    maxWidth: 1100
  },
  dot: {
    '&:hover': {
      backgroundColor: customTheme.color.purple
    }
  }
}))

const Roadmap = () => {
  const classes = useStyles()
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('xs'))

  return (
        <Box bgcolor={customTheme.color.white} width="100%" display="flex" flexDirection="column" justifyContent="center" alignItems="center" data-aos="fade-down">
            <Box alignSelf={isMobile ? 'flex-start' : undefined} px={2} >
              <Title title="Roadmap" subtitle={"What we'll be up to in 2021"} logo="goal"/>
            </Box>
            { isMobile
              ? <Timeline className={classes.timeline} align="left">
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body1" color="textSecondary">
                                Q4 2021 IDO Period
                            </Typography>
                            <TimelineBox list={['Public Sale & Pancakeswap listing', 'CoinGecko & CoinMarketCap', 'First Projects and partnerships']} type="right"/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body1" color="textSecondary">
                                Q1 2022
                            </Typography>
                            <TimelineBox list={['AtomSwap alpha development start. During this phase, the application will be development on a closed alpha', 'Finalization of Safeatom background work.', 'Development start of Safeatom app']} type="right"/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body1" color="textSecondary">
                                Q2 2022
                            </Typography>
                            <TimelineBox list={['Finalization of exchange listings.', 'Closed beta of Safeatom app where you can purchase crypto with credit card and low commission']} type="right"/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                            </TimelineDot>
                            <TimelineConnector className={classes.secondaryTail} />
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body1" color="textSecondary">
                                Q3 2022
                            </Typography>
                            <TimelineBox list={['AtomSwap platform release for Web 3.0, IOS and Android', 'Release first build of application']} type="right"/>
                        </TimelineContent>
                    </TimelineItem>
                    <TimelineItem>
                        <TimelineSeparator>
                            <TimelineDot color="secondary">
                            </TimelineDot>
                        </TimelineSeparator>
                        <TimelineContent>
                            <Typography variant="body1" color="textSecondary">
                                Q4 2022
                            </Typography>
                            <TimelineBox list={['Finalization of Safeatom app', 'Media Partnership', 'Celebrity Endorsements', 'Charity Campaigns']} type="right"/>
                        </TimelineContent>
                    </TimelineItem>
                </Timeline>
              : <Timeline className={classes.timeline} align="alternate">
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body1" color="textSecondary">
                            Q4 2021 IDO Period
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineBox list={['Public Sale & Pancakeswap listing', 'CoinGecko & CoinMarketCap', 'First Projects and partnerships']} type="right"/>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body1" color="textSecondary">
                            Q1 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineBox list={['AtomSwap alpha development start. During this phase, the application will be development on a closed alpha', 'Finalization of Safeatom background work.', 'Development start of Safeatom app']} type="left"/>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body1" color="textSecondary">
                            Q2 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineBox list={['Finalization of exchange listings', 'Closed beta of Safeatom app where you can purchase crypto with credit card and low commission']} type="right"/>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body1" color="textSecondary">
                            Q3 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                        </TimelineDot>
                        <TimelineConnector className={classes.secondaryTail} />
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineBox list={['AtomSwap platform release for Web 3.0, IOS and Android', 'Release first build of application']} type="left"/>
                    </TimelineContent>
                </TimelineItem>
                <TimelineItem>
                    <TimelineOppositeContent>
                        <Typography variant="body1" color="textSecondary">
                            Q4 2022
                        </Typography>
                    </TimelineOppositeContent>
                    <TimelineSeparator>
                        <TimelineDot color="secondary">
                        </TimelineDot>
                    </TimelineSeparator>
                    <TimelineContent>
                        <TimelineBox list={['Finalization of SafeAtom app', 'Media Partnership', 'Celebrity Endorsements', 'Charity Campaigns']} type="right"/>
                    </TimelineContent>
                </TimelineItem>
            </Timeline>}
        </Box>
  )
}

export default Roadmap
