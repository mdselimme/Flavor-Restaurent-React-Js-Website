

const OrderDetails = ({data}) => {
    console.log(data)
    return (
            <div className="p-5">
            <div className="border rounded-2xl p-4">
            <h1 className="text-center text-2xl font-medium">Want to Cook: <span className="text-[#0BE58A]">{data.length}</span></h1>
            <div>
            <div className="overflow-x-auto">
                <table className="table table-zebra">
                    {/* head */}
                    <thead>
                    <tr>
                        <th></th>
                        <th>Name</th>
                        <th>Time</th>
                        <th>Calories</th>
                    </tr>
                    </thead>
                    <tbody>
                    {/* row 1 */}
                    <tr>
                        <th>1</th>
                        <td>Cy Ganderton</td>
                        <td>Quality Control Specialist</td>
                        <td>Blue <button className="px-5 py-2 mt-5 bg-[#0BE58A] rounded-full text-[#150B2B] text-base font-medium">Preparing</button></td>
                    </tr>
                    
                    </tbody>
                </table>
                </div>
            </div>
            </div>
        </div>
    );
};

export default OrderDetails;