import React, {useState} from 'react';
import {Form, FormGroup, Label, Input, Button} from 'reactstrap';
import {useHistory} from 'react-router-dom';

const Register = (props) => {
  const [username, setUsername] = useState('');
  const [email, setEmail] = useState('')
  const [password, setPassword] = useState('');
  const [confirmPassword, setConfirmPassword] = useState('');
  let history = useHistory();

  const handleSubmit = (event) => {
    event.preventDefault();

  
    fetch("http://localhost:3000/user/register", {
      method: 'POST', 
      headers: {
        'Content-Type' : 'application/json'
      },
      body: JSON.stringify({user :{username: username, email: email, password: password}}),
    }).then(
      (response) => response.json()
    ).then((data) => {
      props.updateToken(data.sessionToken)
    })
  }

  return (
    <div>
      <h1>Register</h1>
      <Form onSubmit={handleSubmit}>
        <FormGroup>
          <Label htmlFor='username'>Username</Label>
          <Input onChange={(e) => setUsername(e.target.value)} name="username" value={username}/>
        </FormGroup>
        <FormGroup>
         <Label htmlFor="email">Email</Label>
         <Input onChange={(e) => setEmail(e.target.value)} name="email" value={email}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="password">Password</Label>
          <Input type='password' onChange={(e) => setPassword(e.target.value)} name='password' value={password}/>
        </FormGroup>
        <FormGroup>
          <Label htmlFor="repeatPassword">Confirm Password</Label>
          <Input type='password' onChange={(e) => setConfirmPassword(e.target.value)} name='confirmPassword' value={confirmPassword}/>
        </FormGroup>
        <Button type='submit'>Submit</Button>
      </Form>
    </div>
  )
}

export default Register;