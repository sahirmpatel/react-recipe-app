import React from 'react'
import {Card , Button , Image} from 'react-bootstrap'

export default function Recipe({title,calories,image,ingredients}) {

    
    return (
        <div className="card" >
      <Card style={{ width: '15rem' ,backgroundColor:"#363B3E",border:"black",paddingBottom:"10px"}}>
  <Card.Img variant="top" src={image} />
  <Card.Body>
        <Card.Title>{title}</Card.Title>
        <Card.Subtitle className="mb-2 text-muted"><p id="demo"></p></Card.Subtitle>
    <Card.Text> <b> Ingredients</b>    <ul style={{listStyleType:"none"}} >
        {ingredients.map(ingredient=>(
        <li>{ingredient.text}</li>
    ))}</ul>
    </Card.Text>
  </Card.Body>
</Card>
            

        </div>
    )
}
