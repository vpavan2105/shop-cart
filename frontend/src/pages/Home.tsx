import { useEffect, useState } from "react";
import "../home.css";

function Home() {
  const [data, setData] = useState([]);

  useEffect(() => {
    fetch("http://localhost:8080/products?_limit=4")
      .then((res) => res.json())
      .then((res) => setData(res))
      .catch((err) => console.log(err));
  }, []);

  return (
    <>
      <div className="home">
        <img
          src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          className="img"
          alt=""
        />
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
          {data.map((product) => (
            <div className="card">
              <img src={product.image} /> <br />
              <h4>{product.title}</h4> <br />
              <h3>$ {product.price}</h3> <br />
              <p>{product.category}</p> <br />
              <button className="btn1">Add To Cart</button>
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
    </>
  );
}

export { Home };
