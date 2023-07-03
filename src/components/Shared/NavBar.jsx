import { Link } from "react-router-dom";
import logo from '../../assets/logo.png'
const NavBar = () => {
    const navItem = <>
    <li className="text-1xl font-bold"><Link to='/'>Home</Link></li>
    <li className="text-1xl font-bold"><Link to='/myproject'>Projects</Link></li>
    <li className="text-1xl font-bold"><Link to='/skills'>Skills</Link></li>
    <li className="text-1xl font-bold"><Link to='/about'>About</Link></li>
    <li className="text-1xl font-bold"><Link to='/contact'>Contact</Link></li>
    </>
    return (
        <div className="navbar bg-slate-700 text-white">
  <div className="navbar-start">
    <div className="dropdown">
      <label tabIndex={0} className="btn btn-ghost lg:hidden">
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /></svg>
      </label>
      <ul tabIndex={0} className="menu menu-sm dropdown-content mt-3 z-[1] p-2 shadow rounded-box w-52 uppercase">
        {navItem}
      </ul>
    </div>
    <div className="flex">
        <img className="bg-white mr-5" src={logo} style={{height:'30px'}} alt="" />
    <Link className="text-xl uppercase font-semibold">
        {/* <span className="text-purple-800">tufael</span>  */}
        <span className="text-white">portfolio</span></Link>

    </div>
  </div>
  <div className="navbar-center hidden lg:flex">
    <ul className="menu menu-horizontal px-1 uppercase">
      {navItem}
    </ul>
  </div>
</div>
    );
};

export default NavBar;