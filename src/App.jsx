import { useState } from 'react'
import ProductList from './components/ProductList'
import NavBar from './components/NavBar'
import ProductDetail from './components/ProductDetail'


const App = () => {
  const [products, setProducts] = useState([])

  return (
    <div className='App'>
      <NavBar />
      <header className='App-header'>
        <img src={reactLogo} className='App-logo' alt='logo' />
        <img src={viteLogo} className='App-logo' alt='logo' />
        <h1>Welcome to Vite + React!</h1>
        <ProductList />
        <ProductDetail />
      </header>
    </div>
  )
}










