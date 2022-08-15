import React from 'react';
import axios from 'axios';
import {useEffect, useState} from 'react';
import { Link } from 'react-router-dom';
import Container from 'react-bootstrap/Container';
import './Style.css';

const Trip = () => {
    const [pTrip, setPTrip] = useState("");
    const [allP, setAllP] = useState([]);
    useEffect(() => {
        axios.get("http://localhost:8000/api/trip")
            .then((response) => {
                console.log(response.data);
                setAllP(response.data);
            })
            .catch((err) => {
                console.log(err);
            })
    }, []);

        return(
            <Container><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/><br/>
                <h1 style={{color:"white", fontFamily:"monospace "}} >Track how much your friends and you are spending during trips with - Shpenzo -</h1><br/><br/><br/><br/>
                <Link to={`/trip/p`}>
                <button style={{
                    height: "100px", 
                    width: "230px", 
                    fontSize:"30px", 
                    fontFamily:"fantasy", 
                    borderRadius:"35%", 
                    borderStyle:"dotted",
                    borderColor:"#667292"
                }} 
            type="button">New York City</button>
                </Link><br/><br/>
                <Link to={`/trip/p/f`}>
                <button style={{
                    height: "100px", 
                    width: "230px", 
                    fontSize:"30px", 
                    fontFamily:"fantasy", 
                    borderRadius:"35%", 
                    borderStyle:"dotted",
                    borderColor:"#667292"
                }} 
            type="button">+ Add Trip</button>
                </Link>
            </Container>
        )
}
export default Trip;
