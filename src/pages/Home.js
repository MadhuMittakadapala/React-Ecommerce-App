import React from 'react';
import {Link} from "react-router-dom";
import Marquee from "react-fast-marquee";
import BlogCard from '../components/BlogCard';
import ProductCard from '../components/ProductCard';
import SpecialProducts from '../components/SpecialProducts';
import mainbanner from "../images/main-banner-1.jpg"
import catbanner from "../images/catbanner-01.jpg" ;
import catbanner2 from "../images/catbanner-02.jpg" ;
import catbanner3 from "../images/catbanner-03.jpg";
import catbanner4 from "../images/catbanner-04.jpg";
import service from  "../images/service.png"
import service2 from  "../images/service-02.png"
import service3 from  "../images/service-03.png";
import service4 from  "../images/service-04.png";
import service5 from "../images/service-05.png";
import camera from  "../images/camera.jpg";
import smarttv from "../images/tv.jpg";
import headphone from "../images/headphone.jpg";
import tv from "../images/tv.jpg";
import smartwatch7 from "../images/SmartwatchSeries7.jpg";
import iphone13 from "../images/iPhone-13-Pro.jpeg";
import rf from "../images/rf.jpg";
import lp from "../images/lp.jpg"
import Container from '../components/Container';
import services  from "../utils/Data"



