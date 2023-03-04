import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import ProductCard from '../components/ProductCard';
import ReactStars from 'react-rating-stars-component';
import { Link } from 'react-router-dom';
import ReactImageZoom from "react-image-zoom";
import Colors from './Colors';
import {MdCompare } from "react-icons/md"
import {AiOutlineHeart} from "react-icons/ai"
import Container from '../components/Container';

const SingleProduct = () => {
    const [orderedProduct, setOrderedProduct] = useState(true);

    const props ={
        width:400,
        height: 600,
        zoomWidth:600,
        img:"https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80"
    }
  return (
    <>
     <Meta title={"Product Name "}/>
     <BreadCrumb  title="Product Name " />

     <Container class1="main-product-wrapper home-wrapper-2 py-5">
        
            <div className="row">
                <div className="col-6">
                    <div className="main-product-image ">
                       <ReactImageZoom {...props} />

                    </div>
              
                <div className='other-product-images d-flex flex-wrap gap-15 '>
                    <div><img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='img-fluid' alt="" /></div>
                    <div><img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='img-fluid' alt="" /></div>
                    <div><img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='img-fluid' alt="" /></div>
                    <div><img src="https://images.unsplash.com/photo-1484704849700-f032a568e944?ixlib=rb-4.0.3&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8aGVhZHBob25lfGVufDB8fDB8fA%3D%3D&w=1000&q=80" className='img-fluid' alt="" /></div>

                </div>
                </div>
                <div className="col-6">
                    <div className="main-product-details">
                        <div className='border-bottom'>
                            <h3>Kids headphones bulks 10 packs multi colored for students</h3>
                        </div>
                        <div className="border-bottom">
                        <h3 className='price mt-3 mb-0'>Price $100.00</h3>
                       <div className='d-flex align-items-center gap-10'>
                       <ReactStars
                            count={5}
                            // onChange={ratingChanged}
                            size={24}
                            activeColor="#ffd700"
                            value={3}
                            edit={false}
                        />
                        <p className='mb-0'>( 2 reviews )</p>

                       </div>
                        </div>
                        <div className='border-bottom mt-3'>
                           <div className='d-flex  gap-10'>
                           <h3>Type:</h3>
                           <p>headsets</p>

                           </div>
                           <div className='d-flex gap-10'>
                            <h3>Brand:</h3>
                            <p>Havels</p>
                           </div>
                           <div>
                            <h3>Categories:</h3>
                            <p>airpods, cameras, computers&laptops, headphones,mini speakers,smart phones,smart televisions, smart watches   </p>
                           </div>
                           <div className='d-flex gap-10'>
                            <h3>Tags:</h3>
                            <p>airpods, cameras, computers&laptops</p>
                           </div>
                           <div className='d-flex gap-10'>
                            <h3>SKU:</h3>
                            <p>SKU002668</p>
                           </div>
                           <div className='d-flex gap-10'>
                            <h3>Availability:</h3>
                            <p>2668 In Stock</p>
                           </div>
                           <div className='d-flex gap-10 mb-3'>
                            <h3>Size:</h3>
                            <div className='d-flex flex-wrap gap-15'>
                                <span className='badge text-dark bg-white border border-1 border-secondary'>S</span>
                                <span className='badge text-dark bg-white border border-1 border-secondary'>M</span> 
                                <span className='badge text-dark bg-white border border-1 border-secondary '>L</span>  
                                <span className='badge text-dark bg-white border border-1 border-secondary'>XL</span>  
                                <span className='badge text-dark bg-white border border-1 border-secondary'>XXL</span>
                            </div>
                           </div>
                           <div className='d-flex gap-10'>
                            <h3>Colors:</h3>
                            <Colors />
                           </div>
                           <div className='d-flex gap-10 mt-2 mb-3'>
                            <h3 className='mb-0 align-items-center mt-2 '>Quantity:</h3>
                            <div>
                                <input type="number" min={1} max={10} style={{"width":"70px "}} id="number" className='form-control' />
                            </div>
                            <div className='d-flex justify-content-center align-items-center gap-10'>
                            <button className='button login border-0' type='submit'>Add to Cart</button>
                            <Link to="/signup" className='button signup'>Buy Now</Link>
                            </div>
                            

                           </div>
                           <div className='d-flex align-items-center mb-5 gap-15 '>
                                <div><Link to="/compare-product" className='text-dark gap-10 '><MdCompare className='me-2'/>Go to Compare </Link></div>
                                <div><Link to="/wishlist" className='text-dark'><AiOutlineHeart className='me-2'/>Add to Wishlist</Link></div>
                            </div>
                        </div>

 
                    </div>
                </div>
            </div>
        
     </Container>

     <Container class1="description-wrapper home-wrapper-2 py-5">
        
            <div className="row">
                <div className="col-12">
                <div className='bg-white p-3'>
                        <h4>Description</h4>
                        <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ut deleniti quasi, sint quisquam inventore magnam, dicta distinctio ipsum corrupti rem aliquam atque, fugit eligendi praesentium id illo aut.Lorem ipsum dolor sit amet consectetur adipisicing elit. Esse eius ut deleniti quasi, sint quisquam inventore magnam, dicta distinctio ipsum corrupti rem aliquam atque, fugit eligendi praesentium id illo aut.</p>
                    </div>
                </div>
            </div>
     </Container>

     <Container class1="reviews wrapper py-5 home-wrapper-2">
        
            <div className="row">
                <div className="col-12">
                   <div className="review-inner-wrapper">
                    <div className="review-head d-flex justify-content-between align-items-end">
                            <div>
                                <h4 className='mb-2'>Customer Reviews</h4>
                            <div className="d-flex align-items-center gap-10 ">
                            <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={3}
                                    edit={false}
                                />
                                <p className='mb-0'>Based on 2 reviews</p>
                            </div>
                            </div>
                        {
                            orderedProduct && (
                                <div>
                                <Link className='write-review'>write a review...</Link>
                            </div>
                            )
                        }

                    </div>
                   <div className='review-form mt-5'>
                   <form action="" >
                            <div class="mb-3">
                            <label for="name" class="form-label">Name</label>
                            <input type="text" class="form-control" id="name" placeholder="enter your name" />
                            </div>
                            <div class="mb-3">
                            <label for="email" class="form-label">Email address</label>
                            <input type="email" class="form-control" id="email" placeholder="name@example.com" />
                            </div>
                            <div className='mb-2'>
                                <p className='mb-0'>Rating</p>
                                <ReactStars
                                    count={5}
                                    // onChange={ratingChanged}
                                    size={24}
                                    activeColor="#ffd700"
                                    value={3}
                                    edit={false}
                                />

                            </div>
                            <div class="mb-3">
                            <label for="review" class="form-label">Review Title</label>
                            <input type="text" class="form-control" id="review-title" placeholder="enter your review title " />
                            </div>
                            <div class="mb-3">
                            <label for="textarea" class="form-label">Write a review(1700)</label>
                            <textarea class="form-control" id="textarea" rows="3" placeholder='write a comments here...'></textarea>
                            </div>

                            <div className='d-flex justify-content-end gap-15 mt-5'>
                            <button className='button   border-0 ' type='submit'>Submit Review</button> 
                            

                        </div>

                    </form>
                   </div>

                   <div className='reviews mt-5'>
                    <div className="review">
                        <div className='mb-0'>
                            <h6 className=''>Madhu Mittakadapala</h6>
                            <ReactStars
                                count={5}
                                // onChange={ratingChanged}
                                size={24}
                                activeColor="#ffd700"
                                value={3}
                                edit={false}
                            />
                        </div>
                    
                        <p className='mb-0 mt-3'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Perferendis, beatae. Consequatur aut provident, dignissimos iste assumenda quisquam necessitatibus nostrum vero. </p>

                    </div>

                   </div>
                   </div>
                </div>
            </div>
    
     </Container>

     <Container class1='popular-wrapper d-flex  home-wrapper-2'>
    
      <div className="row ">
        <div className="col-12">
        <h3 className='section-heading'>You May Also Like</h3>
        </div>
        </div>
      <div className="row">
             <ProductCard />    
      </div>

     </Container>
      
    </>
  )
}

export default SingleProduct;
