// import logo from './logo.svg';
import Banner from './Banner'
import '../App.css';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Footer from './Footer';
import Cart from './Cart';
import '../styles/Layout.css'
import { useState } from 'react'


function App() {
  const [cart, updateCart] = useState([])
  
  return (
      <div>
          <Banner>
              <img src={logo} alt='La maison jungle' className='lmj-logo' />
              <h1 className='lmj-title'>La maison jungle</h1>
          </Banner>
          <div className='lmj-layout-inner'>
              <Cart cart={cart} updateCart={updateCart} />
              <ShoppingList cart={cart} updateCart={updateCart} />
          </div>
          <Footer />
      </div>
  )
}

export default App
