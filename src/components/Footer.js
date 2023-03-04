import React from 'react'
import {Link} from "react-router-dom";
import {BsLinkedin,BsGithub,BsInstagram,BsYoutube} from "react-icons/bs";
import newsletter from "../images/newsletter.png";


const Footer = () => {
  return (
    <>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row align-items-center">
          <div className="col-5">
            <div className="footer-top-data gap-30 d-flex align-items-center">
              <img src={newsletter} alt="" />
              <h3 className='text-white mb-0 '>Sign Up for Newletter</h3>
            </div>
          </div>
          <div className='col-7'>
          <div className="input-group">
            <input type="text" className="form-control py-1" placeholder="enter your email address..." aria-label="enter your email address..." aria-describedby="basic-addon2" />
            <span className="input-group-text p-2" id="basic-addon2">Subscibe</span> 
          </div>
          </div> 
        </div>
      </div>
    </footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-4">
            <h5 className='text-white mb-4'>Contact Us</h5>
            <div className='text-white'>
              <address className='fs-8'>
                H.No:1234 Near Mettuguda <br />Hyderbad <br />Pincode: 500017.
              </address>
              <Link href="tel:7673937170" className='mt-3 d-block mb-0 text-white'>+91 7673937170</Link>
              <Link href="emailto:mad@gmail.com" className='mt-2 d-block mb-4 text-white'>mad@gmail.com</Link>
              <div className='social-icons d-flex align-items-center gap-15 '>
                <Link className='social-icon text-white fs-5'><BsGithub /></Link>
                <Link className='social-icon text-white fs-5'><BsInstagram /></Link>
                <Link className='social-icon text-white fs-5'><BsLinkedin /></Link>
                <Link className='social-icon text-white fs-5'><BsYoutube /></Link>

              </div>
            </div>
          </div>
          <div className="col-3">
            <h5 className='text-white mb-4'>Information</h5>
            <div>
            <div className='footer-links d-flex flex-column'>
              <Link to="/privacy-policy"  className="text-white py-2 mb-1">Privacy Policy</Link>
              <Link to="/refund-policy" className="text-white py-2 mb-1">Refund Policy</Link>
              <Link to="/shipping-policy" className="text-white py-2 mb-1">Shipping Policy</Link>
              <Link to="/term-conditions" className="text-white py-2 mb-1">Terms & Conditions</Link>
              <Link to="/blogs" className="text-white py-2 mb-1">Blogs</Link>
            </div>
            </div>
          </div>
          <div className="col-3">
            <h5 className='text-white mb-4'>Account</h5>
            <div>
               <div className='footer-links d-flex flex-column'>
                  <Link className="text-white py-2 mb-1">Search</Link>
                  <Link className="text-white py-2 mb-1">About us</Link>
                  <Link className="text-white py-2 mb-1">F&Q</Link>
                  <Link className="text-white py-2 mb-1">Contact</Link>
                  <Link className="text-white py-2 mb-1">Size Chart</Link>
               </div>
            </div>
          </div>
          <div className="col-2">
            <h5 className='text-white mb-4'>Quick Links</h5>
            <div className='footer-links d-flex flex-column'>
              <Link className="text-white py-2 mb-1">Accessories</Link>
              <Link className="text-white py-2 mb-1">Laptops</Link>
              <Link className="text-white py-2 mb-1">Headphones</Link>
              <Link className="text-white py-2 mb-1">Smart watches</Link>
              <Link className="text-white py-2 mb-1">Tablets</Link>
            </div>
          </div>
        </div>
      </div>
    </footer>
    <footer></footer>
    <footer className='py-4'>
      <div className="container-xxl">
        <div className="row">
          <div className="col-12">
            <p className='text-center mb-0 text-white'>&copy; { new Date().getFullYear()}; Powered by Madhunithiin</p>
          </div>
        </div>
      </div>
    </footer>
    </>
  )
}

export default Footer;
