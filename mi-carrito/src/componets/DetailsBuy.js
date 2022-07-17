import { Component } from "react";

const styles = {
    details: {
        backgroundColor: '#fff',
        position: 'absolute',
        marginTop: '30px',
        boxShadow: '1px 5px 5px rgb(0,0,0,0.3)',
        borderRadius: '5px',
        width: '300px',
        right: 50
    },
    ul: {
        margin: 0,
        padding: 0
    },
    product: {
        listStyleType: 'none',
        display: 'flex',
        justifyContent: 'space-between',
        alignItems: 'center',
        padding: '15px 20px',
        borderBottom: 'solid 1px #aaa'
    }
}
class DetailsBuy extends Component {
    render() {
        const { shoppingCart } = this.props;
        return (
            <div style={styles.details}>
                <ul style={styles.ul}>
                    {
                        shoppingCart.map((product, i) =>
                            <li style={styles.product} key={product.name + i}>
                                <img alt={product.name} src={product.img} width='50' height='32' />
                                {product.name} <span>{product.count}</span>
                            </li>
                        )}
                </ul>
            </div>
        )
    }
}

export default DetailsBuy;