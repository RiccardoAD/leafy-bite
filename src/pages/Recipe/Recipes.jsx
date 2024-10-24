import React from 'react';
import { useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import  Navbar from '../../components/Navbar/Navbar';
import { getRecipeInfo } from "../../api";
import './Recipe.css';

function Recipe() {

    let params = useParams();
    let searchValue = params.name;
    const [details, setDetails] = useState({});
    const [isLoading, setLoading] = useState(true);

    useEffect(() => {
        getRecipeInfo(searchValue)
        .then((response) => {
            setDetails(response.data);
            setLoading(false)
        })
    }, [searchValue]);

    let diet; 
    if (details.vegan) {
        diet = "Vegan";
    } else if (details.vegetarian) {
        diet = "Vegetarian";
    } else { 
        diet = "";
    }

    if(isLoading) {
        return <div className='loading'>Loading...</div>;
    }

    return (
        <div>
            <Navbar />
            <div className='recipe-container' key={details.id}>

                <h2>{details.title}</h2>

                <div className='tag-container'>{details.diets.map((item) => (
                    <p key={item.id}>{item}</p>
                ))}</div>

                <div className='gray-container'>
                    {diet && <p className='label'>{diet}</p> }
                    <img src={details.image} alt="immagine" />

                    <div className='all-info'>

                        <div className='recipe-info'>
                            <p><span>Time</span> {details.readyInMinutes} <span>min</span></p>
                            <p><span>Servings</span> {details.servings}</p>
                        </div>

                        <div className='ingredients'>
                            <h3>Ingredients</h3>
                            <ul>
                                {details.extendedIngredients.map((ingredients) => (
                                    <li key={ingredients.id}>{ingredients.original}</li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>

                <p dangerouslySetInnerHTML={{ __html: details.summary }}></p>

                <div className='instructions'>
                <h3>Instructions</h3>
                        {details.analyzedInstructions.map(el => {
                            return el.steps.map(step => {
                                return (
                                    <div className='instructions-container'>
                                        <div className='number-cnt'>
                                            <p className='number'>{step.number}</p>
                                        </div>
                                        <p key={step.number}>{step.step}</p>
                                    </div>
                                )
                            })
                        })}
                </div>
            </div>
        </div>
    )
}

export default Recipe
