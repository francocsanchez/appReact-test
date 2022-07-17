import { Component } from 'react';

class App extends Component {

  state = {
    products: [
      { name: 'Tomate', price: 1500, img: '/products/tomate.jpg' },
      { name: 'Arbejas', price: 2500, img: '/products/arbejas.jpg' },
      { name: 'Lechuga', price: 2000, img: '/products/lechuga.jpg' },
    ]
  }

  render() {
    return (
      <div>
        <p>Hola mundo !</p>
      </div>
    );
  }
}

export default App;
