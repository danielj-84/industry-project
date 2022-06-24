import './Header.scss';
import menu from "../../assets/icons/menu.svg";
import logo from "../../assets/logo/cg-logo-black.svg";
import search from "../../assets/icons/search-nav.svg";
import bag from "../../assets/icons/bag-nav.svg";


function Header() {
  return (
    <div className="header">
        <div className="header__nav">
            <img src={menu} className="header__menu" alt="menu icon"></img>
        </div>
        <img src={logo} className="header__logo" alt="main logo"></img>
        <div className="header__nav">
            <img src={search} className="header__icon" alt="search icon"></img>
            <img src={bag} className="header__icon" alt="cart icon"></img>
        </div>
        
    </div>
  );
}

export default Header;
