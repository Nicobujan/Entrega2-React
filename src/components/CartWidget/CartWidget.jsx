import './cartwidget.css';

function CartWidget () {
    return (
        <a className="link-carrito" href="/">
            <i  className="bi bi-cart-fill">Mi Carrito</i>
        </a>
    );
}

export default CartWidget;