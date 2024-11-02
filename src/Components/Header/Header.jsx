import HeaderIcon from "../../assets/images/header-icon.png";

const Header = () => {
    return (
      <div className="py-8">
        <div className="container mx-auto">
          <div className="navbar bg-base-100">      
            <div className="navbar-start">
                <div className="dropdown">
                <div tabIndex={0} role="button" className="btn btn-ghost lg:hidden">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    className="h-5 w-5"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor">
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M4 6h16M4 12h8m-8 6h16" />
                  </svg>
                </div>           
                    <ul
                    tabIndex={0}
                    className="menu menu-sm dropdown-content bg-base-100 rounded-box z-[1] mt-3 w-52 p-2 shadow">
                    <li><a className="text-lg text-[#150B2BB2]">Home</a></li>
                    <li><a className="text-lg text-[#150B2BB2]">Recipe</a></li>
                    <li><a className="text-lg text-[#150B2BB2]">About</a></li>
                    <li><a className="text-lg text-[#150B2BB2]">Search</a></li>     
                  </ul>
              </div>
              <a className="text-4xl cursor-pointer text-[#150B2B] font-bold">Flevor <span className="text-[#0BE58A]">Restaurent</span></a>
            </div>
            <div className="navbar-center hidden lg:flex">
              <ul className="menu menu-horizontal px-1">
              <li><a className="text-lg text-[#150B2BB2]">Home</a></li>
                    <li><a className="text-lg text-[#150B2BB2]">Recipe</a></li>
                    <li><a className="text-lg text-[#150B2BB2]">About</a></li>
                    <li><a className="text-lg text-[#150B2BB2]">Search</a></li> 
              </ul>
            </div>
            <div className="navbar-end">
            <div className="form-control mr-4">
                <input type="text" placeholder="Search" className="input input-bordered rounded-full w-24 md:w-auto" />
              </div>
              <div tabIndex={0} role="button" className="btn btn-ghost btn-circle avatar">
                  <div className="w-10 rounded-full">
                    <img
                      alt="Tailwind CSS Navbar component"
                      src={HeaderIcon} />
                  </div>
                </div>
            </div>
            </div>
              </div>
          </div>
    );
};


export default Header;