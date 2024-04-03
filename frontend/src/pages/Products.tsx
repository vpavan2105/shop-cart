import ProductList from "../components/Products/ProductList"
import ProductNav from "../components/Products/ProductNav"
import {Footer} from "./Footer.tsx";

const Products = () => {
  return (
    <>
    <ProductNav />
    <ProductList />
      <Footer />
    </>
  )
}

export default Products