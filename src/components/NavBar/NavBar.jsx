import CartWidget from "../CartWidget/CartWidget";
import NavItem from "../NavItem/NavItem";
import "./navbar.css";






function NavBar() {
    return (
        <nav className="nav-header">
         <h2 className="pageName">EN LA ESQUINA </h2>
                  
        
        <ul className="nav-menu">
          
        <NavItem nombre="Bebidas sin Alcohol" category="/category/BebidasSinAlcohol"/>
        <NavItem nombre="Bebidas Blancas" category="/category/BebidaBlanca"/>
        <NavItem nombre="Bebidas Negras" category="/category/BebidasNegras"/>
        <NavItem nombre="Cervezas" category="/category/Cervezas"/>
        <NavItem nombre="Ofertas" category="/"/>
          
          
          <CartWidget />
        </ul>
        
        
       
      </nav>
    )
}

export default NavBar;