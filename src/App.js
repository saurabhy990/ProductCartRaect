
import { useState } from 'react';
import './App.css';
import Cart from './Components/Cart';
import Header from './Components/Header';
 

function App() {
  const [products, setProducts] =useState([
    {
      id: 1,
      logo:"https://image-us.samsung.com/SamsungUS/configurator/A54-01-black-Configurator-DT-800x600.jpg",
      name: "Samsung",
      quantity: 0,
      price: 10000,
    },
    {
      id: 2,
      logo:"https://m.media-amazon.com/images/I/613SAOPmLeL._SL1500_.jpg",
      name: "One Plus",
      quantity: 0,
      price: 30000,
    },
    {
      id: 3,
      logo:"https://m.media-amazon.com/images/I/71xb2xkN5qL._SL1500_.jpg",
      name: "Iphone 14",
      quantity: 0,
      price: 50000,
    },
    {
      id: 4,
      logo:"https://images.samsung.com/is/image/samsung/p6pim/in/2307/gallery/in-galaxy-z-fold5-f946-sm-f946bzedins-thumb-537240577?imwidth=480",
      name: "Z-Fold5",
      quantity: 0,
      price: 100000,
    },
  ]);

  const [quantity, setQuantity] = useState(0);

  return (
    <div className="App">
      <Header quantity={quantity} />
      <Cart
        products={products}
        setProducts={setProducts}
        setQuantity={setQuantity}
        quantity={quantity}
      />
    </div>
  );
}

export default App;
