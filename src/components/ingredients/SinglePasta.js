import React, {useEffect, useState} from 'react';
import {getPasta} from "../../Api";
import "../All.css";

const SinglePasta = (props) => {
    const [pasta, setPasta] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(async () => {
        let result = await getPasta();
        setPasta(result);
    }, [])

    return (
        <div className='description'>
            {pasta.filter(pasta => pasta.number === slug).map(pasta => {
            return(<div key={slug}>{pasta.description}</div>)
            })}
        </div>
    )
}

export default SinglePasta;