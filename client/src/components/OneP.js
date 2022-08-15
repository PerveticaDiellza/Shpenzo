import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useParams, Link, useNavigate} from 'react-router-dom';
import { NavLink } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import './Style.css';

const OneP = () => {

    const [pName, setPName] = useState("");
    const [allP, setAllP] = useState([]);
    const { id } = useParams();
    const [p, setP] = useState({});
    const navigate = useNavigate();
    const [pItemOne, setPItemOne] = useState("");
    const [pItemTwo, setPItemTwo] = useState("");
    const [pItemThree, setPItemThree] = useState("");
    const [pItemFour, setPItemFour] = useState("");
    const [pItemFive, setPItemFive] = useState("");
    const [pItemSix, setPItemSix] = useState("");

    useEffect(() => {
        axios.get(`http://localhost:8000/api/trip/p/${id}`)
            .then((response) => {
                console.log(response.data);
                setP(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, [id])

    const onPayHandler = (id) => {
        axios.delete(`http://localhost:8000/api/trip/p/${id}`)
            .then((response) => {
                console.log(response.data);
                setAllP(allP.filter((p) => p._id !== id));
                navigate("/trip/p")
            })
            .catch((err) => {
                console.log(err);
            })
    }
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
            </header> <br/><br/>
            <Row className="my-3">
                <Col className="text-start">
                <h1 style={{ color:"white", fontFamily:"fantasy"}}> Shpenzo</h1>
                </Col>
            </Row>
            <Row className="my-3 py-2">
                <Col className="text-start">
                    <h3 className="my-2" style={{ color:"white"}} >{p.pName} has been spending on the <b><i>New York City</i></b> trip:</h3>
                </Col>
                </Row>
            <Row className="border">
                <Row className="text-start">
                    <Col lg={4}>
                        <p className="fw-bold" style={{ color:"white", fontFamily:"monospace", fontSize:"25px"}} >Purchase:</p>
                    </Col>
                    <Col lg={4}>
                        <p style={{ color:"#50394c",height: "20px", fontFamily:"monospace"}}>{ p.pType }</p>
                    </Col>
                </Row>
                <Row className="text-start">
                    <Col lg={4}>
                        <p className="fw-bold" style={{ color:"white", fontFamily:"monospace", fontSize:"25px"}} >Reasons:</p>
                    </Col>
                    <Col lg={4}>
                        <p style={{ color:"#50394c",height: "20px", fontFamily:"monospace"}} >{ p.pDescription }</p>
                    </Col>
                </Row>
                <Row className="text-start">
                    <Col lg={4}>
                        <p className="fw-bold" style={{ color:"white", fontFamily:"monospace", fontSize:"25px"}} >Amounts:</p>
                    </Col>
                    <Col lg={4}>
                        <p style={{ color:"#50394c",height: "20px", fontFamily:"monospace"}} >{ p.pItemOne } $</p>
                        <p style={{ color:"#50394c",height: "20px", fontFamily:"monospace"}} > { p.pItemTwo } $</p>
                        <p style={{ color:"#50394c",height: "20px", fontFamily:"monospace"}} > { p.pItemThree } $</p>
                        <p style={{ color:"#50394c",height: "20px", fontFamily:"monospace"}} > { p.pItemFour } $</p>
                        <p style={{ color:"#50394c",height: "20px", fontFamily:"monospace"}} > { p.pItemFive } $</p>
                        <p style={{ color:"#50394c",height: "20px", fontFamily:"monospace"}} > { p.pItemSix } $</p>
                    </Col>
                </Row>
            </Row><br/><br/>
            <Col className="text-start">
                    <button type="submit" className='payback' style={{ width:"150px", height:"80px"}} onClick={(e) => onPayHandler(id)} >Pay Back</button>
                </Col>
        </Container>
    )
}

export default OneP;



//