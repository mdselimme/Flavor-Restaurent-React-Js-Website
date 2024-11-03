

const OrderDetails = ({data , handleCurrentlyCooking,cookingData}) => {

   
    
    console.log(data)
    return (
            <div className="p-5 col-span-2">
            <div className="border rounded-2xl p-4">
            <h1 className="text-center text-2xl text-[#282828] font-medium">Want to Cook: <span className="text-[#0BE58A]">{data.length}</span></h1>
            <div className="mt-5">
                <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr className="text-center">
                        <th>Num</th>
                        <th>Name</th>
                        <th>Time (Minutes)</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        data.map((data, idx)=> 
                            <tr className="text-center" key={idx + 1}>
                        <th>{idx + 1}</th>
                        <td>{data.recipe_name}</td>
                        <td>{data.preparing_time} Min</td>
                        <td>
                            {data.calories} Cal
                        </td>
                        <td>
                        <button onClick={()=> handleCurrentlyCooking(data)} className="px-5 py-2 bg-[#0BE58A] rounded-full text-[#150B2B] text-base font-medium">Preparing</button>
                        </td>
                    </tr>
                        )
                    }
                    
                    </tbody>
                </table>
                </div>
            </div>
            <h1 className="text-center text-2xl text-[#282828] font-medium mt-10">Currently Cooking <span className="text-[#0BE58A]">{data.length}</span></h1>
            <div className="mt-5">
                <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr className="text-center">
                        <th>Num</th>
                        <th>Name</th>
                        <th>Time (Minutes)</th>
                        <th>Calories</th>
                        <th></th>
                    </tr>
                    </thead>
                    <tbody>
                    {
                        cookingData.map((data, idx)=> 
                            <tr className="text-center" key={idx + 1}>
                        <th>{idx + 1}</th>
                        <td>{data.recipe_name}</td>
                        <td>{data.preparing_time} Min</td>
                        <td>
                            {data.calories} Cal
                        </td>
                        <td>
                        <button onClick={()=> handleCurrentlyCooking(data)} className="px-5 py-2 bg-[#0BE58A] rounded-full text-[#150B2B] text-base font-medium">Preparing</button>
                        </td>
                    </tr>
                        )
                    }
                    
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderDetails;