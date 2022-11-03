import React from 'react'
import "./First.css"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import img2 from "../Images/img2.jpg"
import {AiFillApple} from "react-icons/ai";

const First = () => {
  return (
    <div className='d-flex justify-content-center'>
    <div className='main'>
    </div>
    <div className='ims'>

        <img className=' pi ' src={img2} alt="" />

        {/* first cards */}
        <Card style={{ width: '18rem', }} className="bg-dark text-light car">
      
      <Card.Body>
        <Card.Title>Brand Identity</Card.Title>
        <Card.Text>
          <h1>Brand Design consultancy</h1>
          <p>Image from <span className='un'>Freepik</span></p>
        </Card.Text>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    {/* Anotehr cards class */}

    <div className='d-flex strategy justify-content-center gap-3 mt-5 mb-5'>

    <Card style={{ width: '18rem', }} className="shadow ">
      
      <Card.Body>
       <div className="d-flex gap-2">
        <div className='circle rounded-circle p-2'>
        <AiFillApple/>


        </div>
        <div>
        <h3>Strategy</h3>
        <p className='te'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vee quas aspernatur facere iusto.
        </p>
       </div>
       </div>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>


    <Card style={{ width: '18rem', }} className="shadow ">
      
      <Card.Body>
       <div className="d-flex gap-2">
       <div className='circle rounded-circle p-2'>
        <AiFillApple/>


        </div>
        <div>
        <h3>Consultency</h3>
        <p className='te'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Cupiditate vee quas aspernatur facere iusto.
        </p>
       </div>
       </div>
        {/* <Button variant="primary">Go somewhere</Button> */}
      </Card.Body>
    </Card>

    </div>
    </div>
   
    
     
    </div>
    
  )
}

export default First
