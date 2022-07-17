import { Component } from "react";
import Product from './Product'

class Products extends Component {
    render() {
        const { products, agregarItems } = this.props;
        return (
            <div>
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