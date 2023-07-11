import { Container, Row, Col } from 'react-bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import './App.css';
import Contacts from './Components/Contacts';
import React from 'react';
import AddContactsForm from './Components/AddContactsForm';

function App(){
  // constructor(props){
  //   super(props);
  //   this.state = {
  //     contacts: [
  //       {
  //         name: "Mandelson Afari",
  //         location: "Assemblies, Agbogba",
  //         number: "0506656930",
  //         id:"12765jfbbvd8"
  //       },
  //       {
  //         name: "Abla Shika",
  //         location: "American House, East Legon",
  //         number: "0547821234",
  //         id:"345628ubcvsg8"
  //       },
  //       {
  //         name: "Ahmed Zaky",
  //         location: "Volta Region, Ho",
  //         number: "0205674326",
  //         id:"3e673ujgvfjvb"
  //       }
  //     ]
  //   }
  // }
  // addNewUser = (user) => {
  //   user.id = Math.random().toString()
  //   this.setState({
  //     contacts: [...this.state.contacts, user]
  //   })
  // }

  // deleteUser = (id) => {
  //     let undeletedUsers = this.state.contacts.filter(user => user.id !== id)
  //     this.setState({
  //       contacts: undeletedUsers
  //     })
  // }

  // editUser = (id, updatedUser) => {
  //  this.setState({
  //   contacts: this.state.contacts.map(user => user.id === id ? updatedUser : user)
  //  })
  // }


 
    return (
      <>
        <Container fluid style={{marginTop: "2rem"}}>
          <Row>
            <Col md="4">
              <h4>Add Contacts</h4>
              <br/>
              <AddContactsForm  />
            </Col>
            <Col>
            <h4>All Codetrain Contacts</h4>
            <br />
              <Contacts />
            </Col>
          </Row>
        </Container>
      </>
    );
  
}

export default App;
