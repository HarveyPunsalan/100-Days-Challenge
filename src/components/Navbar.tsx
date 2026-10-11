import { Link } from "react-router-dom";

function Navigation() {
    return (
        <nav>
            <Link to="/">Home</Link>
            <Link to="/auth">Auth</Link>
            <Link to="/checkout">Checkout</Link>
        </nav>
    );
}

export default Navigation;