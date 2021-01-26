import React, {useEffect, useState} from 'react';
import {getGroats} from "../../Api";
import "../All.css";

const SingleGroat = (props) => {
    const [groats, setGroats] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(async () => {
        let result = await getGroats();
        setGroats(result);
    }, [])

    return (
        <div>
            {groats.filter(groat => groat.number === slug).map(groat => {
                return (<div className='description' key={slug}>{groat.description}</div>)
            })}
        </div>
    )
}

export default SingleGroat;