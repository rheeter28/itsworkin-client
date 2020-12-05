import React from 'react';
import {Link} from 'react-router-dom'
import {Container} from 'reactstrap';


const HomePage = () =>{
  return(
    <div className ='mainDiv'>
      <Container className='titlepage'>
        <h1 className='title'>Welcome to ItsWorkn'</h1>
        <p>All your recipes in one place</p>
      </Container>
    </div>
  )
}

export default HomePage;