// import logo from './logo.svg';
import Banner from './Banner'
import '../App.css';
import ShoppingList from './ShoppingList';
import logo from '../assets/logo.png'
import Footer from './Footer';

function App() {
  return <div>
    <Banner>
      <img src={logo} alt='La maison jungle' className='lmj-logo' />
      <h1 className='lmj-title'>La maison jungle</h1>
    </Banner>
    <ShoppingList />
    <Footer />
  </div>
}

export default App;
