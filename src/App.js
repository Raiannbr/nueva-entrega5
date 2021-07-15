import React from 'react'
import { Fragment, useState } from 'react';

//importo burger y cart
import Burger from './components/Burger'
import Cart from './components/Cart'

function App() {

  //estado de listado de burgas

  const [burgers, setBurgers] = useState([
    { id: 1, nombre: "Violeta", precio: 250 },
    { id: 2, nombre: "Marron", precio: 180 },
    { id: 3, nombre: "Roja", precio: 150 },
  ]);

  //estado del carrito

  const [cart,setCart] =useState([])



  return (
    <Fragment>

    <h3>Burgers</h3>
    {burgers.map((burger)=>(
      <Burger
      key={burger.id}
      burger={burger}
      cart={cart}
      setCart={setCart}
      burgers={burgers}

      />
    ))}
    <Cart
    cart={cart}
    />

    </Fragment>
  );
}

export default App;