const Home = () => {
  return (

  <>
  <Container class1="home-wrapper-1 py-5">
  <div className="row">
        <div className="col-6">
          <div className='main-banner  position-relative'>
            <img src={mainbanner} alt="main banner" className='img-fluid rounded-3' />
            <div className="main-banner-content position-absolute">
              <h3 className=''>Supercharged for prods</h3>
              <h2>Specail Sale</h2>
              <p>From $999.0 or $41.64/mo <br />for 24 mo.Footnote*</p>
              <Link className='button'>Buy Now</Link>
            </div>
            

          </div>
        </div>
        <div className="col-6">
          <div className="d-flex flex-wrap gap-10 justify-content-between align-items-center">
          <div className='small-banner  position-relative'>
            <img src={catbanner} alt="small banner" className='img-fluid rounded-3' />
            <div className="small-banner-content position-absolute">
              <h4 className=''>Best Sale</h4>
              <h5>Laptop Max </h5>
              <p>From $999.0 or $41.64/mo <br />for 24 mo.Footnote*</p>
            </div>
            

          </div>
          <div className='small-banner  position-relative'>
            <img src={catbanner2} alt="small banner" className='img-fluid rounded-3' />
            <div className="small-banner-content position-absolute">
              <h4 className=''>New Arrival</h4>
              <h5>SmartWatch 7</h5>
              <p>From $999.0 or $41.64/mo <br />for 24 mo.Footnote*</p>
            </div>
            

          </div>
          <div className='small-banner  position-relative'>
            <img src={catbanner3} alt="small banner" className='img-fluid rounded-3' />
            <div className="small-banner-content position-absolute">
              <h4 className=''>Super Offers</h4>
              <h5>Buy iPad Air</h5>
              <p>From $999.0 or $41.64/mo <br />for 24 mo.Footnote*</p>
            </div>
            

          </div>
          <div className='small-banner position-relative'>
            <img src={catbanner4} alt="small banner" className='img-fluid rounded-3' />
            <div className="small-banner-content position-absolute">
              <h4 className=''>Free Engraving</h4>
              <h5>Specail Sale</h5>
              <p>From $999.0 or $41.64/mo <br />for 24 mo.Footnote*</p>
            </div>
            

          </div>
          </div>
        </div>
      </div>
  </Container>

  <Container class1="home-wrapper-2 py-5">
  <div className="row">
        <div className="col-12">
          <div className="services d-flex align-items-center justify-content-between">
            {
              services?.map((i, j ) => {
             
                return (
                  <div className="d-flex align-items-center gap-15" key={j}>
                  <img src={i.image} alt="services" />
                  <div>
                  <h6>{i.title}</h6>
                  <p className="mb-0"> {i.tagline} </p>
                 </div>
                  
              </div>



                )
  

              })
            }
          </div>
        </div>
      </div>

  </Container>

  <Container class1="home-wrapper-3 py-5">
  <div className="row" >
      <div className="clo-12">
        <div className="categories d-flex flex-wrap justify-content-between align-items-center" > 
        <div className='d-flex gap-30 align-items-center'>
          <div>
            <h6>Cameras</h6>
            <p>10 Items</p>
          </div>
          <img src={camera} alt="camera" />
        </div>
        <div className='d-flex gap-30 align-items-center'>
          <div>
            <h6>Music & Gaming</h6>
            <p>10 Items</p>
          </div>
          <img src={camera} alt="camera" />
        </div>
        <div className='d-flex gap-30 align-items-center'>
          <div>
            <h6>Smart TVs</h6>
            <p>10 Items</p>
          </div>
          <img src={smarttv} alt="smart tv" />
        </div>
        <div className='d-flex gap-30 align-items-center'>
          <div>
            <h6>Smart Watches</h6>
            <p>10 Items</p>
          </div>
          <img src={headphone} alt="headphone" />
        </div>
        <div className='d-flex gap-30 align-items-center'>
          <div>
            <h6>Cameras</h6>
            <p>10 Items</p>
          </div>
          <img src={camera} alt="camera" />
        </div>
        <div className='d-flex gap-30 align-items-center'>
          <div>
            <h6>Cameras</h6>
            <p>10 Items</p>
          </div>
          <img src={camera} alt="camera" />
        </div>
        <div className='d-flex gap-30 align-items-center'>
          <div>
            <h6>Smart TVs</h6>
            <p>10 Items</p>
          </div>
          <img src={tv} alt="tv" />
        </div>
        <div className='d-flex gap-30 align-items-center'>
          <div>
            <h6>Smart Watches</h6>
            <p>10 Items</p>
          </div>
          <img src={headphone} alt="headphone" />
        </div>
        
        </div>
      </div>
      </div>

  </Container>

  <Container class1="featured-wrapper d-flex py-5 home-wrapper-2">
  <div className="row">
      <div className="col-12">
      <h3 className='section-heading'>Featured Collections</h3>
      </div>
  
    <ProductCard />
    <ProductCard />
    <ProductCard />
    <ProductCard />
      </div>

  </Container>

  <Container class1="famous-wrapper py-5 home-wrapper-2">
  <div className="row">
        <div className="col-3">
          <div className="famous-card position-relative ">
            
            <img src={smartwatch7} className='img-fluid' alt="" /> 
            <div className="famous-content position-absolute">
            <h6>BIG SCREEN</h6>
            <h3>Smart Watch Series 7</h3>
            <p>From $299 or $16.56/mo for 24 mo*</p>
            </div>
            <div>
             
            </div>

          </div>
          

        </div>
        <div className="col-3">
          <div className="famous-card position-relative ">
            
            <img src={iphone13} className='img-fluid' alt="" /> 
            <div className="famous-content position-absolute">
            <h6>smart phones</h6>
            <h3>iPhone-13-Pro</h3>
            <p>Now in Green.  form $999.00 or $41.62/mo.for 24 mo. footnote</p>
            </div>
            <div>
             
            </div>

          </div>
          

        </div>
        <div className="col-3">
          <div className="famous-card position-relative ">
            
            <img src={rf} className='img-fluid' alt="rf" /> 
            <div className="famous-content position-absolute">
            <h6>home speaker</h6>
            <h3>Room Filling Sound</h3>
            <p>From $699 or $116.56/mo for 24 mo*</p>
            </div>
            <div>
             
            </div>

          </div>
          

        </div>
        <div className="col-3">
          <div className="famous-card position-relative ">
            
            <img src={lp} className='img-fluid' alt="lp" /> 
            <div className="famous-content position-absolute">
            <h6>Studio Diplay</h6>
            <h3>Laptops</h3>
            <p>27inch. 5k Retina Display</p>
            </div>
            <div>
             
            </div>

          </div>
          

        </div>
      </div>

  </Container>

  <Container class1="special-wrapper py-5 home-wrapper-2">
    <div className="row">
          <div className="col-12">
            <h3 className='section-heading'>Special Products</h3>

          </div>
        </div>
        <div className="row ">
          <SpecialProducts />
          <SpecialProducts />
          <SpecialProducts />
        </div>

  </Container>

  <Container class1="popular-wrapper d-flex  home-wrapper-2">
  <div className="row ">
      <h3 className='section-heading'>Our Popular Products</h3>
      <div className="row">
          <div className="col-12 d-flex gap-3 ">
              <ProductCard />
              <ProductCard />
             
          </div>
      </div>
      
      </div>

  </Container>

  <Container class1="marquee-wrapper py-5">
  <div className="row">
        <div className="col-12">
          <div className="marquee-inner-wrapper card-wrapper">
          <Marquee>
            <div className="mx-4 w-25">
              <img src="images/brand-01.png" alt="brand" />
            </div>
            <div className="mx-4 w-25">
              <img src="images/brand-01.png" alt="brand" />
            </div>
            <div className="mx-4 w-25">
              <img src="images/brand-02.png" alt="brand" />
            </div>
            <div className="mx-4 w-25">
              <img src="images/brand-03.png" alt="brand" />
            </div>
            <div className="mx-4 w-25">
              <img src="images/brand-04.png" alt="brand" />
            </div>
            <div className="mx-4 w-25">
              <img src="images/brand-05.png" alt="brand" />
            </div>
            <div className="mx-4 w-25">
              <img src="images/brand-06.png" alt="brand" />
            </div>
            <div className="mx-4 w-25">
              <img src="images/brand-07.png" alt="brand" />
            </div>
            <div className="mx-4 w-25">
              <img src="images/brand-08.png" alt="brand" />
            </div>
          </Marquee>

          </div>
        </div>
      </div>

  </Container>

  <Container class1="blog-wrapper d-flex py-5 home-wrapper-2">
  <div className="row">
      <div className="col-12">
      <h3 className='section-heading'>Our Latest Blogs</h3>
      </div>
    
     </div>
     <div className="row">
      <div className="col-3">
      <BlogCard />
      </div>
      <div className="col-3">
      <BlogCard />
      </div>
      <div className="col-3">
      <BlogCard />
      </div>
      <div className="col-3">
      <BlogCard />
      </div>
      </div>

  </Container>



  </>

  )
}

export default Home;
