import { useEffect } from "react";
import { useState } from "react";
import Recipe from "../Recipe/Recipe";


const Recipes = ({handleWantToCook}) => {

    const [recipes, setRecipes] = useState([]);

    useEffect(()=>{
        fetch("/public/recipes.json")
        .then(res=> res.json())
        .then(data=> setRecipes(data))
    },[])

    return (
        <div className="col-span-2 p-4">
            <div className="grid grid-cols-2 gap-14 pb-10">
                {
                   recipes.map((data)=> <Recipe key={data.recipe_id} handleWantToCook={handleWantToCook} recipe={data} />) 
                }
            </div>
        </div>
    );
};

export default Recipes;