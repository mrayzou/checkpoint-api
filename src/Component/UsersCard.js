import React from 'react'
import { Card } from 'react-bootstrap'
import { Link } from 'react-router-dom'
 
const UsersCard = ({user}) => {
  return (
    <div > 
       <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
        <Card.Text>{user.address.city}</Card.Text>
        <Card.Text>{user.phone}</Card.Text>
         
            <Link to={`/profile/${user.id}`} >Profile </Link>

       </Card.Body>
    </Card>
    </div>
  )
}

export default UsersCard