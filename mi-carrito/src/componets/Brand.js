import { Component } from "react";

const styles = {
    brand: {
        fontWeight: '700',
        fontSize: '2rem'
    }
}

class Brand extends Component {
    render() {
        return (
            <div style={styles.brand}>
                Shop
            </div>
        )
    }
}

export default Brand;