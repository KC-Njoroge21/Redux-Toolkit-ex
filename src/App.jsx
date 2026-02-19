import React from 'react'
import Authentication from './pages/Authentication'
import Layout from './pages/Layout'
import { useSelector } from 'react-redux'

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn )
  

  return (
    <div>
      {!isLoggedIn && <Authentication />}
     {isLoggedIn &&  <Layout />}
    </div>
  )
}

export default App