import React from 'react'
import item from '../data/items'
import { data } from '../App'
import { Link } from 'react-router-dom'
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import './styles/ItemCards.css'
import { useContext } from 'react';


function ItemCards() {

  const [cartitems,Setcartitems] = useContext(data);
  function addtocartHandler(index){
    Setcartitems([...cartitems,item[index]]);
    item[index].clicked = true
  }
 
  return (
    <div className='cardbody'>
      {item.map((element)=>{
        return(
          <Card key={element.name} style={{ width: '18rem' }} className='card'>
            <Card.Img variant="top" src={element.src} style={{width:'200px', height:'200px'}} className='itemimg'/>
            <Card.Body className='textbody'>
              <Card.Title className='name'><strong>{element.name}</strong></Card.Title>
              <Card.Text className='rating'>Rating: {element.rating}/5</Card.Text>
              <Card.Text className='price'>${element.price}</Card.Text>
              <div className='btnbag'>
                <Link to={`/${element.id}`} ><Button variant="primary" className='detailsbtn'>View details</Button></Link>
                <Button variant="primary" disabled={element.clicked} className='cartbtn' onClick={(e)=>{addtocartHandler(e.target.value)}} value={element.id}>Add to cart</Button>
              </div>
              
            </Card.Body>
          </Card>
        )
      })}
    </div>
  )
}

export default ItemCards