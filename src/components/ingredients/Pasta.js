import React, {useEffect, useState} from "react";
import {getPasta} from '../../Api';
import {Link} from "react-router-dom";
import How from "../How";

const Pasta = () => {
    const [pasta, setPasta] = useState([]);

    useEffect(async () => {
        let result = await getPasta();
        setPasta(result);
    }, [])

    return (
        <>
            <How />
            <ul>
                {pasta.map((data, index) => (<Link key={index} to={"/funkcje/jak/makarony/" + data.number}>
                    <li>{data.name}</li>
                </Link>))}
            </ul>
        </>
    )
}

export default Pasta