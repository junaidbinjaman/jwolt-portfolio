import React from "react";
import { AiOutlineHeart, AiOutlineShareAlt } from "react-icons/ai";
import { BiCommentDots } from "react-icons/bi";
import "./Blogs.scss";

const Blogs = () => {
  return (
    <div className="innger-blog">
      <h1>Recent Blogs</h1>
      <div className="blog-row">
        <div>
          <div className="blog-box">
            <img
              className="dfsd"
              src="https://www.treebo.com/blog/wp-content/uploads/2018/06/The-16-Most-Beautiful-Villages-In-India.jpg"
              alt=""
            />
            <div className="blog-box-content">
              <h3>Dream Village That I Like</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat quibusdam voluptates minus fugiat aspernatur? Culpa modi
                officia a? Suscipit, nulla.
              </p>
            </div>
            <div className="blog-action">
              <AiOutlineHeart className="blog-action-icon" />
              <AiOutlineShareAlt className="blog-action-icon" />
              <BiCommentDots className="blog-action-icon" />
            </div>
          </div>
        </div>
        <div>
          <div className="blog-box">
            <img
              className="dfsd"
              src="https://www.treebo.com/blog/wp-content/uploads/2018/06/The-16-Most-Beautiful-Villages-In-India.jpg"
              alt=""
            />
            <div className="blog-box-content">
              <h3>Dream Village That I Like</h3>
              <p>
                Lorem ipsum dolor, sit amet consectetur adipisicing elit.
                Placeat quibusdam voluptates minus fugiat aspernatur? Culpa modi
                officia a? Suscipit, nulla.
              </p>
            </div>
            <div className="blog-action">
              <AiOutlineHeart className="blog-action-icon" />
              <AiOutlineShareAlt className="blog-action-icon" />
              <BiCommentDots className="blog-action-icon" />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Blogs;
