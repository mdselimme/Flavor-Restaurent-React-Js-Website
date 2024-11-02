import "./Banner.css";

const Banner = () => {
    return (
        <div className="container mx-auto">
            <div className="banner-bg bg-no-repeat bg-cover h-[39rem] bg-center rounded-[3.5rem] relative overflow-hidden flex flex-col justify-center items-center">
                <div className="text-center text-white z-20">
                    <h1 className="text-[52px] font-bold leading-[4.5rem]">Discover an exceptional cooking <br /> class tailored for you!</h1>
                    <p className="text-lg font-normal leading-[1.9rem] py-5">Gather your loved ones and create unforgettable memories at our family-friendly restaurant. Our cozy  ambiance and <br /> warm hospitality make us the perfect place to unwind and enjoy delicious food.</p>
                   <div className="mt-5">
                        <button className="text-xl font-semibold py-5 px-16 rounded-full bg-[#0BE58A] text-black" type="submit">Explore Now</button>
                        <button className="text-xl lg:ml-10 font-semibold py-5 px-16 rounded-full border border-white" type="submit">Our Feedback</button>
                   </div>
                </div>
            </div>
        </div>
    );
};

export default Banner;