 import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import axios from 'axios'
import { Card } from 'react-bootstrap'


const Profile = () => {

   const {id} = useParams()
   
   const [user , setUser]= useState({})
   
   
   useEffect(() =>{
    axios
    .get(`https://jsonplaceholder.typicode.com/users?id=${id}`)
    .then((res) =>setUser(res.data[0
    ])) 
    .catch((err)=>console.log(err))
}, [id])
   
  return (
    <div>

<Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="https://media.istockphoto.com/id/1393750072/vector/flat-white-icon-man-for-web-design-silhouette-flat-illustration-vector-illustration-stock.jpg?s=612x612&w=0&k=20&c=s9hO4SpyvrDIfELozPpiB_WtzQV9KhoMUP9R9gVohoU=" />
      <Card.Body>
        <Card.Title>{user.name}</Card.Title>
        <Card.Text>{user.email}</Card.Text>
      
        <Card.Text>{user.phone}</Card.Text>
         
            <Link to={`/users`} >Back </Link>

       </Card.Body>
    </Card>

    </div>
  )
}

export default Profile