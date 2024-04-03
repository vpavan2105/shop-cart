
import '../Contact.css'
import { Footer } from './Footer';


const Contacts = () => {

  const handleSubmit = (e:any) => {
    e.preventDefault();
    // Add your form submission logic here
  };

  return (
  <>
       <div className="contact-container">
        <div className="firstPart">
          <div className="image">
            <img
              src="https://cdn.create.vista.com/api/media/small/285616502/stock-photo-top-view-laptop-coffee-notebook-glasses-card-thank-you-lettering"
              alt="Customer Service Agent"
            />
          </div>
        </div>
        <div className="contact-form">
          <h1>Contact Us</h1>
          <form id="contact-form" onSubmit={handleSubmit}>
            <input type="text" name="name" placeholder="Your Name" required />
            <input type="email" name="email" placeholder="Your Email" required />
            <textarea name="message" placeholder="Your Message" required></textarea>
            <input
              style={{ background: 'linear-gradient(135deg, hsl(346, 80%, 47%) 9%, hsl(333, 100%, 60%) 82%)' }}
              type="submit"
              value="Submit"
              id="submitbtn"
            />
          </form>
          <div id="form-messages"></div>
        </div>
      </div>

   <div className="Team">
   <h1>OUR TEAM</h1>
   <h3>Aspiring Devlopers At Masai School</h3>
   
   <div className="members">
    <div className="member1 mem">
      <div className="img">
        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
         <h2>	Pavan Kumar </h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias impedit voluptas ipsum.</p>
         <p className='pimg'><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
         <span className='span'> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></span>
         </p>
         
      </div>
    </div>
    <div className="member2 mem">
    <div className="img">
        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
       <h2>Praveen Kumar</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias impedit voluptas ipsum.</p>
        <p className='pimg'><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
        <span className='span'> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></span>
        </p>
      </div>
    </div>
    <div className="member3 mem">
    <div className="img">
        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
       <h2>Aravindhakshan M</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias impedit voluptas ipsum.</p>
        <p className='pimg'><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
        <span className='span'> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></span>
        </p>
      </div>
     
    </div>
    <div className="member4 mem">
    <div className="img">
        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
        <h2>Prasad Pawar</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias impedit voluptas ipsum.</p>
        <p className='pimg'><img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
        <span className='span'> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></span>
        </p>
      </div>
    </div>
    <div className="member5 mem">
      <div className="img">
        <img src="https://media.istockphoto.com/id/1300845620/vector/user-icon-flat-isolated-on-white-background-user-symbol-vector-illustration.jpg?s=612x612&w=0&k=20&c=yBeyba0hUkh14_jgv1OKqIH0CCSWU_4ckRkAoy2p73o=" alt="" />
         <h2>Indrani Paul</h2>
        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Alias impedit voluptas ipsum.</p>
        <p className='pimg'>
  
          <img src="https://static.vecteezy.com/system/resources/previews/018/930/587/original/linkedin-logo-linkedin-icon-transparent-free-png.png" alt="" />
          <span className='span'> <img src="https://cdn-icons-png.flaticon.com/512/25/25231.png" alt="" /></span>
          </p>
       
         
      </div>
    </div>
   </div>

 



   </div>
  
<Footer/>


  </>
  )
}

export default Contacts;