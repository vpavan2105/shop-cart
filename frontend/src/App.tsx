
import ProductList from './components/Products/ProductList'
import ProductNav from './components/Products/ProductNav'
import SingleProductPage from './components/Products/SingleProductCard'
import { Home } from './pages/Home'

function App() {

  return (
    <>
    {/* <Home/> */}
    <ProductNav />
    <ProductList />
    {/* <SingleProductPage  product={product}/> */}
    </>
  )
}

export default App
