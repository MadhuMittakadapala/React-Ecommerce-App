import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const Login = () => {
  return (
    <>
     <Meta title={"Login Account"} />
    <BreadCrumb  title="Login Account" />

    <Container class1='login-wrapper py-5 home-wrapper-2'>
       
       <div className="row">
            <div className="col-12">
                <div className="login-card">
                   
                    <form action="" className='d-flex flex-column py-3'>
                        
                        <div className='auth-card'>
                         <h3 className='text-center mb-5 '>Login</h3>
                         <div>
                         <CustomInput type="email"  name='email' placeholder='Email Address' className=' my-3 '/>
                         </div>
                         <div>
                        <CustomInput type="password"  name="password" placeholder='Password' className=' my-3' />
                         </div>
                        <div>
                        <Link to="/forgot-password" className='forgot-password '>Forgot Your Password?</Link>
                         </div>

                        <div className='d-flex justify-content-center align-items-center gap-15 mt-5'>
                            <button className='button login border-0' type='submit'>Login</button>
                            <Link to="/signup" className='button signup'>SignUp</Link>
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

export default Login;
