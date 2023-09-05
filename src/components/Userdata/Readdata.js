import React, { useEffect, useState } from 'react';
import { User_details } from '../User_data';
import { Button, Table } from 'react-bootstrap';
import Privatelayout from '../Layout/Privatelayout';
import Page from './Page';
import AddModel from '../Model/Addmodel';
import { handleDelete, getUserdata } from '../Services/Auth';


const Readdata = () => {

    const [show, setShow] = useState(false);
    const [user_details, setUser_details] = useState(User_details);

    useEffect(() => {
   
        getUserdata().then((res) => {            
                setUser_details(res);
        });
    },[]);

    function goDelete(selectedId) {
        handleDelete(selectedId, user_details, setUser_details);      
    }

    return (
        <Privatelayout>
            <Button className='add-button' onClick={() => setShow(true)}>Add data</Button>
            <h1 className='h1-table'>List of User Details</h1>
            <div>
                <Table striped className='table'>
                    <thead>
                        <tr>
                            <th>No.</th>
                            <th>First Name</th>
                            <th>Last Name</th>
                            <th>Email Id</th>
                            <th>Password</th>
                            <th>Actions</th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            user_details.length < 1 ? <h3 style={{ float: "right" }}> No user data </h3> : (
                                user_details.map((user) => {

                                    return (
                                        <tr>
                                            <td>{user.id}</td>
                                            <td>{user.firstName}</td>
                                            <td>{user.lastName}</td>
                                            <td>{user.email}</td>
                                            <td>{user.password}</td>
                                            <td><Button className="edit-icon" > <i class="fa fa-pencil"> </i></Button>
                                                <Button className="delete-icon" onClick={() => goDelete(user.id)}><i class="fa fa-trash"></i></Button></td>
                                        </tr>
                                    );
                                })
                            )}

                    </tbody>


                </Table>
            </div>


            <Page />
            { show && <AddModel user_details={user_details} setUser_details={setUser_details} show={show} setShow={setShow} />}

        </Privatelayout>

    );
}

export default Readdata;