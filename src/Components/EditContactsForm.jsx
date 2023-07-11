import React, {useState} from 'react';
import { Form, Button } from "react-bootstrap";
import { editUser } from '../reducer/contactReducer';
import { useDispatch } from 'react-redux';

const EditContactsForm  = ({userInfo, closeModal}) => {
    const [name, setName] = useState(userInfo.name)
    const [location, setLocation] = useState(userInfo.location)
    const [number, setNumber] = useState(userInfo.number)
   
    const dispatch = useDispatch()
    
    const handleSubmit = (e) => {
        e.preventDefault();
        const editeduser = {id: userInfo.id, name, location, number}
        dispatch(editUser(editeduser))
       closeModal();
    }

   
        return (
            <>
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
            </>
        );
    
}

export default EditContactsForm;
