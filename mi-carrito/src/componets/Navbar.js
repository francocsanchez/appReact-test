import { Component } from "react";
import Brand from "./Brand";
import ShoppingCart from "./ShoppingCart";

const styles={
    navbar:{
        display: 'flex',
        flexDirection: 'row',
        alignItems:'center',
        height: '100px',
        justifyContent: 'space-between',
        position: 'relative',
        padding: '0 50px',
        boxShadow: '0 2px 3px rgb(0,0,0,0.1)'
    }
}
class Navbar extends Component {
    render() {
        return (
            <nav style={styles.navbar}>
                <p><Brand /></p>
                <p><ShoppingCart /></p>
            </nav>
        )
    }
}

export default Navbar;