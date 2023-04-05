import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../feed.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      setPosts(result.data);
    };
    fetchData();
    setTimeout(() => {
      setActive(true);
    }, 100);
  }, []);

  const handleLike = async (postId) => {
    try {
      const response = await axios.post(
        `https://jsonplaceholder.typicode.com/posts/${postId}`,
        {
          title: "foo",
          body: "bar",
          userId: 1,
          id: postId
        }
      );
      const updatedPosts = posts.map((post) => {
        if (post.id === postId) {
          return response.data;
        }
        return post;
      });
      setPosts(updatedPosts);
    } catch (error) {
      console.error(error);
    }
  };

  const handleComment = async (postId) => {
    console.log(`Commenting on post with id ${postId}`);
  };

  return (
    // <div>
    //   <Navbar />
    // <div className="feed-container">
    //   {posts.map((post) => (
    //     <div className="post-tile" key={post.id}>
    //       <div className="post-header">
    //         <div className="profile-pic"></div>
    //         <h3>{post.title}</h3>
    //       </div>
    //       <div className="post-content">
    //         <p>{post.body}</p>
    //       </div>
    //       <div className="post-footer">
    //         <label>User: {post.userId}</label>
    //         <button onClick={() => handleLike(post.id)}>Like</button>
    //         <button onClick={() => handleComment(post.id)}>Comment</button>
    //         <p>Likes: {post.id}</p>
    //         <p>Comments: 0</p>
    //       </div>
    //     </div>
    //   ))}
    // </div>
    // <Footer />
    // </div>
    <div>
      <Navbar />
      <div className={`feed-container fade-in ${active ? 'active' : ''}`}>
        {posts && (
          <div className="post-grid">
            {posts.map((post) => (
              <div className="post-tile" key={post.id}>
                <div className="post-header">
                  <div className="profile-pic"></div>
                  <h3>{post.title}</h3>
                </div>
                <div className="post-content">
                  <p>{post.body}</p>
                </div>
                <div className="post-footer">
                  <label>User: {post.userId}</label>
                  <button onClick={() => handleLike(post.id)}>Like</button>
                  <button onClick={() => handleComment(post.id)}>Comment</button>
                  <p>Likes: {post.id}</p>
                  <p>Comments: 0</p>
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
      <Footer />
    </div>
  );
};

export default Feed;