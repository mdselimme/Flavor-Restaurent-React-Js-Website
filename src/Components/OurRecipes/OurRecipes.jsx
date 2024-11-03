import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import Recipes from "../Recipes/Recipes";


const OurRecipes = () => {

    const [wantCook, setWantCook] = useState([]);

    const handleWantToCook = (recipe) =>{
        const newWantCook = [...wantCook, recipe];
        setWantCook(newWantCook);
    };

    return (
        <div className="container mx-auto">
            <div className="text-center pt-24 pb-16">
                <h1 className="text-4xl font-semibold text-[#150B2B] mb-6">Our Recipes</h1>
                <p className="text-base font-normal text-[#150B2B99] leading-[1.6rem]">Indulge in our chef's culinary creations. From classic favorites to innovative dishes, our restaurant's <br /> recipes are a symphony of flavors, expertly crafted to tantalize your taste buds.</p>  
            </div>
            <div className="grid grid-cols-3 justify-between">
                <Recipes handleWantToCook={handleWantToCook} />
                <OrderDetails />
            </div>
        </div>
    );
};

export default OurRecipes;