import React from 'react';
import {Link } from 'react-router-dom';
import Button from 'react-bootstrap/Button';



const Functions = () => (
    <div>
            <Link to="/funkcje/znajdz"> <Button variant="primary">Znajdź przepis</Button></Link>
            <Link to="/funkcje/jak"> <Button variant="primary">Jak ugotować</Button></Link>

    </div>
)

export default Functions