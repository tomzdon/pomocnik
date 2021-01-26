import React, {useEffect, useState} from 'react';
import {getRecipes} from "../../Api";
import "../All.css";

const SingleRecipe = (props) => {
    const [recipes, setRecipes] = useState([]);
    let slug = parseInt(props.match.params.slug);

    useEffect(() => {
        async function fetchData() {
            let result = await getRecipes();
            setRecipes(result);
        }
        fetchData().then();
    }, [])

    return (
        <div className='description'>
            {recipes.filter(recipe => recipe.number === slug).map(recipe => {
                return (<div key={slug}>{recipe.description}</div>)
            })}
        </div>
    )
}

export default SingleRecipe;