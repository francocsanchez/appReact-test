import { Component } from 'react';
import Layout from './componets/Layout';
import Products from './componets/Products';
import Title from './componets/Title';
import Navbar from './componets/Navbar';

class App extends Component {

  state = {
    products: [
      { name: 'Tomate', price: 1500, img: './products/tomate.jpeg' },
      { name: 'Arbejas', price: 2500, img: './products/arbejas.jpeg' },
      { name: 'Lechuga', price: 2000, img: './products/lechuga.jpeg' },
    ],
    shoppingCart: [],
    details: false
  }

  agregarItems = (product) => {
    const { shoppingCart } = this.state;
    if (shoppingCart.find(x => x.name === product.name)) {
      const newshoppingCart = shoppingCart.map(x => x.name === product.name
        ? (
          {
            ...x,
            count: x.count + 1
          }
        ) : x)
      return this.setState({ shoppingCart: newshoppingCart });
    }
    return this.setState({
      shoppingCart: this.state.shoppingCart.concat({
        ...product,
        count: 1
      })
    })
  }

  viewDetails = () => {
    if (this.state.shoppingCart.length === 0) {
      return
    }
    this.setState({ details: !this.state.details })
  }

  render() {
    const { details } = this.state;
    return (
      <div>
        <Navbar
          shoppingCart={this.state.shoppingCart}
          details={details}
          viewDetails={this.viewDetails}
        />
        <Layout>
          <Title />
          <Products
            products={this.state.products}
            agregarItems={this.agregarItems}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
