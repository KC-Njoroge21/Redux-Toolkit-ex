import React from 'react'
import Authentication from './pages/Authentication'
import Layout from './pages/Layout'
import { useSelector } from 'react-redux'

const App = () => {

  const isLoggedIn = useSelector(state => state.auth.isLoggedIn )

  const itemsListArray = useSelector(state => state.cart.itemList)

  console.log(itemsListArray)
  

  return (
    <div>
      {!isLoggedIn && <Authentication />}
     {isLoggedIn &&  <Layout />}
    </div>
  )
}

export default App