 import "../home.css";
 import {useNavigate} from "react-router";


function Footer(){
    const navigate = useNavigate();
    const handleClick = () => {
        navigate("/")
    }

    return(
        <div style={{backgroundColor: "aliceblue"}}>
          <div className="footer">
    <div className="nav-1 nav">
        <div className="navImg">
            <img src="/ShopCart_Logo-2.png" height={"100px"} width={"80px"} alt="" onClick={handleClick}/>
            <h1>ShopCart</h1>
        </div>
      <h3>Amet minim mollit non deserunt ullamco est sit aliqua dolor do amet sint. Velit officia consequat duis enim velit mollit.</h3>
   
   <h2>Accepted Payments</h2>
   
   <div className="img-boxe">
    <div className="img-boxes">
      <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce8816711ebecac46d8_stripe.png" alt="" />
    </div>
    <div className="img-boxes">
      <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce82d440b7ab84a993f_visa.png" alt="" />
    </div>
    <div className="img-boxes">
    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce8f032504012a5896b_Mastercard.png" alt="" />
    </div>
    <div className="img-boxes">
    <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e48b497e6ce846b7ff_Amazon.png" alt="" />
    </div>
    <div className="img-boxes">
<img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1f054e419e42aca4a9a2_Klarna.png" alt="" />
    </div>
    <div className="img-boxes">
  <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1ce7c4510cf9a55828a0_PayPal.png" alt="" />
    </div>
    <div className="img-boxes">
<img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63e8c4e4707380264b25e680_ApplePay.png" alt="" />
    </div>
    <div className="img-boxes">
 <img src="https://assets-global.website-files.com/63e857eaeaf853471d5335ff/63eb1f55dc68c5ee83d0cbf8_GooglePay.png" alt="" />
    </div>
   </div>
   
    </div>

     <div className="nav-2 nav footer1">
   <ul >
     <li><a href="#department"><h2>Department</h2></a></li>
    <li><a href="#fashion">Fashion</a></li>
    <li><a href="#education">Education Product</a></li>
    <li><a href="#frozen-food">Frozen Food</a></li>
    <li><a href="#beverages">Beverages</a></li>
    <li><a href="#organic-grocery">Organic Grocery</a></li>
    <li><a href="#office-supplies">Office Supplies</a></li>
    <li><a href="#beauty-products">Beauty Products</a></li>
    <li><a href="#books">Books</a></li>

  </ul>
  


    </div>
    <div className="nav-3 nav footer1">
    <ul>
    <li><a href="#aboutus"><h2>About us</h2></a></li>
    <li><a href="#about-shopcart">About Shopcart</a></li>
    <li><a href="#careers">Careers</a></li>
    <li><a href="#news-blog">News & Blog</a></li>
    <li><a href="#help">Help</a></li>
    <li><a href="#press-center">Press Center</a></li>
    <li><a href="#shop-location">Shop By Location</a></li>
    <li><a href="#shopcart-brands">Shopcart Brands</a></li>
    <li><a href="#affiliate-partners">Affiliate & Partners</a></li>
    <li><a href="#ideas-guides">Ideas & Guides</a></li>
  </ul>
    </div>
    <div className="nav-4 nav footer1">
    <ul>
    <li><a href="#services"><h2>services</h2></a></li>
    <li><a href="#gift-card">Gift Card</a></li>
    <li><a href="#mobile-app">Mobile App</a></li>
    <li><a href="#shipping-delivery">Shipping & Delivery</a></li>
    <li><a href="#order-pickup">Order Pickup</a></li>
    <li><a href="#account-signup">Account Signup</a></li>
  </ul>
    </div>
    <div className="nav-5 nav footer1">
    <ul>
    <li><a href="#help"><h2>Help</h2></a></li>
    <li><a href="#shopcart-help">Shopcart Help</a></li>
    <li><a href="#returns">Returns</a></li>
    <li><a href="#track-orders">Track Orders</a></li>
    <li><a href="#contact-us">Contact Us</a></li>
    <li><a href="#feedback">Feedback</a></li>
    <li><a href="#security-fraud">Security & Fraud</a></li>
  </ul>
    </div> 
   </div>
  <hr /> <hr />

        
        </div>
    )
}


export {Footer}