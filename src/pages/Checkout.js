import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {IoIosArrowBack} from "react-icons/io"
import headphone from "../images/headphone.jpg"
import Container from '../components/Container';

const Checkout = () => {
  return (
    <>

    <Meta title={"Check out"} />
    <BreadCrumb  title="Check out" />

    <Container class1="checkout-wrapper bg-white py-5 home-wrapper-2 ">

     
      <div className="row">
            <div className="col-6">
                <div className='checkout-leftside-details m-5'>
                    <h1>MADN</h1>
                </div>
                <div className='m-5'>
                <nav style={{"--bs-breadcrumb-divider": ">"}} aria-label="breadcrumb">
                <ol className="breadcrumb">
                    <li className="breadcrumb-item"><Link to="/cart" className='text-dark' href="#">Cart</Link></li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">Information</li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">Shipping</li>
                    &nbsp; /
                    <li className="breadcrumb-item active" aria-current="page">Payment</li>
                </ol>
                </nav>
                </div>
                <div className='m-5'>
                    <h4 className="title">
                        Contact Information
                    </h4>
                    <p className='user-details'>Madhunithiin (mad@gmail.com)</p>
                </div>
                <div className='m-5'>
                    <h3>Shipping Address</h3>
                    <form action="" className='d-flex gap-15 flex-wrap  justify-content-between'>
                        <div className='w-100'>
                            <select name="country" id="" className='form-control form-select'>
                                   
                                    <option >Select Country</option>
                                    <option value="1">United States</option>
                                    <option value="2">Use new address</option>
                                    
                            </select>

                        </div>
                        <div className='w-100'>
                            <select name="country" id="country" className='form-control form-select'>
                                   
                                    <option >Country</option>
                                    <option value="1">One</option>
                                    <option value="2">Two</option>
                                    <option value="3">Three</option>
                            </select>

                        </div>
                        <div className='flex-grow-1'>
                                <input type="text" name='firstname' placeholder='firstname' className='form-control'/>

                        </div>
                        <div className='flex-grow-1'>
                                <input type="text" name='lastname' placeholder='lastname' className='form-control'/>

                        </div>
                        <div className='w-100'>
                        <input type="text" name='address' placeholder='Address' className='form-control'/>

                        </div>
                        <div className='w-100'>
                        <input type="text" name='fulladdress' placeholder='Apartment,Street' className='form-control'/>
                           

                        </div>
                        <div className='flex-grow-1'>
                                <input type="text" name='city' placeholder='City' className='form-control'/>

                        </div>
                        <div className='flex-grow-1'>
                                <input type="text" name='state' placeholder='State' className='form-control'/>

                        </div>
                        <div className='flex-grow-1'>
                                <input type="number" name='zipcode' placeholder='Zip Code' className='form-control'/>

                        </div>

                    </form>

                    <div className='d-flex justify-content-between' >
                        <div>
                        <IoIosArrowBack className='mx-2 my-5' />
                        <Link to="/cart" className='text-dark'>Return to Cart</Link>
                        </div>
                        <div className=' align-items-center  mt-5'>
                        <Link to="/cart" className='button py-3  border-0 ' type='submit'>Continue to Shipping</Link> 

                        </div>

                    </div>
                  
                </div>

            </div>
            <div className="col-6 py-4 ">

                <div className='border-bottom'>  
                    <div className=' justify-content-center align-items-center d-flex '>
                        <div className='product-image w-25 position-relative mt-4'>
                            <span className='badge bg-warning text-white rounded-circle p-2 position-absolute' style={{top:"-20px", right:"2px"}} >1</span>
                            <img src={headphone} alt="" />
                           

                        </div>
                        <div className='product-details mx-4 '>
                        <h5 className='title'>wishlist Kids headsphones bilk 10 pack multi colored for students</h5>

                        </div>
                        <div className='price'>
                        <h4 className='price '>$100.00</h4>


                        </div>

                    </div>
                      <div className=' justify-content-center align-items-center d-flex '>
                        <div className='product-image w-25 position-relative mt-4'>
                            <span className='badge bg-warning text-white rounded-circle p-2 position-absolute' style={{top:"-20px", right:"2px"}} >1</span>
                            <img src={headphone} alt="" />
                        </div>
                        <div className='product-details mx-4 '>
                        <h5 className='title'>wishlist Kids headsphones bilk 10 pack multi colored for students</h5>

                        </div>
                        <div className='price'>
                        <h4 className='price '>$100.00</h4>


                        </div>

                    </div>
                  

                </div>

                <div className='border-bttom py-4'>
                <div className='d-flex justify-content-between align-items-center'>
                    <p>Sub Total</p>
                    <h5>$200.00</h5>
                </div>
                <div className='d-flex justify-content-between border-bottom  align-items-center'>
                    <p>Shipping</p>
                    <h5>$17.25</h5>
                </div>
                </div>
                <div className='d-flex justify-content-between align-items-center py-4'>
                    <h4>Total</h4>
                    <h3>$ 100.00</h3>

                </div>

            </div>
        </div>
    
    </Container>
      
    </>
  )
}

export default Checkout;
