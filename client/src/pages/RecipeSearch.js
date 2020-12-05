import {Link} from 'react-router-dom'
import React, {useState, useEffect} from 'react'
const unirest = require('unirest')



let url = 'https://api.spoonacular.com/recipes/complexSearch?apiKey=52c69d8eadd2410980a48caddf20c5ba&query=burgers&number=1&instructionsRequired=true&addRecipeInformation=true'

const RecipeSearch = (props) => {
  
//  const fetchRecipes = () => {
//    fetch('http://localhost:3000/')
//  }
 
 
// https://api.spoonacular.com/recipes/complexSearch?apiKey=52c69d8eadd2410980a48caddf20c5ba&=includeIngredients&query=chi

  
  
  
  let key = process.env.REACT_APP_SPOONACULAR_API_KEY
  // const urlRequest = `https://spoonacular.com/recipes/complexSearch?apiKey=${key}&includeIngredients&query=burgers`

  // fetch(url)
  //  .then((response) => response.json(results))
  //  .then(results)
  // console.log('results', results)
const displayResults = () => {
  
fetch(url)
.then((response) => response.json())
.then((data) =>  console.log('results:','Analyzed Instructions:', data.results[0].analyzedInstructions[0].steps))

 //let recipeInfo = data.results[0].analyzedInstructions[0].steps[1];




}  
 displayResults()


   return(
    <h1>Recpie Guide</h1>
    
  )
}


export default RecipeSearch;