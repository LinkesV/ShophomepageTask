import React from 'react'
import { data } from '../App'
import { useContext } from 'react'
import item from '../data/items'
import Navigation from '../components/Navigation'
import '../components/styles/Cart.css'


function Cart() {

  const [cartitems,Setcartitems] = useContext(data)

  let total = 0;

  function deleteitemHandler(index){

    Setcartitems(cartitems.filter((x)=>x.id !== index))
    console.log(cartitems)
    item[index].clicked = false
  }

  return (
    <>
      <Navigation/>
      <div className='checkout'>
        <div className='header'>Your Cart &#40;{cartitems.length} items&#41;</div>
      {cartitems.map((element)=>{      
        total += parseInt(element.price)

        return(
          <div key={element.name} className='cartitems'>
            <img src={element.src} alt='' style={{width:'100px',height:'100px'}}/>
            <div className='itemdetails'>
              <div className='itemname'>{element.name}</div>
              <div className='itemprice'>${element.price}</div>
              <button className='button-89' value={element.id} onClick={(e)=>{deleteitemHandler(e.target.value)}}>Remove from cart</button>
            </div>
          </div>
       )

          
      })}
      <div className='total'>
        Total: ${total}
      </div>
    </div>
    </>
  )
}

export default Cart