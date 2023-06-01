import React from 'react'
import item from '../data/items'
import { useParams } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { data } from '../App';
import { useContext } from 'react';
import Navigation from '../components/Navigation';
import '../components/styles/Productdetails.css'

function Productdetails() {
  const {id} = useParams()

  const [cartitems,Setcartitems] = useContext(data);
  function addtocartHandler(index){
    Setcartitems([...cartitems,item[index]]);
    item[index].clicked = true
    alert('Item has been added to cart, click on the cart in the top right to checkout')
  }
  return (
    <>
    <Navigation/>
    <div className='details'>
      <Card key={item[id].name} style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={item[id].src} style={{width:'200px', height:'200px'}} className='itemimg'/>
            <Card.Body className='textbody'>
              <Card.Title className='name'><strong>{item[id].name}</strong></Card.Title>
              <Card.Text className='rating'>Rating: {item[id].rating}/5</Card.Text>
              <Card.Text className='price'>${item[id].price}</Card.Text>
              <Card.Text>Details of products: ...</Card.Text>
              <div className='btnbag'>
                <Button variant="primary" disabled={item[id].clicked} className='cartbtn' onClick={(e)=>{addtocartHandler(e.target.value)}} value={item[id].id}>Add to cart</Button>
              </div>
            </Card.Body>
          </Card>
    </div>
    </>
  )
}

export default Productdetails