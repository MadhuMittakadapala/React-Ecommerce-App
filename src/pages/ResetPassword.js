import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import { Link  } from 'react-router-dom';
import Container from '../components/Container';
import CustomInput from '../components/CustomInput';

const ResetPassword = () => {
  return (
    <>
     <Meta title={"Reset Password"} />
    <BreadCrumb  title="Reset Password" />

    <Container class1='reset-password-wrapper py-5 home-wrapper-2'>
     
       <div className="row">
            <div className="col-12">
                <div className="reset-password-card">
                   
                    <form action="" className='d-flex flex-column py-3'>
                        
                        <div className='auth-card'>
                         <h3 className='text-center mb-2 '>Reset Password</h3>
                         <p className='text-center mt-2 mb-0'>reset your password </p>
                         <div>
                         <CustomInput type="password"  name='password' placeholder='Enter your new password' className=' my-3 '/>
                         <CustomInput type="password"  name='conformpassword' placeholder='Conform your passwprd' className='   my-3 '/> 
                         <div className='d-flex flex-column justify-content-center align-items-center  gap-15 mt-5'>
                            <button className='button   border-0 ' type='submit'>Submit</button> 
                            <Link to="/forgot-password" className='forgot-password '>Cancel</Link>

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

export default ResetPassword
