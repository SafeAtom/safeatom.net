import React from 'react'

import Atom from '../../components/Atom'
import Advantages from '../../components/Advantages'
import Roadmap from '../../components/Roadmap'
// import Images from '../../ui/Images'
import UpToDate from '../../ui/UpToDate'
import WhyUs from '../../components/WhyUs'
import BuyPancake from '../../components/BuyPancake'
import { Box, useMediaQuery, useTheme } from '@material-ui/core'

const Home = () => {
  const theme = useTheme()
  const isMobile = useMediaQuery(theme.breakpoints.down('sm'))

  return (
        <>
             <Atom />
             <UpToDate />
             <Advantages />
             {/* <Images /> */}
             <WhyUs />
             <Roadmap />
             <Box py={isMobile ? 0 : 8}>
                 <BuyPancake/>
             </Box>
        </>
  )
}

export default Home
