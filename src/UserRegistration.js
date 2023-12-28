import { useEffect } from "react";
import { useState } from "react";
import { Link } from "react-router-dom";

import { useNavigate } from 'react-router-dom';
import {
  Button,
  Card,
  CardBody,
  CardHeader,
  Col,
  Container,
  Form,
  FormFeedback,
  FormGroup,
  Input,
  Label,
  Row,
} from "reactstrap";
import axios from "axios";

const UserRegistration = () => {
  const navigate = useNavigate();
  const goToLoginPage = () => {
    navigate('/');
};
  const [data, setData] = useState({
    name: "",
    email: "",
    password: "",
    about: "",
  });

  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [desc, setDesc] = useState("");

  const handleRegister = async () => {
    try {
      // const response = await axios.post('http://localhost:5000/register', { username, password });
      const response = await axios.post(
        "http://localhost:8080/api/users/register",
        { username, password, email, desc }
      );

      console.log("Method is calling");
      console.log(username, password);
    } catch (error) {
      console.error("Registration error:", error.message);
    }
  };

  return (
    <Container>
      <Row className="mt-4">
        {/* { JSON.stringify(data) } */}

        <Col sm={{ size: 6, offset: 3 }}>
          <Card color="dark" inverse>
            <CardHeader>
              <h3> Fill Information to Register !!</h3>
            </CardHeader>

            <CardBody>
              {/* creating form */}

              <Form>
                {/* Name field */}
                <FormGroup>
                  <Label for="name">Enter Username</Label>
                  <Input
                    type="text"
                    placeholder="Enter here"
                    id="name"
                    onChange={(e) => setUsername(e.target.value)}
                  />

                  <FormFeedback></FormFeedback>
                </FormGroup>

                {/* email field */}
                <FormGroup>
                  <Label for="email">Enter Email</Label>
                  <Input
                    onChange={(e) => setEmail(e.target.value)}
                    type="email"
                    placeholder="Enter here"
                    id="email"
                  />

                  <FormFeedback></FormFeedback>
                </FormGroup>

                {/* password field */}
                <FormGroup>
                  <Label for="password">Enter password</Label>
                  <Input
                    type="password"
                    placeholder="Enter here"
                    id="password"
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <FormFeedback></FormFeedback>
                </FormGroup>

                {/* about field */}
                <FormGroup>
                  <Label for="about">Write something about yourself</Label>
                  <Input
                    type="textarea"
                    onChange={(e) => setDesc(e.target.value)}
                    placeholder="Enter here"
                    id="about"
                    style={{ height: "250px" }}
                  />

                  <FormFeedback></FormFeedback>
                </FormGroup>

                <Container className="text-center">
                  {/* <Button to="/register">Go to Register</Button> Link to the Register page */}

                  <Button
                    type="submit"
                    outline
                    color="light"
                    onClick={handleRegister}
                  >
                    Register{" "}
                  </Button>

                  <Button color="secondary" type="reset" className="ms-2">
                    Reset
                  </Button>

                  <Button onClick={goToLoginPage} on color="secondary" type="button" className="ms-2">
                    Existing User
                  </Button>

                </Container>
              </Form>
            </CardBody>
          </Card>
        </Col>
      </Row>
    </Container>
  );
};

export default UserRegistration;
