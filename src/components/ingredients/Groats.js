import React, {useState, useEffect} from 'react';
import {getGroats} from '../../Api';
import {Link} from "react-router-dom";
import How from "../How";
import "../All.css";

const Groats = () => {
    const [groats, setGroats] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await getGroats();
            setGroats(result);
        }
        fetchData();
    },[])

    return (
        <div>
            <How/>
            <ul>
                {groats && groats.map((data, index) => (<Link key={index} to={"/funkcje/jak/kasze/" + data.number}>
                    <li>{data.name}</li>
                </Link>))}
            </ul>
        </div>
    )
}

export default Groats