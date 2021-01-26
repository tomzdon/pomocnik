import React from "react";
import {Link, } from "react-router-dom";
import Button from "react-bootstrap/Button";
import './All.css';

const How = () => {
    return (
        <div className='seekbutton'>
            <h1> Co chcesz ugotować? </h1>

            <Link to="/funkcje/jak/warzywa"> <Button variant="success">Warzywa</Button></Link>
            <Link to="/funkcje/jak/makarony"> <Button variant="success">Makarony</Button></Link>
            <Link to="/funkcje/jak/inne"> <Button variant="success">Inne</Button></Link>
            <Link to="/funkcje/jak/kasze"> <Button variant="success">Kasze</Button></Link>
        </div>

    )
}
export default How;