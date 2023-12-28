import React from 'react'

import { useNavigate } from 'react-router-dom';


import { Button, Card, CardBody, Container, Row, Table } from 'reactstrap'

import { useLocation } from 'react-router-dom';


import  { useState, useEffect } from 'react';



export const UserDashboard =()=> {
    const navigate = useNavigate();


    const handleLogout=()=>{
        
    navigate('/');
    };



    const [data, setData] = useState('');
    const location = useLocation();
  const username = location.state.username;

  console.log("Username=",username)

    // console.log(username);

    const [userData, setUserData] = useState(null);

    useEffect(() => {
        // Fetch user data when the component mounts
        fetchUserData();
      }, []);

      const fetchUserData = async () => {
        try {
          const response = await fetch(`http://localhost:8080/api/users/viewProfile/${username}`);
          if (response.ok) {
            const data = await response.json();
            console.log(data)
            setData(data)
          } else {
            console.error('Error fetching user data:', response.statusText);
          }
        } catch (error) {
          console.error('Error fetching user data:', error.message);
        }
      };
   
      return (
        <>
        <Card className='mt-2 border-0 rounded-0 shadow-sm'>
            <CardBody>
                <h2>Welcome to User Dashboard Page</h2>
                <h3 className='text-uppercase'>user Information</h3>

                {/* <Container className='text-center'>
                    <img style={{ maxWidth: '200px', maxHeight: '200px' }} src={user.image ? user.image : 'https://cdn.dribbble.com/users/6142/screenshots/5679189/media/1b96ad1f07feee81fa83c877a1e350ce.png?compress=1&resize=400x300&vertical=top'} alt="user profile picture" className='img-fluid  rounded-circle' />
                </Container> */}
                <Table responsive striped hover bordered={true} className='text-center mt-5'>
                    <tbody>
                        
                        <tr>
                            <td >
                                USER NAME
                            </td>
                            <td>
                                {data.username}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                USER EMAIL
                            </td>
                            <td>
                                {data.email}
                            </td>
                        </tr>
                        <tr>
                            <td >
                                ABOUT
                            </td>
                            <td>
                                {data.description}
                            </td>

                        </tr>
                       
                    </tbody>
                </Table>

                

                

            </CardBody>

          
        </Card>

        <div className='container'>
        <Button onClick={handleLogout}   className="info ms-2 my-4"  type="button" outline>
                        Logout
                      </Button>
        </div>

        </>



    )
}
