import React, { Suspense } from 'react'
import {
  BrowserRouter as Router,
  Switch,
  Route
} from 'react-router-dom'

import { siteRoutes } from './constants'
import LoadingScreen from './ui/LoadingScreen'
const Navbar = React.lazy(() => import('./components/Navbar'))
const Footer = React.lazy(() => import('./components/Footer'))
const Home = React.lazy(() => import('./screens/Home'))
const OurTeam = React.lazy(() => import('./screens/OurTeam'))
const Markets = React.lazy(() => import('./screens/Markets/index'))

function App () {
  return (
      <Router>
          <Suspense fallback={<LoadingScreen/>}>
              <Navbar />
              <Switch>
                  <Route exact path={siteRoutes.home}>
                      <Home />
                  </Route>
                  <Route path={siteRoutes.ourTeam}>
                      <OurTeam />
                  </Route>
                  <Route path={siteRoutes.markets}>
                      <Markets />
                  </Route>
                  <Route path={siteRoutes.contract}>
                      <OurTeam />
                  </Route>
                  <Route path={siteRoutes.whitePaper}>
                      <OurTeam />
                  </Route>
              </Switch>
              <Footer/>
          </Suspense>
      </Router>
  )
}

export default App
