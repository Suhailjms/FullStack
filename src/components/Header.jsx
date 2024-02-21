import '../assets/css/Header.css'
import logo_light from '../assets/images/Image1.jpeg'
import search_icon_light from '../assets/images/Search.jpeg'

const Header = () => {
  return (
    <div className='navbar'>
        <img src={ logo_light} alt='' className='logo'/>
        <ul>
        <li>Home</li>
        <li>About Us</li>
        <li>Events</li>
        <li>Features</li>
        </ul>
        <div className='search-box'>
        <input type="text" placeholder='Search'/>
        <img src={ search_icon_light} alt=""/>
        </div>
    </div>
  )
}

export default Header