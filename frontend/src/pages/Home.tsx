import '../App.css'

function Home(){




    
    return (
        
        <>
          <div className='home'>
          <img src="https://images.unsplash.com/photo-1472851294608-062f824d29cc?q=80&w=1470&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D" className='img' alt="" />
          </div>
            <div className="category">
                
             <h2>Shop Our Top Categories</h2>   

               <div className="boxes">
                <div className="box box1"> 
                <h3 className='h3'>Furniture</h3>
                </div>
                <div className="box  box2">
                  <h3 className='h3'>handbag</h3>
                </div>
                <div className="box  box3">
                   <h3 className='h3'>Book</h3>
                </div>
                <div className="box box4">
                      <h3 className='h3'>Tech</h3>
                </div>
                <div className="box box5">
                   <h3 className='h3'>Sneakers</h3>
                </div>
                <div className="box box6">
                  <h3 className='h3'>Travel</h3>
                </div>

               </div>
                
                </div>  
             <div className="product">
                <h2>Todays Best Deals For You!</h2>
             </div>

        </>
    )
}

export {Home}