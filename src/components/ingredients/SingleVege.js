import React, {useEffect, useState} from 'react';
import {getVegetables} from "../../Api";
import "../All.css";

const SingleVege = (props) => {
    const [vegetables, setVegetables] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(async () => {
        let result = await getVegetables();
        setVegetables(result);
    }, [])

    return (
        <div>
            {vegetables.filter(vege => vege.number === slug).map(vege => {
            return (<div className='description' key={slug}>{vege.description}</div>)
        })}
        </div>
    )
}

export default SingleVege;