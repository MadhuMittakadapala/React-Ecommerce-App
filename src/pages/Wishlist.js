import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import watch from "../images/watch.jpg";
import cross from "../images/cross.svg";
import Container from '../components/Container';


const Wishlist = () => {
  return (
    <>
       <Meta title={"Favorite Wishlist "}/>
       <BreadCrumb  title="Favorite Wishlist " />
       <Container class1='wishlist-wrapper py-5 home-wrapper-2'>
        
            <div className="row">
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src="images/cross.svg" alt="cross" className='position-absolute cross  img-fluid'/>
                        <div className="wishlist-card-image img-fluid w-100">
                            <img src={watch} alt="watch" className=' img-fluid'/>
                        </div>
                        <div className="wishlist-details">
                            <h5 className='title'>Huawei Mediapad 7 T1-701U Tablet WiFi, 3G, Voice</h5>
                            <h6 className="price mb-3 mt-5"><b style={{"color": "red"}}>$100.00 </b><strike>$170.00</strike></h6>
                        </div>
                    </div>  
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src={cross} alt="cross" className='position-absolute cross  img-fluid'/>
                        <div className="wishlist-card-image img-fluid w-100">
                            <img src={watch} alt="watch" className=' img-fluid'/>
                        </div>
                        <div className="wishlist-details">
                            <h5 className='title'>Huawei Mediapad 7 T1-701U Tablet WiFi, 3G, Voice</h5>
                            <h6 className="price mb-3 mt-5"><b style={{"color": "red"}}>$100.00 </b><strike>$170.00</strike></h6>
                        </div>
                    </div>  
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src={cross} alt="cross" className='position-absolute cross  img-fluid'/>
                        <div className="wishlist-card-image img-fluid w-100">
                            <img src={watch} alt="watch" className=' img-fluid'/>
                        </div>
                        <div className="wishlist-details">
                            <h5 className='title'>Huawei Mediapad 7 T1-701U Tablet WiFi, 3G, Voice</h5>
                            <h6 className="price mb-3 mt-5"><b style={{"color": "red"}}>$100.00 </b><strike>$170.00</strike></h6>
                        </div>
                    </div>  
                </div>
                <div className="col-3">
                    <div className="wishlist-card position-relative">
                        <img src={cross} alt="cross" className='position-absolute cross  img-fluid'/>
                        <div className="wishlist-card-image img-fluid w-100">
                            <img src={watch} alt="watch" className=' img-fluid'/>
                        </div>
                        <div className="wishlist-details">
                            <h5 className='title'>Huawei Mediapad 7 T1-701U Tablet WiFi, 3G, Voice</h5>
                            <h6 className="price mb-3 mt-5"><b style={{"color": "red"}}>$100.00 </b><strike>$170.00</strike></h6>
                        </div>
                    </div>  
                </div>
            </div>
           
        </Container>
               
      

   
    </>

  )
}

export default Wishlist;
