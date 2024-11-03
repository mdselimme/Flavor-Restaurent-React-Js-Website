

const OrderDetails = ({data}) => {
    
    console.log(data)
    return (
            <div className="p-5 col-span-2">
            <div className="border rounded-2xl p-4">
            <h1 className="text-center text-2xl text-[#282828] font-medium">Want to Cook: <span className="text-[#0BE58A]">{data.length}</span></h1>
            <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr className="text-center">
                        <th></th>
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
                        <td>{data.preparing_time}</td>
                        <td>
                            {data.calories}
                        </td>
                        <td>
                        <button className="px-5 py-2 bg-[#0BE58A] rounded-full text-[#150B2B] text-base font-medium">Preparing</button>
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