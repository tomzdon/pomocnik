import React, {useEffect, useState} from 'react';
import {getVarious} from "../../Api";
import "../All.css";

const SingleVarious = (props) => {
    const [various, setVarious] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(async () => {
        let result = await getVarious();
        setVarious(result);
    }, [])

    return (
        <div className='description'>
            {various.filter(various => various.number === slug).map(various => {
            return (<div key={slug}>{various.description}</div>)
        })}
        </div>
    )
}

export default SingleVarious;