import { useState } from 'react';
import "../assets/css/Header.css";
import logo_light from '../assets/images/Event.png';
import search_icon_light from '../assets/images/Search.png';
import profile_icon from '../assets/images/account_blue.png';
import { MdDashboard } from "react-icons/md";
import { ImProfile } from "react-icons/im";
import { FaShoppingCart } from "react-icons/fa";
import { IoMdLogOut } from "react-icons/io";

const Header = () => {
  const [showSidebar, setShowSidebar] = useState(false);

  const toggleSidebar = () => {
    setShowSidebar(!showSidebar);
  };

  return (
    <div className='navbar'>
      <div className="left-section">
        <img src={logo_light} alt='' className='logo' />
        <ul>
          <li>Home</li>
          <li>About Us</li>
          <li>Events</li>
          <li>Features</li>
        </ul>
      </div>
      <div className="right-section">
        <div className='search-box'>
          <input type="text" placeholder='Search' />
          <img src={search_icon_light} alt="" />
        </div>
        <img src={profile_icon} alt="" className='p_icon' onClick={toggleSidebar} />
      </div>
      {showSidebar && (
        <div className='sidebar'>
          <ul>
            <li><MdDashboard /> Dashboard</li>
            <li><ImProfile /> Edit profile</li>
            <li><FaShoppingCart /> My Bookings</li>
            <li><IoMdLogOut /> Logout</li>
          </ul>
        </div>
      )}
    </div>
  );
}

export default Header;
