import React from 'react';
import ReactStars from "react-rating-stars-component";
import { Link } from 'react-router-dom';


const SpecialProducts = () => {
  return (
    <div className='col-4'>
        <div className="special-product-card">
            <div className="d-flex justify-content-between">
                <div className=''>
                    <img src="images/watch.jpg" className='img-fluid' alt="watch" />
                </div>
                <div className='special-product-content '>
                    <h5 className="brand">
                        Havels
                    </h5>
                    <h6 className='title'>Samsung Galaxy Note10+ Mobile Phone;Sim...</h6>
                    <ReactStars
                    count={5}
                    // onChange={ratingChanged}
                    size={24}
                    activeColor="#ffd700"
                    value={4}
                    edit={false}
                />
                <p className="price"><span>$60.00</span> &nbsp; <strike>$200</strike></p>
                <div className="discount-till  count-down d-flex align-items-center gap-10">
                    <p className='mb-0'><b>763 </b>days</p>
                    <div className="gap-10 d-flex align-items-center">
                        <span className='badge rounded-circle  p-2 bg-warning '>00</span>:
                        <span className='badge rounded-circle  p-2 bg-warning '>00</span>:
                        <span className='badge rounded-circle  p-2 bg-warning '>00</span>
                         
                    </div>
                    
                </div>
                <div className="prod-count my-3">
                        <p>Products: 5</p>
                        <div className="progress">
                            <div className="progress-bar" role="progressbar" style={{"width": "25%"}} aria-valuenow="25" aria-valuemin="0" aria-valuemax="100"></div>
                            </div>
                    </div>
            <Link className="button">Add to Cart</Link>


                </div>

            </div>

        </div>

        
      
    </div>
  )
}

export default SpecialProducts
