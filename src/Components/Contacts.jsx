import React from 'react';
import { Container, Row } from 'react-bootstrap';
import Contact from './Contact';
import { useSelector } from 'react-redux';


const Contacts = () => {

    const usersData = useSelector(store => store.contactReducer.contacts) 
   
    return (
        <Container>
            <Row>
                {
                    usersData.map((user) => {
                        return (
                        <Contact 
                        key={user.id}
                        userInfo={user} 
                       // deleteUser={props.deleteUser} 
                       // editUser={props.editUser} 
                        />)
                    })
                }
            </Row>
        </Container>
    );
}

export default Contacts;
