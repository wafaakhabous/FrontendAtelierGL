// Comments.js
import React from 'react';


const Comments = () => {
  return (
    <div className="container">
      <div className="row">
        <div className="col-md-offset-1 col-md-10 col-sm-12">
          <div className="blog-single-post-thumb">
            <div className="blog-comment">
              <h3>Comments</h3>
              <div className="media">
                <div className="media-object pull-left">
                  <img src={'../images/comment-image1.jpg'} className="img-responsive img-circle" alt="Blog Image 11" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">David Jones</h3>
                  <span>3 days ago</span>
                  <p>Aliquam gravida arcu at risus blandit, in interdum metus varius. Cras efficitur, ex sit amet tincidunt rhoncus, dui ex hendrerit risus, ac dapibus ligula mi id leo. In auctor dui justo, ac consequat dui posuere ac.</p>
                </div>
              </div>
              <div className="media">
                <div className="media-object pull-left">
                  <img src={'../images/comment-image2.jpg'} className="img-responsive img-circle" alt="Blog Image 22" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Omar Larus</h3>
                  <span>5 days ago</span>
                  <p>Maecenas ultricies ante dignissim, iaculis ligula sed, gravida ipsum. Pellentesque lobortis velit mi, sed volutpat enim facilisis.</p>
                </div>
              </div>
              <div className="media">
                <div className="media-object pull-left">
                  <img src={'../images/comment-image1.jpg'} className="img-responsive img-circle" alt="Blog Image 33" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Walker Jen</h3>
                  <span>July 27, 2017</span>
                  <p>In eu posuere nulla, sit amet semper lectus. Aliquam gravida arcu at risus blandit, in interdum metus varius. Cras efficitur, ex sit amet tincidunt rhoncus, dui ex hendrerit risus, ac dapibus ligula mi id leo.</p>
                </div>
              </div>
              <div className="media">
                <div className="media-object pull-left">
                  <img src={'../images/comment-image2.jpg'} className="img-responsive img-circle" alt="Blog Image 44" />
                </div>
                <div className="media-body">
                  <h3 className="media-heading">Jen Lopez</h3>
                  <span>July 24, 2017</span>
                  <p>In auctor dui justo, ac consequat dui posuere ac. Lorem ipsum dolor sit amet, maecenas eget vestibulum justo imperdiet, wisi risus purus augue vulputate voluptate neque, curabitur.</p>
                </div>
              </div>
            </div>

            <div className="blog-comment-form">
              <h3>Leave a Comment</h3>
              <form action="#" method="post">
                <input type="text" className="form-control" placeholder="Name" name="name" required />
                <input type="email" className="form-control" placeholder="Email" name="email" required />
                <textarea name="message" rows="5" className="form-control" id="message" placeholder="Message" message="message" required="required"></textarea>
                <div className="col-md-3 col-sm-4">
                  <input name="submit" type="submit" className="form-control" id="submit" value="Post Your Comment" />
                </div>
              </form>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Comments;
