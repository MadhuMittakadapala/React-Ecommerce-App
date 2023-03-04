import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import watch from "../images/watch.jpg"
import {MdDelete} from "react-icons/md"
import { Link } from 'react-router-dom';
import Container from '../components/Container';


const Cart = () => {
  return (
    <>
    <Meta title={"Cart"} />
    <BreadCrumb  title="Cart" />

    <Container class1="cart-wrapper home-wrapper-2 py-5">
        
            <div className="row">
                <div className="col-12">
                    <div className="cart-header py-3 d-flex align-items-center justify-content-between">
                        <h4 className='cart-col-1'>Product</h4>
                        <h4 className='cart-col-2'>Price</h4>
                        <h4 className='cart-col-3'>Quantity</h4>
                        <h4 className='cart-col-4'>Total</h4>
                    </div>
                    <div className="cart-data py-3 mb-2 d-flex align-items-center justify-content-between">
                        <div className='cart-col-1 d-flex gap-15 align-items-center'>
                            <div>
                                <img src={watch} className="img-fluid" alt="product image" />
                            </div>
                            <div className='w-75'>
                                <h5>Smart watch</h5>
                                <p className="color">Color: red</p>
                                <p className="size">Size: small</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5> $100.00</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input type="number" className='form-control ' min={1} max={10}/>
                            </div>
                            <div>
                            <MdDelete className='text-dark fs-3 ' />

                            </div>
                        </div>
                        <div className='cart-col-4'>
                        <h5> $100.00</h5>
 
                        </div>


                    </div>
                    <div className="cart-data py-3 mb-2 d-flex align-items-center justify-content-between">
                        <div className='cart-col-1 d-flex gap-15 align-items-center'>
                            <div>
                                <img src={watch} className="img-fluid" alt="product image" />
                            </div>
                            <div className='w-75'>
                                <h5>Smart watch</h5>
                                <p className="color">Color: Grey</p>
                                <p className="size">Size: -</p>
                            </div>
                        </div>
                        <div className='cart-col-2'>
                            <h5> $100.00</h5>
                        </div>
                        <div className='cart-col-3 d-flex align-items-center gap-15'>
                            <div>
                                <input type="number" className='form-control ' min={1} max={10}/>
                            </div>
                            <div>
                            <MdDelete className='text-dark fs-3 ' />

                            </div>
                        </div>
                        <div className='cart-col-4'>
                        <h5> $100.00</h5>
 
                        </div>


                    </div>
                    <div className='d-flex justify-content-between align-items-baseline'>
                        
                        <div className=' mb-2 mt-5'>
                            <Link to="/product" className='button py-2 border-0 ' type='submit'>Continue Shopping</Link> 
                        </div>
                        <div>
                            <h4>Sub Total: $100.00</h4>
                            <p>Taxes and shipping calculated at checkout</p>
                            <Link to="/checkout" className='button py-2 border-0 ' type='submit'>Check Out</Link> 


                        </div>
                    </div>
                </div>
            </div>
       

    </Container>
      
    </>
  )
}

export default Cart;
