import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { Link } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Table from 'react-bootstrap/Table';
import './Style.css';

const AllP = () => {
    
    const [allP, setAllP] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/trip/p")
            .then((response) => {
                console.log(response.data);
                setAllP(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

    return (
        <Container><br/>
        <header className="header">
                <NavLink className="navbar" to="/trip" 
                style={{backgroundColor:"#618685", borderRadius:"70%"}}>
                    Trips
                </NavLink>
                <NavLink className="navbar" to="/trip/p" 
                style={{backgroundColor:"#618685", borderRadius:"70%"}}>
                    Spendings
                </NavLink>

                <NavLink className="navbar" to="/trip/p/new" 
                style={{backgroundColor:"#618685", borderRadius:"70%"}}>
                    Purchase
                </NavLink>
        </header> <br/><br/><br/>
            <Row>
                <Col className="text-start">
                    <h1 style={{ color:"white", fontFamily:"fantasy"}}> Shpenzo</h1>
                </Col>
            </Row>
            <Row className="my-2 text-start">
                <h3 style={{ color:"white"}}>All of the spendings made on the <b>New York City</b> trip:</h3>
            </Row>
            <Table >
                <thead>
                    <tr>
                        <th style={{color:"white", fontFamily:"monospace ", fontSize:"25px"}} >Friend</th>
                        <th style={{color:"white", fontFamily:"monospace ", fontSize:"25px"}} >Purchase</th>
                        <th style={{color:"white", fontFamily:"monospace ", fontSize:"25px"}} >Reason</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {allP.map((p, index) => (
                        <tr key={index}>
                            <td style={{color:"white", fontFamily:"monospace ", fontSize:"20px"}}>{p.pName}</td>
                            <td style={{color:"white", fontFamily:"monospace ", fontSize:"20px"}}>{p.pType}</td>
                            <td style={{color:"white", fontFamily:"monospace ", fontSize:"20px"}}>{p.pDescription}</td>
                            <td>
                                <Link to={`/trip/p/${p._id}`}>
                                    <button type="button" className='payback'>Pay back</button>
                                    </Link>
                                <Link to={`/trip/p/edit/${p._id}`}>
                                    <button type="button" className='update'>Update</button>
                                    </Link>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </Table>

        </Container>
    )

}

export default AllP;