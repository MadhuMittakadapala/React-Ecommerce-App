import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link, useLocation } from 'react-router-dom';
import prodcompare from "../images/prodcompare.svg";
import wish from "../images/wish.svg";
// import wishlist from "../images/wishlist.svg";
import watch from "../images/watch.jpg";
// import watch2 from "../images/watch-1.avif";
import headphone from "../images/headphone.jpg"
import addcart from "../images/add-cart.svg"
import view from "../images/view.svg"






const ProductCard =  (props) => {
    const {grid} = props;

    let location = useLocation();
  


  

  return (
   
    <>
    <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == "/" ? "/product/:id" : location.pathname== "/product/:id" ? "/product/:id" : ":id" }`} className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
               <button className='border-0 bg-transparent'>
               <img src={wish} alt="wishlist" />

               </button>
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt=" product image" />
                <img src={headphone}  className='img-fluid' alt=" product item" /> 
            </div>
            <div className="product-details">
                <h6>Havels</h6>
                <h5>Kids headsphones bilk 10 pack multi colored for students</h5>
                 
                <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quae facilis provident, delectus doloribus sequi praesentium culpa pariatur vero enim labore odit eos animi hic laborum, repellendus voluptas rem voluptatibus.</p>
 
                <p className='price'>$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt="prodcompare" /></button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" /></button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="addcart" /></button>

                </div>
            </div>
        </Link>
      
    </div>
    <div className={` ${location.pathname == "/product" ? `gr-${grid}` : "col-3"}`}>
        <Link to={`${location.pathname == "/" ? "/product/:id" : location.pathname== "/product/:id" ? "/product/:id" : ":id" }`} className="product-card position-relative">
            <div className="wishlist-icon position-absolute">
                <img src={wish} alt="wishlist" />
            </div>
            <div className="product-image">
                <img src={watch} className='img-fluid' alt=" product image" />
                <img src={headphone}  className='img-fluid' alt=" product item" /> 
            </div>
            <div className="product-details">
                <h6>Havels</h6>
                <h5>Kids headsphones bilk 10 pack multi colored for students</h5>
                <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={3}
                    edit={false}
                />

                <p className={`description ${grid === 12 ? "d-block" : "d-none" }`}>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Veniam, quae facilis provident, delectus doloribus sequi praesentium culpa pariatur vero enim labore odit eos animi hic laborum, repellendus voluptas rem voluptatibus.</p>
 
                <p className='price'>$100.00</p>
            </div>
            <div className="action-bar position-absolute">
                <div className="d-flex flex-column gap-15">
                    <button className='border-0 bg-transparent'>
                    <img src={prodcompare} alt="prodcompare" /></button>
                    <button className='border-0 bg-transparent'>
                    <img src={view} alt="view" /></button>
                    <button className='border-0 bg-transparent'>
                    <img src={addcart} alt="addcart" /></button>

                </div>
            </div>
        </Link>
      
    </div>
    
    </>
   
  )

}

export default ProductCard;
