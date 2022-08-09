import { useState } from "react";

import { Fragment } from "react";
import Header from "./components/Layout/Header";
import About from "./components/Layout/About";
import Main from "./components/Layout/main/Main";
import Support from "./components/Layout/Support";
import Navbar from "./components/Layout/Navbar";
import Footer from "./components/Layout/Footer";
import Footer2 from "./components/Layout/Footer2";
import Cart from "./components/Cart/Cart";
import CartProvider from "./store/CartProvider";

const App = () => {
  const [cartIsShow, setCartIsShow] = useState(false)

  const showCartHandler = () => {
    setCartIsShow(true)
  }
  const hideCartHandler = () => {
    setCartIsShow(false)
  }

  return (
    <CartProvider>
      {cartIsShow && <Cart onHide={hideCartHandler} />}
      <Navbar onShow={showCartHandler}/>
      <Header />
      <main>
        <About />
        <Main />
        <Support />
      </main>
      <Footer />
      <Footer2 />
    </CartProvider>
  );
}

export default App;
