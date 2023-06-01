import React from 'react'
import { data } from '../App'
import { useContext } from 'react'
import { Link } from 'react-router-dom';
import "./styles/Navigation.css"

function Navigation() {
  const [cartitems,]= useContext(data);
  return (
    <div className='mainnav'>
      <Link to='/'>
      <div className='namenav'>
        <img className='logo' alt='' src='https://www.freepnglogos.com/uploads/s-letter-logo-png-2.png' style={{width:'40px', height:'40px'}}/>
        <div className='logotext'>Shopping Website</div>
      </div>
      </Link>

      <Link to='/cart'>
      <div className='cartbox'>
        <img className='cartimg' alt='' src='https://static-00.iconduck.com/assets.00/shopping-cart-icon-2048x1842-etrk1yv6.png' style={{width:'20px', height:'20px'}}/>
        <div>Cart</div>
        <div className='count'>{cartitems.length}</div>
      </div>
      </Link>
    </div>
  )
}

export default Navigation