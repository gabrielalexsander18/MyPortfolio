import React, { useEffect } from 'react'
import {
  BrowserRouter as Router,
  Routes,
  Route,
  useLocation
} from 'react-router-dom'

import paths from '../constants/paths'
import { Contacts, Education, Home, Projects, Skills } from '../containers'

function ScrollToTop() {
  const { pathname } = useLocation()

  useEffect(() => {
    window.scrollTo(0, 0)
  }, [pathname])

  return null
}

const MyRoutes = () => {
  return (
    <Router>
      <ScrollToTop />
      <Routes>
        <Route path={paths.Home} element={<Home />} />
        <Route path={paths.Projects} element={<Projects />} />
        <Route path={paths.Skills} element={<Skills />} />
        <Route path={paths.Education} element={<Education />} />
        <Route path={paths.Contacts} element={<Contacts />} />
      </Routes>
    </Router>
  )
}

export default MyRoutes
