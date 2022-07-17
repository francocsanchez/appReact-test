import { Component } from "react";
import Product from './Product'

const styles = {
    products: {
        display: 'flex',
        flexDirecction: 'row',
        justifyContent: 'space-between'
    }
}

class Products extends Component {
    render() {
        const { products, agregarItems } = this.props;
        return (
            <div style={styles.products}>
                {products.map((product, i) =>
                    <Product
                        agregarItems={agregarItems}
                        key={product + i}
                        product={product}
                    />
                )}
            </div>
        );
    };
};

export default Products;