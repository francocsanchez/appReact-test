import { Component } from "react";
import BubbleAlert from './BubbleAlert';

const styles = {
    shoppingCart: {
        backgroundColor: '#359A2C',
        color: '#fff',
        padding: '15px',
        border: 'none',
        borderRadius: '15px',
        cursor: 'pointer'
    },
    bubble: {
        position: 'relative',
        left: 15,
        top: 20
    }
}

class ShoppingCart extends Component {
    render() {
        return (
            <div>
                <span style={styles.bubble}>
                    <BubbleAlert />
                </span>
                <button style={styles.shoppingCart}>
                    Carro
                </button>
            </div>
        )
    }
}

export default ShoppingCart;