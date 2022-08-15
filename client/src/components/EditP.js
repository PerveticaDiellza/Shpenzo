import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Form from 'react-bootstrap/Form';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import Button from 'react-bootstrap/Button';
import './Style.css';

const EditP = () => {

    const { id } = useParams();
    const [pName, setPName] = useState("");
    const [pType, setPType] = useState("");
    const [pDescription, setPDescription] = useState("");
    const [pItemOne, setPItemOne] = useState("");
    const [pItemTwo, setPItemTwo] = useState("");
    const [pItemThree, setPItemThree] = useState("");
    const [pItemFour, setPItemFour] = useState("");
    const [pItemFive, setPItemFive] = useState("");
    const [pItemSix, setPItemSix] = useState("");

    const [errors, setErrors] = useState({});
    const navigate = useNavigate();

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trip/p/${id}`)

            .then((response) => {
                console.log(response.data);
                setPName(response.data.pName);
                setPType(response.data.pType);
                setPDescription(response.data.pDescription);
                setPItemOne(response.data.pItemOne);
                setPItemTwo(response.data.pItemTwo);
                setPItemThree(response.data.pItemThree);
            })
            .catch((err) => {
                console.log(err);
                navigate("/error");
            });
    }, [id, navigate]);

    const onUpdateHandler = (e) => {
        e.preventDefault();
        const putUpdateData = {
            // pName,
            // pType,
            // pDescription,
            pItemOne,
            pItemTwo,
            pItemThree,
            pItemFour,
            pItemFive,
            pItemSix
        }
        axios.put(`http://localhost:8000/api/trip/p/${id}`, putUpdateData)
            .then((response) => {
                console.log(response.data);
                navigate(`/trip/p/${response.data._id}`);
            }).catch((err) => {
                console.log(err);
                setErrors(err.response.data.errors);
            })
    };

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
            <Row>
                <Col lg={15} className="mx-auto my-2 text-start">
                    <h3 style={{ color:"white", fontFamily:"monospace"}}>Update the spendigs of <b><i>{pName}</i></b></h3>
                </Col>
            </Row>
            
            <Col lg={15} className="mx-auto my-3">
            <Form onSubmit={onUpdateHandler}>
                <Col lg={12} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formName">
                <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"25px"}}>Friend Name: *</Form.Label>
                    <Form.Control 
                        type="text"
                        // onChange={(e) => setPName(e.target.value)}
                        name="pName"
                        value={pName}
                    />
                    {errors.pName ? <span>{errors.pName.message}</span> : null}
                </Form.Group>
                </Col>
                <Col lg={12} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formType">
                <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"25px"}} >Purchase: *</Form.Label>
                    <Form.Control 
                        type="text"
                        // onChange={(e) => setPType(e.target.value)}
                        name="pType"
                        value={pType}
                    />
                    {errors.pType ? <span>{errors.pType.message}</span> : null}
                </Form.Group>
                </Col>
                <Col lg={12} className="mx-auto">
                <Form.Group className="my-2 py-2 text-start" controlId="formDescription">
                <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"25px"}}>Reason: *</Form.Label>
                    <Form.Control 
                        as="textarea"
                        style={{height: '4rem'}}
                        // onChange={(e) => setPDescription(e.target.value)}
                        name="pDescription"
                        value={pDescription}
                    />
                    {errors.pDescription ? <span>{errors.pDescription.message}</span> : null}
                </Form.Group>
                </Col>
                <Row>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formItemOne">
                <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"20px"}}>Item:</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPItemOne(e.target.value)}
                        name="pItemOne"
                        value={pItemOne}
                    />
                </Form.Group>
                </Col>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formItemTwo">
                <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"20px"}}>Item:</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPItemTwo(e.target.value)}
                        name="pItemTwo"
                        value={pItemTwo}
                    />
                </Form.Group>
                </Col>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formItemThree">
                <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"20px"}}>Item:</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPItemThree(e.target.value)}
                        name="pItemThree"
                        value={pItemThree}
                    />
                </Form.Group>
                </Col>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formItemFour">
                    <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"20px"}}>Item:</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPItemFour(e.target.value)}
                        name="pItemFour"
                        value={pItemFour}
                    />
                </Form.Group>
                </Col>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formItemFive">
                    <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"20px"}}>Item:</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPItemFive(e.target.value)}
                        name="pItemFour"
                        value={pItemFive}
                    />
                </Form.Group>
                </Col>
                <Col lg={4} className="mx-auto">
                <Form.Group className="my-2 py-2 text-center" controlId="formItemSix">
                    <Form.Label style={{ color:"white", fontFamily:"monospace", fontSize:"20px"}}>Item:</Form.Label>
                    <Form.Control 
                        type="text"
                        onChange={(e) => setPItemSix(e.target.value)}
                        name="pItemSix"
                        value={pItemSix}
                    />
                </Form.Group>
                </Col>
                <Form.Label>* - unchangeable </Form.Label>
                </Row>
                <Col className="text-start"><button type="submit" className='update' style={{ width:"150px", height:"80px"}} >Update</button></Col>
            </Form>
            </Col>
        </Container>
    )

}

export default EditP;