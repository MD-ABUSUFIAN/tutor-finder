import axios from 'axios';
import React, { useState, useEffect } from 'react';
import { Container, Table, Button } from 'react-bootstrap';

const AllUsers = () => {
    const [users, setUsers] = useState([]);
    const [loading, setLoading] = useState(false);

    useEffect(() => {
        axios.get('http://localhost:5000/users')
            .then(res => setUsers(res.data))
            .then(() => setLoading(false))
            .catch(err => console.log(err))
    }, [])
    return (
        <Container fluid>
            <Table hover responsive className="product-table">
                <thead className="border-top">
                    <tr>
                        <th>#</th>
                        <th>Name</th>
                        <th>Email</th>
                        <th>Role</th>
                        <th colSpan="2">Action</th>
                    </tr>
                </thead>
                <tbody>
                    {
                        users.map((user, index) => {
                            return (
                                <tr>
                                    <td>{index + 1}</td>
                                    <td>{user.displayName}</td>
                                    <td>{user.email}</td>
                                    <td>{user.role || 'student'}</td>
                                    {/* <td><span className={!user.status ? "text-warning fw-bold" : "text-success fw-bold"}>{!product.status ? "Pending" : "Approved"}</span></td> */}
                                    <td
                                        // onClick={() => handleUpdateStatus(product._id)}
                                        style={{ cursor: 'pointer' }}
                                    ><Button variant='danger'>Admin</Button></td>
                                    <td
                                        // onClick={() => handleDeleteOrder(product._id)}
                                        style={{ cursor: 'pointer' }}
                                    ><Button variant='warning'>Teacher</Button></td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </Table>
        </Container>
    );
};

export default AllUsers;