import React from 'react'
import Authentication from './pages/Authentication'
import Layout from './pages/Layout'
import { useSelector } from 'react-redux'
import Header from './components/Header'

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn )

  const itemsListArray = useSelector(state => state.cart.itemList)

  console.log(itemsListArray)
  

  return (
    <div>
      {!isLoggedIn && <Authentication />}
     {isLoggedIn &&  <div><Header /> <Layout /></div>}
    </div>
  )
}

export default App