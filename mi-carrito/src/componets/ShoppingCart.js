import { Component } from "react";
import BubbleAlert from './BubbleAlert';
import DetailsBuy from './DetailsBuy';

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
        const { shoppingCart, viewDetails, details } = this.props;
        const countProducts = shoppingCart.reduce((acc, x) => acc + x.count, 0);
        return (
            <div>
                <span style={styles.bubble}>
                    {countProducts !== 0 ? <BubbleAlert value={countProducts} /> : null}
                </span>
                <button onClick={viewDetails} style={styles.shoppingCart}>
                    Carro
                </button>
                {details ? <DetailsBuy shoppingCart={shoppingCart} /> : null}
            </div>
        )
    }
}

export default ShoppingCart;