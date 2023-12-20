// BlogPost.js
import React from 'react';
import '../css/style1.css'

import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faComment,faCalendar  } from '@fortawesome/free-regular-svg-icons';
const BlogPost = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-offset-1 col-md-10 col-sm-12">
          <div className="blog-post-thumb " style={{marginLeft:'240px'}} >
            <div className="blog-post-image">
              <a href="single-post.html">
                <img src={'../images/booking.jpg'} className="img-responsive" alt="Blog Image" style={{ height: '300px', width: '600px' }} />
                {/* <img
                        src={'../images/booking.jpg'}
                        alt=""
                        style={{ height: '200px', width: '260px' }}
                      /> */}
              </a>
            </div>
            <div className="blog-post-title">
              <h3><a href="single-post.html">We Help You Create Perfect Modern Design</a></h3>
            </div>
            <div className="blog-post-format">
              <span><a href="#"><img src={'../images/booking.jpg'} className="img-responsive img-circle" /> Jen Lopez</a></span>
              <span><FontAwesomeIcon icon={faCalendar} /> July 22, 2017</span>
              <span><a href="#">                  <FontAwesomeIcon icon={faComment} />
 35 Comments</a></span>
            </div>
            <div className="blog-post-des">
              <p>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.
              </p>
              <a href="single-post.html" className="btn btn-default">Continue Reading</a>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default BlogPost;
