import React, {useState, useEffect} from 'react'
import {getRecipes} from '../../Api'
import {Link} from "react-router-dom";


const RecipesAll = (props) => {
    const [recipes, setRecipes] = useState([]);

    useEffect(() => {
        async function fetchData() {
            let result = await getRecipes();
            setRecipes(result);
        }

        fetchData().then();
    }, [])

    return (
        <>
            <ul>
                {recipes && recipes.map((data, index) => (
                    <Link key={index} to={"/funkcje/znajdz/przepisy/" + data.number}>
                        <li>{data.name}</li>
                    </Link>))}
            </ul>
        </>
    )
}

export default RecipesAll