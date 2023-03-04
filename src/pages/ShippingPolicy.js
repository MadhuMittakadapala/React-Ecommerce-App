import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';

import Container from '../components/Container';

const ShippingPolicy = () => {
  return (
    <>
     <Meta title= {"Shipping Policy "} />
       <BreadCrumb  title="Shipping Policy " /> 
       <Container class1="policy-wrapper py-5 home-wrapper-2">
        
          <div className="row">
            <div className="col-12">
              <div className='policy'>
                <div>
                  <h5>The Starndard lorem ipsum  passage</h5>
                  <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Iusto ratione placeat nihil repudiandae deleniti perferendis eos aperiam nostrum autem tempora harum quos quae ipsum, possimus at quia nulla temporibus provident.</p>
                </div>
                
              </div>
            </div>
          </div>
    

       </Container>
    </>
  )
}

export default ShippingPolicy;
