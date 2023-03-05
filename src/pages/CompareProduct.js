import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import Colors from './Colors';
import Container from "../components/Container"
import cross from "../images/cross.svg"
import watch from "../images/watch.jpg"

const CompareProduct = () => {
  return (
    <>
    
    <Meta title={"Compare-Products"}/>
    <BreadCrumb  title="Compare-Products" />

    <Container class1='compare-product-wrapper py-5 home-wrapper-2'>
       
            <div className="row">
                <div className="col-3">
                    <div className="compare-product-card position-relative">
                        <img src={cross} alt="cross" className='position-absolute cross'/>
                        <div className="product-card-image">
                            <img src={watch} alt="watch"  className=' img-fluid'/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className='title'>Huawei Mediapad 7 T1-701U Tablet (WiFi, 3G, Voice</h5>
                            <h6 className="price mb-3 mt-5">$100.00</h6>
                        </div>
                        <div>
                            <div className='product-detail'>
                                <h5 >Brand:</h5><p>Havels</p>

                            </div>
                            <div className='product-detail'>
                                <h5 >Type:</h5><p>Havels</p>

                            </div>
                            <div className='product-detail'>
                                <h5 >SKU:</h5><p>SKU00123</p>

                            </div>
                            <div className='product-detail'>
                                <h5 >Availability:</h5><p> In Stock</p>

                            </div>
                            <div className='product-detail'>
                                <h5 >Color:</h5>
                                <Colors />

                            </div>
                            <div className='product-detail'>
                                <h5 >Size:</h5>
                                <div className='d-flex gap-10'>
                                <p>S</p><p>M</p><p>L</p><p>XL</p><p>XXL</p>

                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
                <div className="col-3">
                    <div className="compare-product-card position-relative ">
                        <img src={cross} alt="cross" className='position-absolute cross  img-fluid'/>
                        <div className="product-card-image  img-fluid">
                            <img src={watch} alt="watch"  className=' img-fluid'/>
                        </div>
                        <div className="compare-product-details">
                            <h5 className='title'>Huawei Mediapad 7 T1-701U Tablet (WiFi, 3G, Voice</h5>
                            <h6 className="price mb-3 mt-5">$100.00</h6>
                        </div>
                        <div>
                            <div className='product-detail'>
                                <h5 >Brand:</h5><p>Havels</p>

                            </div>
                            <div className='product-detail'>
                                <h5 >Type:</h5><p>Havels</p>

                            </div>
                            <div className='product-detail'>
                                <h5 >SKU:</h5><p>SKU00123</p>

                            </div>
                            <div className='product-detail'>
                                <h5 >Availability:</h5><p> In Stock</p>

                            </div>
                            <div className='product-detail'>
                                <h5 >Color:</h5>
                                <Colors />

                            </div>
                            <div className='product-detail'>
                                <h5 >Size:</h5>
                                <div className='d-flex gap-10'>
                                <p>S</p><p>M</p><p>L</p><p>XL</p><p>XXL</p>

                                </div>

                            </div>
                            
                        </div>
                    </div>
                </div>
            </div>
       

    </Container>

      
    </>
  )
}

export default CompareProduct;
