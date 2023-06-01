import React from 'react'
import Navigation from '../components/Navigation'
// import Carosell from '../components/Carosell'
import ItemCards from '../components/ItemCards'

function Homepage() {
  return (
    <div>
      <Navigation/>
      {/* <Carosell/> */}
      <ItemCards/>
    </div>
  )
}

export default Homepage