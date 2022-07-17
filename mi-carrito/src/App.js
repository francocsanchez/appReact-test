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
    ]
  }

  render() {
    return (
      <div>
        <Navbar />
        <Layout>
          <Title />
          <Products
            products={this.state.products}
            agregarItems={() => console.log('Agregando items')}
          />
        </Layout>
      </div>
    );
  }
}

export default App;
