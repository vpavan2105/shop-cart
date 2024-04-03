import { useEffect, useState } from "react";
import "../home.css";
import {Footer} from './Footer';
import { ProductUrl } from "../ApiUrls";
import { SearchBarHome } from "../components/SearchBarHome";
import { Link } from "react-router-dom";


function Home() {
  const [data, setData] = useState([]);
  const [product,setProduct]=useState([]);
  const [best,setBest]=useState([])
  const [sell,setSell]=useState([])

  useEffect(() => {
    fetch(`${ProductUrl}?_limit=4`)
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  useEffect(() => {
    fetch(`${ProductUrl}?_sort=price&_limit=4`)
      .then((res) => res.json())
      .then((res) => setProduct(res))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch(`${ProductUrl}?_sort=title&_limit=8`)
      .then((res) => res.json())
      .then((res) => setBest(res))
      .catch((err) => console.log(err));
  }, []);
  useEffect(() => {
    fetch(`${ProductUrl}?_sort=description&_limit=4`)
      .then((res) => res.json())
      .then((res) => setSell(res))
      .catch((err) => console.log(err));
  }, []);
  return (
    <>
    <SearchBarHome/>

      <div className="sofa">
        <img src="https://media.designcafe.com/wp-content/uploads/2021/04/15173304/trending-sofa-designs-for-your-home.jpg" alt="" />
      </div>

    
      <div className="category">
        <h2>Shop Our Top Categories</h2>

        <div className="boxes">
          <div className="box box1">
            <h3 className="h3">Furniture</h3>
          </div>
          <div className="box  box2">
            <h3 className="h3">handbag</h3>
          </div>
          <div className="box  box3">
            <h3 className="h3">Book</h3>
          </div>
          <div className="box box4">
            <h3 className="h3">Tech</h3>
          </div>
          <div className="box box5">
            <h3 className="h3">Sneakers</h3>
          </div>
          <div className="box box6">
            <h3 className="h3">Travel</h3>
          </div>
        </div>
      </div>
      <div className="product">
        <h2>Todays Best Deals For You!</h2>

        <div className="main-box">
          {data.map((product,index) => (
            <div className="card" key={index}>
              <Link to={`/products/${product.id}`}>
              <img src={product.image} /> 
              <h4>{product.title}</h4>
              <h3>$ {product.price}</h3> 
              <p>{product.category}</p> 
             </Link>
            </div>
          ))}
        </div>
      </div>

      <div className="Brand">
        <h2>Choose By Brand</h2>

        <div className="m-Box">
          <div className="bbox">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e560afc2c49da53521_brand%20(3)-min.png"
              alt=""
            />
            <div>
          
              <h2>Staples</h2>
              <p>Delivery within 24 hours</p>
            </div>
          </div>
          <div className="bbox">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e58b497e41aa46b801_brand%20(8)-min.png"
              alt=""
            />
            <div>
              <h2>Sprouts</h2>
              <p>Delivery within 24 hours</p>
            </div>
          </div>
          <div className="bbox">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e5eaf8533b0958cefe_brand%20(5)-min.png"
              alt=""
            />
            <div>
              <h2>Grocery outlet</h2>
              <p>Delivery within 24 hours</p>
            </div>
          </div>
          <div className="bbox">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e454ac2e9d497cb531_brand%20(6)-min.png"
              alt=""
            />
            <div>
              <h2>Moilie stones </h2>
              <p>Delivery within 24 hours</p>
            </div>
          </div>
          <div className="bbox">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380971125e685_brand%20(4)-min.png"
              alt=""
            />
            <div>
              <h2>Sports Basement</h2>
              <p>Delivery within 24 hours</p>
            </div>
          </div>
          <div className="bbox">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e460afc2193aa53511_brand%20(2)-min.png"
              alt=""
            />
            <div>
              <h2>Container stores</h2>
              <p>Delivery within 24 hours</p>
            </div>
          </div>
          <div className="bbox">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4c21faa5e03c209c5_brand%20(1)-min.png"
              alt=""
            />
            <div>
              <h2>Target</h2>
              <p>Delivery within 24 hours</p>
            </div>
          </div>
          <div className="bbox">
            <img
              src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e51eb4ad92a3e75673_brand%20(7)-min.png"
              alt=""
            />
            <div>
              <h2>Bevmo!</h2>
              <p>Delivery within 24 hours</p>
            </div>
          </div>
        </div>
      </div>
      <div className="Discount">
      <h2>Get Up To 70% Off</h2>
      <div className="Main-DBox">
      <div className="D-box">
          <div className="c-box-1">
          <h1>Save</h1><h1>  <sup>$</sup>100</h1>
          <p>Explore Our Furniture & Home Furnishing Range</p>
          </div>
          <div className="c-box-2">
              <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd367817e964f756_sofa-min.png" alt="" />
          </div>
        </div>
        <div className="D-box">
          <div className="c-box-1">
           <h1>Save</h1> <h1><sup>$</sup>29</h1>
           <p>Explore Our Furniture & Home Furnishing Range</p>
          </div>
          <div className="c-box-2">
            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4e006822af104db61_book-min.png" alt="" />
          </div>
        </div>
        <div className="D-box">
          <div className="c-box-1">
             <h1>Save</h1> <h1><sup>$</sup>67</h1>
             <p>Explore Our Furniture & Home Furnishing Range</p>
          </div>
          <div className="c-box-2">
            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e61a7c20076aec5fe7_shirt-min.png" alt="" />
          </div>
        </div>
        <div className="D-box">
          <div className="c-box-1"> <h1>Save</h1> <h1> <sup>$</sup>56</h1>
          <p>Explore Our Furniture & Home Furnishing Range</p>
          </div>
          <div className="c-box-2">
            <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e53f7127592743f6be_bug%20%26%20book-min.png" alt="" />
          </div>
        </div>
      </div>
      </div>

      <div className="popular">
        <h2>Weekly Popular Products</h2>
        <div className="main-box">
          {product.map((product,index) => (
            <div className="card" key={index}>
              <Link to={`/products/${product.id}`}>
              <img src={product.image} /> 
              <h4>{product.title}</h4>
              <h3>$ {product.price}</h3> 
              <p>{product.category}</p> 
              </Link>
            </div>
          ))}
        </div>
      </div>

  
      <div className="Best-deal">
        <h2>Todays Best Deals For You!</h2>

        <div className="main-box">
          {best.map((product,index) => (
            <div className="card" key={index}>
              <Link to={`/products/${product.id}`}>
              <img src={product.image} /> 
              <h4>{product.title}</h4>
              <h3>$ {product.price}</h3> 
              <p>{product.category}</p> 
              </Link>
            </div>
          ))}
        </div>
      </div>

     <div className="cash-back">
      <div className="get-1">
     <h2>Get 5% Cash Back</h2>
     <p>on Shopcart.com</p>
     <button className="lbtn">learn more</button>
      </div>
      <div className="get-2">
         <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e768e3260571e48a0c_visa%20card-min.png"  alt="" />
        </div>
     </div>
   <div className="most-sell">
    <h2>Most Selling Products</h2>
    <div className="main-box">
          {sell.map((product,index) => (
            <div className="card" key={index}>
              <Link to={`/products/${product.id}`}>
              <img src={product.image} /> 
              <h4>{product.title}</h4>
              <h3>$ {product.price}</h3> 
              <p>{product.category}</p> 
              </Link>
            </div>
          ))}
        </div>
   </div>

   <div className="tre-product">
    <h2>Trending Products For You!</h2>
    <div className="tproduct">
      <div className="pr-1 style">
        <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6cd3678e82164f755_furniture%20village-min.png" alt="" />
        <h3>Furniture Village</h3>
       <p>Delivery with in 24 hours</p>
       <button >shop now</button>
      </div>
      <div className="pr-2 style">
   <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6037f3b456acf2024_Fashion%20world-min.png" alt="" />
     <h3>Fashion World</h3>
     <p>Delivery with in 24 hours</p>
     <button >shop now</button>
      </div>
    </div>
   </div>
  <div className="service">
 
<div className="ser-box">
  <div className="sbox">
    <h2>Frequently Asked Questions</h2>
    <h3>Updates on safe Shopping in our Stores</h3>
      <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e55b939fea169c0292_faq-min.png" alt="" />
  </div>
  <div className="sbox">
<h2>Online Payment Process</h2>
<h3>Updates on safe Shopping in our Stores</h3>
<img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e6707380718425e697_onlie%20payment-min.png" alt="" />
  </div>
  <div className="sbox">
<h2>Home Delivery Options</h2>
<h3>Updates on safe Shopping in our Stores</h3>
<img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e544663ba3d0fd2bb8_home%20delivery-min.png" alt="" />
  </div>
</div>
  </div>
 <Footer/>


  

    </>
  );
}

export { Home };

