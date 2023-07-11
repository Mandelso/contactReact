import React, {useState} from 'react';
import { Card, Button, Col, Modal } from "react-bootstrap";
import EditContactsForm from './EditContactsForm';
import { deleteUser } from '../reducer/contactReducer';
import { useDispatch } from 'react-redux';

const Contact = ({userInfo}) => {
    const [show, setShow] = useState(false);

    const dispatch = useDispatch()

    const handleClose = () => setShow(false);
    const handleShow = () => setShow(true);  
    const handleDelete = (id) => {
        dispatch(deleteUser(id))
    }
    return (
        <>
            <Modal show={show} onHide={handleClose}>
                <Modal.Header closeButton>
                    <Modal.Title>Edit Contact</Modal.Title>
                </Modal.Header>
                <Modal.Body>
                    <EditContactsForm 
                    userInfo={userInfo} 
                    //editUser={props.editUser} 
                    closeModal={handleClose} />
                </Modal.Body>
            </Modal>

            <Col md="4" style={{ marginBottom: "1rem" }}>
                <Card>
                    <Card.Body>
                        <Card.Subtitle className="mb-2 text-muted">Codetrain Contact</Card.Subtitle>
                        <Card.Title>{userInfo.name}</Card.Title>
                        <Card.Text>
                            <p>Location: {userInfo.location}</p>
                            <p>Number: {userInfo.number}</p>
                        </Card.Text>
                        <Button variant="primary" size='sm'  onClick={handleShow}>Edit</Button>
                        <Button variant="danger" size='sm' onClick={() => handleDelete(userInfo.id)}>Delete</Button>
                    </Card.Body>
                </Card>
            </Col>
        </>
    );
}

export default Contact;
