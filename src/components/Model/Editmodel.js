import { useState } from "react";
import { Button, Modal, Form } from "react-bootstrap";

const Editmodel = ({ show, setShow}) => {

        const [firstName, setFirstName] = useState('');
        const [lastName, setLastName] = useState('');
        const [email, setEmail] = useState('');
        const [password, setPassword] = useState('');


        function handleUpdate () {
            
        }

    return (

        <>
        
        <Modal show={show} centered size="lg">

                <Modal.Header >
                    <Modal.Title> You can edit existing user details </Modal.Title>
                </Modal.Header>
                <Modal.Body>

                    <Form className="add-form">

                        <Form.Group className="mb-3 " controlId="firstName">
                            <Form.Label style={{ margin: "10px", float: "left", fontStyle: "initial", color: "darkblack" }}>First Name:</Form.Label>
                            <Form.Control type="text" name="firstname" placeholder="Enter first name" value={firstName} onChange={(e)=>setFirstName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="lastName">
                            <Form.Label style={{ margin: "10px", float: "left", fontStyle: "initial", color: "darkblack" }}>Last Name:</Form.Label>
                            <Form.Control type="text" name="lastname" placeholder="Enter last name" value={lastName} onChange={(e)=>setLastName(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="emailid">
                            <Form.Label style={{ margin: "10px", float: "left", fontStyle: "initial", color: "darkblack" }}>Email ID:</Form.Label>
                            <Form.Control type="email" name="emailid" placeholder="Enter email id" value={email} onChange={(e)=>setEmail(e.target.value)} />
                        </Form.Group>

                        <Form.Group className="mb-3" controlId="password">
                            <Form.Label style={{ margin: "10px", float: "left", fontStyle: "initial", color: "darkblack" }}>Password:</Form.Label>
                            <Form.Control type="text" name="password" placeholder="Enter password" value={password} onChange={(e)=>setPassword(e.target.value)} />
                        </Form.Group>

                    </Form>




                </Modal.Body>

                <Modal.Footer>
                    <Button variant="primary"  onClick={()=> handleUpdate}> Save changes </Button>
                    <Button variant="secondary" onClick={() => setShow(false)}> Cancel </Button>

                </Modal.Footer>


            </Modal>

        
        </>
    );
}

export default Editmodel;