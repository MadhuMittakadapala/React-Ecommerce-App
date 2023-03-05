import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';


const SignUp = () => {
  return (
    <>
     <Meta title={"SignUp Account"} />
    <BreadCrumb  title="SignUp Account" />

    <Container class1='signup-wrapper py-5 home-wrapper-2'>
       
        <div className="row">
            <div className="col-12">
                <div className="singup-card">
                   
                    <form action="" className='d-flex flex-column py-3'>
                        
                        <div className='auth-card'>
                         <h3 className='text-center mb-2 '>Sign Up</h3>
                         <p className='text-center mt-2 mb-0'>create your account </p>
                         <div>
                         <CustomInput type="text"  name='firstname' placeholder='Enter your firstname' className=' my-3 '/>
                         <CustomInput type="text"  name='lastname' placeholder='Enter your lastname' className=' my-3 '/>
                         <CustomInput type="email"  name='email' placeholder='Enter your email address' className=' my-3 '/>
                         <CustomInput type="password"  name='password' placeholder='Enter your password' className=' my-3 '/> 
                         <div className='d-flex flex-column justify-content-center align-items-center  gap-15 mt-5'>
                            <button className='button   border-0 ' type='submit'>Submit</button> 
                        <Link to="/login" className='forgot-password '>Back</Link>

                        </div>
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

export default SignUp;

