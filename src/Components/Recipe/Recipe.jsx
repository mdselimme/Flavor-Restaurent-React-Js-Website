import { FaClock, FaFire } from "react-icons/fa";


const Recipe = ({recipe, handleWantToCook}) => {

    const {recipe_image, recipe_name,short_description,ingredients , preparing_time, calories} = recipe;

    return (
        <div>
            <div className="card bg-base-100 shadow-xl">
                <figure>
                    <img
                    src={recipe_image}
                    alt="Shoes" />
                </figure>
                <div className="card-body">
                    <h2 className="card-title">{recipe_name}</h2>
                    <p className="text-[#878787] text-base leading-[1.9rem] border-b-2 pb-3">{short_description}</p>
                    <div className="border-b-2 py-5">
                        <strong className="text-lg block font-medium mb-3">Ingredients: <span className="text-[#0BE58A]">{ingredients.length}</span></strong>
                        <ul className="list-disc ml-8 text-lg text-[#878787] leading-[2rem]">
                            {
                                ingredients.map((items ,idx)=> <li key={idx}>{items}</li>)
                            }
                        </ul>
                    </div>
                    <div className="flex my-2 justify-between items-center">
                        <div className="flex items-center text-[#282828CC] text-base font-normal">
                            <span className="text-[#0BE58A]"><FaClock /></span> <span className="ml-2">{preparing_time} Minutes</span>
                        </div>
                        <div className="flex items-center text-[#282828CC] text-base font-normal ml-10">
                            <span className="text-[#0BE58A]"><FaFire /></span> <span className="ml-2">{calories} Calories</span>
                        </div>
                    </div>
                    <div className="card-actions justify-end">
                    <button onClick={()=> handleWantToCook(recipe)} className="w-full py-4 mt-5 bg-[#0BE58A] rounded-full text-[#150B2B] text-lg font-medium">Want to Cook</button>
                    </div>
                </div>
                </div>
        </div>
    );
};

export default Recipe;