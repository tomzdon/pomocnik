import React, {useEffect, useState} from "react";
import {getVarious} from '../../Api';
import {Link} from "react-router-dom";
import How from "../How";


const Various = () => {
    const [various, setVarious] = useState([]);

    useEffect(async () => {
        let result = await getVarious();
        setVarious(result);
    }, [])

    return (
        <>
            <How/>
            <ul>
                {various.map((data, index) => (<Link key={index} to={"/funkcje/jak/inne/" + data.number}>
                    <li>{data.name}</li>
                </Link>))}
            </ul>
        </>
    )
}

export default Various