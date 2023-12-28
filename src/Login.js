import { useState } from "react";
import axios from 'axios';
import { Link } from 'react-router-dom';

import { useNavigate } from 'react-router-dom';





import {
  Label,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormGroup,
  Input,
  Row,
  Button,
} from "reactstrap";

const Login = () => {
    const navigate = useNavigate();
  
    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');
    const [errorMessage, setErrorMessage] = useState('');

    const goToRegister = () => {
        navigate('/register');
    };


    const handleLogin = async (e) => {
        try {
            e.preventDefault();
            const response = await axios.post('http://localhost:8080/api/users/login', { username, password });
            console.log("data=" , response.data);

            setErrorMessage('');
            // navigate('/user/dashboard');
            navigate('/user/dashboard', { state: { username } });
          
                 
            
            // Handle success (redirect, show a success message, etc.)
        } catch (error) {
            console.error('Login error:', error.message);
            setErrorMessage('Invalid username or password');
            // Handle error (display an error message, etc.)
        }
    };
    
  

  

  
    return (
     
        <Container>
          <Row className="mt-4">
            <Col
              sm={{
                size: 6,
                offset: 3,
              }}
            >
              <Card color="dark" inverse>
                <CardHeader>
                  <h3>Login Here !!</h3>
                </CardHeader>
  
                <CardBody>
                  <Form onSubmit={handleLogin}>
                    {/* Email field */}
  
                    <FormGroup>
                      <Label for="username">Enter Username</Label>
                      <Input
                        type="text"
                        id="username"
            
                        onChange={(e) => setUsername(e.target.value)}
                        
                      />
                    </FormGroup>
  
                    {/* password field */}
  
                    <FormGroup>
                      <Label for="password">Enter password</Label>
                      <Input
                        type="password"
                        id="password"
                        onChange={(e) => setPassword(e.target.value)}
                       
                      />
                    </FormGroup>
  
                    <Container className="text-center">
                      <Button  type="submit" color="light" outline>
                        Login
                      </Button>



                     <Button onClick={goToRegister} className="ms-2"  type="button" color="light" outline>
                        Register
                      </Button>

                     

                      <Button
                        
                        className="ms-2"
                        outline
                        color="secondary"
                      >
                        Reset
                      </Button>
                    </Container>
                  </Form>
                  {errorMessage && <p className="" style={{ color: 'red' }}>{errorMessage}</p>}

                </CardBody>
              </Card>
            </Col>
          </Row>
        </Container>
      
    );
  };
  
  export default Login;