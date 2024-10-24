import axios from 'axios';

const apiKey = '62eec9b928f6438d94fa0c9855ad6cbf'; 


export const getRecipes = async (param, offset) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${param}&offset=${offset}&diet=vegetarian&number=5&apiKey=${apiKey}`);
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getRecipeInfo = async (param) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/${param}/information?apiKey=${apiKey}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}

export const getAllRecipes = async (param) => {
    try {
        const response = await axios.get(`https://api.spoonacular.com/recipes/complexSearch?query=${param}&diet=vegetarian&apiKey=${apiKey}`)
        return response;
    } catch (error) {
        console.log(error)
    }
}