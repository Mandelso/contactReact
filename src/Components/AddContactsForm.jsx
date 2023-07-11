import React, {useState} from 'react';
import {Form, Button} from "react-bootstrap";
import {v4 as uuid} from "uuid"
import { useDispatch, useSelector } from 'react-redux';
import { addUser } from '../reducer/contactReducer';

const  AddContactsForm = () => {
        const [name, setName] = useState("")
        const [location, setLocation] = useState("")
        const [number, setNumber] = useState("")

        const dispatch = useDispatch()
        const contacts = useSelector(store => store.contactReducer.contacts)
        console.log(contacts)

        const handleSubmit = (e) => {
            e.preventDefault()
            const newContact = {id: uuid(), name, location, number}
            dispatch(addUser(newContact))
            setName("")
            setLocation("")
            setNumber("")
        }

        return (
            <Form onSubmit={handleSubmit}>
                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Full name</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Full name"
                    value={name}  
                    name="name"
                    onChange={(e) => setName(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Location</Form.Label>
                    <Form.Control 
                    type="text" 
                    placeholder="Location" 
                    value={location}
                    name="location" 
                    onChange={(e) => setLocation(e.target.value)} />
                </Form.Group>

                <Form.Group className="mb-3" controlId="formBasicEmail">
                    <Form.Label>Phone Number</Form.Label>
                    <Form.Control 
                    type="number" 
                    placeholder="Phone number" 
                    value={number}
                    name="number" 
                    onChange={(e) => setNumber(e.target.value)} />
                </Form.Group>


                <Button variant="primary" type="submit">
                    Submit
                </Button>
            </Form>
        );
    
}

export default AddContactsForm;
