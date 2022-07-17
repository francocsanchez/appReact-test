import { Component } from 'react';
import Products from './componets/Products';

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
        <Products
          products={this.state.products}
          agregarItems={() => console.log('Agregando items')}
        />
      </div>
    );
  }
}

export default App;
