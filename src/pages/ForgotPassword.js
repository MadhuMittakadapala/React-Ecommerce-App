import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from "../components/Container"
import CustomInput from '../components/CustomInput';

const ForgotPassword = () => {
  return (
    <>
    <Meta title={"Forgt Password"}/>
    <BreadCrumb  title="Forgot Password" />

    <Container class1='login-wrapper py-5 home-wrapper-2'>
        <div className="row">
            <div className="col-12">
                <div className="login-card">
                   
                    <form action="" className='d-flex flex-column py-3'>
                        
                        <div className='auth-card'>
                         <h3 className='text-center mb-2 '>Reset Your Password</h3>
                         <p className='text-center mt-2 mb-0'>we will send you an email to reset your password</p>

                         <div>
                         <CustomInput type="email"  name='email' placeholder='Email Address' className=' my-3 '/>
                         </div>
                         <div>
                       
                      
                         </div>

                        <div className='d-flex flex-column justify-content-center align-items-center  gap-15 mt-5'>
                            <button className='button login border-0 ' type='submit'>Submit</button>
                        <Link to="/login" className='forgot-password '>Cancel</Link>

                         
                        </div>
                        </div>
                    </form>
                </div>
            </div>
        </div>

    </Container>
      
    </>
  )
}

export default ForgotPassword;
