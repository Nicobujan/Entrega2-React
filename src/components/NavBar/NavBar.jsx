import CartWidget from "../CartWidget/CartWidget";
import Logo from "../Logo/Logo";
import NavItem from "../NavItem/NavItem";
import "./navBar.css";


function NavBar() {
    return (
        <nav className="nav-header">
       
       <Logo titulo="Ecommerce"/>
        <ul className="nav-menu">
          <NavItem categoria="Ofertas"/>
          <NavItem categoria="Comprar"/>
          <NavItem categoria="Vender"/>
          <NavItem categoria="LogIn"/>
          
          <CartWidget />
        </ul>
       
      </nav>
    )
}

export default NavBar;