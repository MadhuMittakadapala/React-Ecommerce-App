import React from 'react'
import BreadCrumb from '../components/BreadCrumb';      
import Meta from '../components/Meta';
import { Link } from 'react-router-dom';
import {BsArrowLeft} from "react-icons/bs"
import  blog from "../images/blog-1.jpg"
import Container from '../components/Container';


const SingleBlog = () => {
  return (
    <>
       <Meta title={"Single Blog "}/>
       <BreadCrumb  title="Single Blog " />

        
    <Container class1="blog-wrapper py-5 home-wrapper-2">
        
            <div className="row">
            <div className="col-3">
                <div className='filter-card  mb-3'>
                        <div >
                            <h3 className="filter-title">Filter by Categories</h3>
                            <div>
                                <ul className='ps-0'>
                                    <li>Home</li>
                                    <li>Our Store</li>
                                    <li>Blog</li>
                                    <li>Contact</li>
                                </ul>
                            </div>
                        </div>
                    </div>
                </div>
                <div className="col-9">
                  <div className="single-blog-card">
                    <h3 className='title'>A Beautiful Sunday  Morning  Renaissance</h3>
                    <div className="blog-image">
                      <img src={blog} className='img-fluid w-100 my-4' alt="blog" />
                    </div>
                    <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eligendi ipsum a voluptas corrupti id blanditiis earum, veritatis modi dolorem? A, illo nihil. Ducimus facere vel ipsam omnis rerum eveniet necessitatibus. Lorem ipsum dolor sit amet consectetur adipisicing elit. Incidunt nesciunt a deserunt hic quasi corporis vitae necessitatibus neque molestiae minima. Lorem ipsum dolor sit amet consectetur adipisicing elit. Quos quasi eius itaque libero omnis eaque, dolores voluptatibus doloribus quas veniam.</p>
                  </div>
                 <div>
                 <BsArrowLeft className='mx-2 my-5' />
                  <Link to="/blogs" className='text-dark'>Back to Blog</Link>
                 </div>
                </div>
            </div>
       
    </Container>
      
      
    </>
  )
}

export default SingleBlog
