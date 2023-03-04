import React, { useState } from 'react'
import BreadCrumb from '../components/BreadCrumb'
import Meta from '../components/Meta'
import ReactStars from "react-rating-stars-component";
import ProductCard from '../components/ProductCard';
import Colors from './Colors';
import Container from '../components/Container';



const OurStore = () => {
    const [grid, setGrid] = useState(4);
    // alert(grid);
     
  
            
  return (
    <>
    <Meta title={"Our store"}/>
    <BreadCrumb  title="Our Store" />
    
    <Container class1="store-wrapper home-wrapper-2  py-5">
       
            <div className="row">
                <div className="col-3">
                    <div className='filter-card  mb-3'>
                        <div >
                            <h3 className="filter-title">Shop by Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>watch</li>
                                    <li>tv</li>
                                    <li>camere</li>
                                    <li>laptop</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <h3 className="filter-title">Filter By</h3>
                        <div >
                            <h5 className="sub-title">Availability</h5>
                            <div className="form-check">
                                <input  className='form-check-input' type="checkbox" value="" id="" />
                                <label className="form-check-label" htmlFor="">In Stock(2)</label>
                            </div>
                            <div className="form-check">
                                <input  className='form-check-input' type="checkbox" value="" id="" checked />
                                <label className="form-check-label" htmlFor="">Out of Stock(0)</label>
                            </div>
                            <h5 className="sub-title">Prices</h5>
                            <div className='d-flex  gap-10'>
                            <div className="form-floating ">
                                <input type="text" className="form-control" py-2 id="floatingInput" placeholder="from" />
                                <label htmlFor="floatingInput">From</label>
                                </div>
                                <div className="form-floating">
                                <input type="text" className="form-control"  py-2 id="floatingPassword" placeholder="to" />
                                <label htmlFor="floatingPassword">To</label>
                                </div>

                            </div>
                            <h5 className="sub-title">Colors</h5>
                            <div>
                                <Colors />

                            </div>
                            <h5 className="sub-title">Size</h5>
                            <div>
                            <div className="form-check">
                                <input  className='form-check-input' type="checkbox" value="" id="1" checked />
                                <label className="form-check-label" htmlFor="1">S(0)</label>
                            </div>
                            <div className="form-check">
                                <input  className='form-check-input' type="checkbox" value="" id="2"  />
                                <label className="form-check-label" htmlFor="2">M(0)</label>
                            </div>
                            <div className="form-check">
                                <input  className='form-check-input' type="checkbox" value="" id="3"  />
                                <label className="form-check-label" htmlFor="3">L(0)</label>
                            </div>
                            <div className="form-check">
                                <input  className='form-check-input' type="checkbox" value="" id="4"  />
                                <label className="form-check-label" htmlFor="4">XL(0)</label>
                            </div>
                            <div className="form-check">
                                <input  className='form-check-input' type="checkbox" value="" id="5"  />
                                <label className="form-check-label" htmlFor="5">XXL(0)</label>
                            </div>
                            </div>

                            
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                    <h3 className="filter-title">Products Tags</h3>
                        <div >
                           <div className="product-tags d-flex flex-wrap align-items-center gap-10" >
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3' >Headphones</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3' >Laptop</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3' >Mobile</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3' >oppo</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3' >Speakers</span>
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3' >Tablet</span> 
                            <span className='badge bg-light text-secondary rounded-3 py-2 px-3' >Wire</span>


                           </div>
                            
                        </div>
                    </div>
                    <div className='filter-card mb-3'>
                        <div >
                            <h3 className="filter-title">Random Products</h3>
                            <div>
                                <div className="random-products mb-3 d-flex">
                                    <div className='w-50'>
                                        <img src="images/watch.jpg" className='img-fluid' alt="" />
                                    </div>
                                    <div className='w-50'>
                                       <h5>Kids Headphones Bilk 10 pack Multi colored for...
                                       </h5>
                                       <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={false}
                                        />
                                        <p className='price'><b>$100.00</b></p>


                                    </div>

                                </div>
                                <div className="random-products d-flex">
                                    <div className='w-50'>
                                        <img src="images/watch.jpg" className='img-fluid' alt="" />
                                    </div>
                                    <div className='w-50'>
                                       <h5>Kids Headphones Bilk 10 pack Multi colored for...
                                       </h5>
                                       <ReactStars
                                            count={5}
                                            // onChange={ratingChanged}
                                            size={24}
                                            activeColor="#ffd700"
                                            value={3}
                                            edit={false}
                                        />
                                        <p className='price'><b>$100.00</b></p>

                                    </div>

                                </div>
                            </div>
                        </div>
                    </div>
                   

                </div>
                <div className='col-9 '>
                    <div className="filter-sort-grid mb-5">
                        <div className="d-flex justify-content-between align-items-center">
                            <div className="d-flex align-item-center gap-10">
                                <p className='mb-0 d-block align-items-center justify-content-center' style={{"width": "100px"}} > Sort By:</p>
                                <select  name="" className='form-control form-select' id="">
                                    <option value="manual">Featured</option>
                                    <option value="best-selling">Best selling</option>
                                    <option value="title-ascending">Alphabatically, A-Z</option>
                                    <option value="title-descending">Alphabatically, Z-A</option>
                                    <option value="price-ascending">price, low to high</option>
                                    <option value="price-descending"> price, high to low</option>
                                    <option value="created-ascending"> date, old to new</option>
                                    <option value="created-descending"> date, new to old</option>

                                </select>
                            </div>
                            <div className='d-flex align-items-center gap-10'>
                                <p className='totalproducts mb-0'>21 Products</p>
                                <div className="d-flex align-item-center gap-10 grid">
                                    <img onClick={() => {setGrid(3)}} src="images/gr4.svg" className='d-block img-fluid' alt="" />
                                    <img onClick={() => {setGrid(4)}} src="images/gr3.svg" className='d-block img-fluid' alt="" />
                                    <img onClick={() => {setGrid(6)}} src="images/gr2.svg" className='d-block img-fluid' alt="" />
                                    <img onClick={() => {setGrid(12)}} src="images/gr.svg" className='d-block img-fluid' alt="" />
                                </div>

                            </div>
                        </div>

                    </div>
                    <div className='products-list pb-5' >

                       <div className="d-flex gap-10 flex-wrap">
                       <ProductCard grid={grid}/>
                       </div>

                    </div>
                </div>
            </div>
        

    </Container>
       
      
    </>
  )
}

export default OurStore;
