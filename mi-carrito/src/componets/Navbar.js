import { Component } from "react";
import Brand from "./Brand";
import ShoppingCart from "./ShoppingCart";

const styles = {
    navbar: {
        display: 'flex',
        flexDirection: 'row',
        alignItems: 'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}
class Navbar extends Component {
    render() {

        const { shoppingCart, viewDetails, details } = this.props;

        return (
            <nav style={styles.navbar}>
                <Brand />
                <ShoppingCart
                    shoppingCart={shoppingCart}
                    viewDetails={viewDetails}
                    details={details}
                />
            </nav>
        )
    }
}

export default Navbar;