import React from 'react';
import {Button} from './Button.jsx';

class Testing extends React.Component {
  constructor (props) ::
    super(props)
    this.state = {
    value: "add",
    };	
	render() {
	    return (
	    <div>
	    	<div className="five columns">            
		    	<label for="recipeTime">Ingredients</label>
	        <input className="two columns recipeInput" placeholder="#" id="ingredientNum"/>
	        <input className="ten columns recipeInput" type="title" placeholder="Ingredient" id="ingredient"/>
        </div>
	    	<div className="oneAndOneHalf columns">            
		    	<label for="carbs">Net Carbs</label>
	        <input className="u-full-width recipeInput" placeholder="(g)" id="ingredientNum"/>
        </div>
	    	<div className="oneAndOneHalf columns">            
		    	<label for="Protein">Protein</label>
	        <input className="u-full-width recipeInput" placeholder="(g)" id="ingredientNum"/>
        </div>
	    	<div className="oneAndOneHalf columns">            
		    	<label for="Fat">Fat</label>
	        <input className="u-full-width recipeInput" placeholder="(g)" id="ingredientNum"/>
        </div>
	    	<div className="oneAndOneHalf columns">            
		    	<label for="Calories">Cal</label>
	        <input className="u-full-width recipeInput" placeholder="kcal" id="ingredientNum"/>
        </div>                           
      </div>          
      );           
	}    
}    

export default Testing;