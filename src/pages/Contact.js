import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {AiTwotoneHome,AiFillInfoCircle,AiOutlineMail} from "react-icons/ai"
import{FiPhoneCall} from "react-icons/fi"
import Container from "../components/Container"


const Contact = () => {
  return (
    <>

    <Meta title={"Contact"}/>
    <BreadCrumb  title="Contact" />

    <Container class1="contact-wrapper py-5 home-wrapper-2">
     
        <div className="row">
          <div className="col-12">
          <iframe src="https://www.google.com/maps/embed?pb=!1m14!1m12!1m3!1d10972.254984915937!2d78.5264502414822!3d17.430519630812043!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!5e0!3m2!1sen!2sin!4v1677831550336!5m2!1sen!2sin" 
          width="600" height="450" className="border-0 w-100" allowFullScreen="" loading="lazy" referrerPolicy="no-referrer-when-downgrade"></iframe>
          </div>
        </div>
        <div className="row mt-5 contact-inner-wrapper">
          <div className="col-6 ">
            <form >
              <h3 className='contact-title mb-5'>Contact us</h3>
            <input class="form-control" type="text" placeholder="enter your name" aria-label="Disabled input example"  /><br />
            <input class="form-control" type="email" placeholder="enter email address" aria-label="Disabled input example"  /><br />
            <input class="form-control" type="number" placeholder="enter mobile number" aria-label="Disabled input example"  /><br />
            <textarea class="form-control" id="exampleFormControlTextarea1" rows="3" placeholder="enter your comments..."></textarea><br />

            <Link className='button'>Send Deatils</Link>
            </form>
          </div>
          <div className="col-6 px-5">
          <h3 className='contact-title mb-5'>Get In Touch With Us</h3>
          <div>
           <ul className='ps-0'>
           <li  className='mb-3 d-flex gap-15 align-items-center '>
            <AiTwotoneHome  className='fs-5'/>
            <address className='mb-0'>H.No: 12-7-100, 
              SMR Vinay Heights,Mettuguda Hyderabad-50017</address>
            </li>
            <li className='mb-3 d-flex gap-15 align-items-center '>
            <FiPhoneCall className='fs-5' />
            <p>+91 7673937170</p>
            </li>
            <li className='mb-3 d-flex gap-15 align-items-center '>
              <AiOutlineMail  className='fs-5'/>
              <Link className='text-dark ' to="mad@gmail.com"> mad@gmail.com</Link>
            </li>
            <li className='mb-3 d-flex gap-15 align-items-center '>
              <AiFillInfoCircle className='fs-5' />
              <p>Monday to Friday 10:43AM-10:34PM</p>
            </li>
            

           </ul>
            
          </div>


          </div>
        </div>
    
    </Container>
      
    </>
  )
}

export default Contact;
