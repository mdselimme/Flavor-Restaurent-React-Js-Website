import { useState } from "react";
import OrderDetails from "../OrderDetails/OrderDetails";
import Recipes from "../Recipes/Recipes";
import toast, { Toaster } from "react-hot-toast";
import { CgKey } from "react-icons/cg";


const OurRecipes = () => {

    const [wantCook, setWantCook] = useState([]);
    const [currentCooking, setCurrentCooking] = useState([]);
    const [time, setTime] = useState(0);
    const [calories, setCalories] = useState(0);

    const handleWantToCook = (recipe) =>{
        const findData = wantCook.find((data)=> data.recipe_id === recipe.recipe_id);
        if(findData){
            notifyDucplicateToaster();
        }
        else{
            const newWantCook = [...wantCook, recipe];
            setWantCook(newWantCook);
        }
    };

    const notifyDucplicateToaster = () => toast.error("This Item Already Exits", {
        duration: 2000
    }) ;

    const notifyCookedToaster = (message) => toast.success(message, {
        duration: 2000
    }) ;

    const handleCurrentlyCooking = (data) => {
        const newCurrentCooking = [...currentCooking, data];
        setCurrentCooking(newCurrentCooking);
        const wantCookRemove = wantCook.filter((ele)=> ele.recipe_id !== data.recipe_id);
        setWantCook(wantCookRemove);
        const totalPrepereTime = time + data.preparing_time;
        setTime(totalPrepereTime);
        const totalCalories = calories + data.calories;
        setCalories(totalCalories);
        notifyCookedToaster("Item Add For Cooking");
    };

    const handleCookDone = (data) => {
        const currCookRemove = currentCooking.filter((ele)=> ele.recipe_id !== data.recipe_id);
        setCurrentCooking(currCookRemove);
        const totalPrepereTime = time - data.preparing_time;
        setTime(totalPrepereTime);
        const totalCalories = calories - data.calories;
        setCalories(totalCalories);
        notifyCookedToaster("Cooking Done");
    };


    return (
        <div className="container mx-auto">
            <div className="text-center pt-24 pb-16">
                <h1 className="text-4xl font-semibold text-[#150B2B] mb-6">Our Recipes</h1>
                <p className="text-base font-normal text-[#150B2B99] leading-[1.6rem]">Indulge in our chef's culinary creations. From classic favorites to innovative dishes, our restaurant's <br /> recipes are a symphony of flavors, expertly crafted to tantalize your taste buds.</p>  
                <Toaster position="top-right" />
            </div>
            <div className="grid grid-cols-5 place-items-start justify-between">
                <Recipes handleWantToCook={handleWantToCook} />
                <OrderDetails handleCurrentlyCooking={handleCurrentlyCooking} handleCookDone={handleCookDone} calories={calories} time={time} data={wantCook} cookingData={currentCooking} />
            </div>
        </div>
    );
};

export default OurRecipes;