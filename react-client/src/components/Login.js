import { useState } from 'react';
import { useMutation, gql } from '@apollo/client';
import { useHistory } from "react-router-dom";

//import ReactDOM from 'react-dom';
import Jumbotron from 'react-bootstrap/Jumbotron';
import Form from 'react-bootstrap/Form';
import Button from 'react-bootstrap/Button';
import axios from 'axios';

const LOGIN = gql`
mutation authenticate($email: String!, $password: String!){
  authenticate(email: $email, password: $password){
    _id
    token
  }
}
`;

const UserLogin = () => {
  const history = useHistory();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');

  const [login, { loading, error, data }]
    = useMutation(LOGIN);

  if (error) 
  {
    return `Login Failed! ${error.message}`
    history.push(`/login`);
  };
  if(data){
    history.push(`/home`);
  }
  return (
    <div className="login">
      {/* Input box to input email */}
      Email Id : &nbsp;&nbsp;&nbsp;
      <input
        value={email}
        onChange={(event) => setEmail(event.target.value)}
      />
      {/* Input box to input password */}
      <br/><br/>
      Password :&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 
      <input
        value={password}
        onChange={(event) => setPassword(event.target.value)}
      />
      {/* Button to log in */}
      <br/>
      <Button variant='primary' type='submit'
        onClick={
          () => login({ variables: { email, password } })
        }
      >
        Log in
      </Button>
    </div>
  );
}
export default UserLogin;