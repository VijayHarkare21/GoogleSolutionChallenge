// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Post from './Post';
// import '../feed.css';

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       try {
//         const response = await axios.get('http://localhost:8000/api/posts/');
//         setPosts(response.data);
//       } catch (error) {
//         console.log(error);
//       }
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="feed-container">
//       <Post />
//       <hr />
//       {posts.map((post) => (
//         <div className="post-container" key={post.id}>
//           <p>{post.content}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feed;

// Second attempt
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import Post from './Post';
// import '../feed.css';

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="feed">
//       <div className="feed__header">
//         <h2>Feed</h2>
//       </div>

//       <div className="feed__posts">
//         {posts.map((post) => (
//           <Post key={post.id} post={post} />
//         ))}
//       </div>
//     </div>
//   );
// };

// export default Feed;

// Third attempt
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import Post from "./Post";

// function Feed() {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get('https://jsonplaceholder.typicode.com/posts')
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="feed">
//       {posts.map((post) => (
//         <Post
//         //   key={post.id}
//         //   profilePic={post.profilePic}
//         //   message={post.message}
//         //   timestamp={post.timestamp}
//         //   username={post.username}
//         //   image={post.image}
//         userid = {post.userId}
//         key = {post.id}
//         title = {post.title}
//         body = {post.body}
//         />
//       ))}
//     </div>
//   );
// }

// export default Feed;

// Fourth attempt
// import React, { useState, useEffect } from 'react';
// import axios from 'axios';
// import '../feed.css';

// const API_URL = 'https://jsonplaceholder.typicode.com/posts';

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios.get(API_URL)
//       .then(response => {
//         setPosts(response.data);
//       })
//       .catch(error => {
//         console.log('Error fetching posts:', error);
//       });
//   }, []);

//   const renderPosts = () => {
//     return (
//       <div className="feed-posts">
//         {posts.map(post => (
//           <div className="feed-post" key={post.id}>
//             <h3>{post.title}</h3>
//             <p>{post.body}</p>
//           </div>
//         ))}
//       </div>
//     );
//   };

//   return (
//     <div className="feed-container">
//       <h2>Feed</h2>
//       {renderPosts()}
//     </div>
//   );
// };

// export default Feed;

// fifth attempt
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../feed.css";

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const res = await axios.get(
//         "https://jsonplaceholder.typicode.com/posts?_limit=10"
//       );
//       setPosts(res.data);
//     };
//     fetchPosts();
//   }, []);

//   return (
//     <div className="feed-container">
//       {posts.map((post) => (
//         <div key={post.id} className="post-tile">
//           <h3>{post.title}</h3>
//           <p>{post.body}</p>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feed;

// Sixth attempt Second BEST ATTEMPT
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../feed4.css";

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         "https://jsonplaceholder.typicode.com/posts?_limit=10"
//       );
//       setPosts(result.data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="feed-container">
//       {posts.map((post) => (
//         <div className="post-tile" key={post.id}>
//           <div className="post-header">
//             <div className="profile-pic"></div>
//             <h3>{post.title}</h3>
//           </div>
//           <div className="post-content">
//             <p>{post.body}</p>
//           </div>
//           <div className="post-buttons">
//             <button>Like</button>
//             <button>Comment</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feed;

// seventh attempt
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../feed.css";

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="feed">
//       {posts.map((post) => (
//         <div className="post" key={post.id}>
//           <div className="post-header">
//             <div className="post-profile-pic"></div>
//             <div className="post-user">{post.username}</div>
//           </div>
//           <div className="post-body">
//             <div className="post-image"></div>
//             <div className="post-content">
//               <div className="post-title">{post.title}</div>
//               <div className="post-text">{post.body}</div>
//             </div>
//           </div>
//           <div className="post-footer">
//             <div className="post-buttons">
//               <button className="post-button like-button"></button>
//               <button className="post-button comment-button"></button>
//             </div>
//             <div className="post-likes">Likes: {post.likes}</div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feed;

//eigth attempt
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../feed.css";

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     axios
//       .get("https://jsonplaceholder.typicode.com/posts")
//       .then((response) => setPosts(response.data))
//       .catch((error) => console.log(error));
//   }, []);

//   return (
//     <div className="feed">
//       {posts.map((post) => (
//         <div className="post-tile" key={post.id}>
//           <div className="post-image"></div>
//           <div className="post-content">
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//             <span>Posted by: {post.userId}</span>
//             <button className="button">Read more</button>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feed;

// BEST ATTEMPT
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../feed4.css";

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios(
//         "https://jsonplaceholder.typicode.com/posts?_limit=10"
//       );
//       setPosts(result.data);
//     };
//     fetchData();
//   }, []);

//   return (
//     <div className="feed-container">
//       {posts.map((post) => (
//         <div className="post-tile" key={post.id}>
//           <div className="post-header">
//             <div className="profile-pic"></div>
//             <h3>{post.title}</h3>
//           </div>
//           <div className="post-content">
//             <p>{post.body}</p>
//           </div>
//           <div className="post-footer">
//             <div className="username">{post.userId}</div>
//             <div className="post-buttons">
//               <button>Like</button>
//               <button>Comment</button>
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feed;

// FINAL Ke pehle ka
// import React, { useState, useEffect } from "react";
// import axios from "axios";
// import "../feed.css";

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchData = async () => {
//       const result = await axios.get("http://localhost:8000/api/posts/");
//       // const result = await axios.get("https://jsonplaceholder.typicode.com/posts?_limit=10");
//       setPosts(result.data);
//     };
//     fetchData();
//   }, []);

//   const handleLike = async (postId) => {
//     try {
//       const response = await axios.post(`http://localhost:8000/api/posts/${postId}/like/`);
//       const updatedPosts = posts.map((post) => {
//         if (post.id === postId) {
//           post.likes = response.data.likes;
//         }
//         return post;
//       });
//       setPosts(updatedPosts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   const handleComment = async (postId, comment) => {
//     try {
//       const response = await axios.post(`http://localhost:8000/api/posts/${postId}/comments/`, { comment });
//       const updatedPosts = posts.map((post) => {
//         if (post.id === postId) {
//           post.comments = response.data.comments;
//         }
//         return post;
//       });
//       setPosts(updatedPosts);
//     } catch (error) {
//       console.log(error);
//     }
//   };

//   return (
//     <div className="feed-container">
//       {posts.map((post) => (
//         <div className="post-tile" key={post.id}>
//           <div className="post-header">
//             <div className="profile-pic"></div>
//             <h3>{post.title}</h3>
//           </div>
//           <div className="post-content">
//             <p>{post.body}</p>
//           </div>
//           <div className="post-footer">
//             <div className="post-likes">{post.likes} likes</div>
//             <div className="post-buttons">
//               <button onClick={() => handleLike(post.id)}>Like</button>
//               <button onClick={() => handleComment(post.id, "test comment")}>Comment</button>
//             </div>
//             <div className="post-comments">
//               {post.comments.map((comment) => (
//                 <div key={comment.id}>
//                   <p>{comment.content}</p>
//                 </div>
//               ))}
//             </div>
//           </div>
//         </div>
//       ))}
//     </div>
//   );
// };

// export default Feed;

// FINAL FINAL FINAL
import React, { useState, useEffect } from "react";
import axios from "axios";
import "../feed4.css";

const Feed = () => {
  const [posts, setPosts] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      const result = await axios(
        "https://jsonplaceholder.typicode.com/posts?_limit=10"
      );
      setPosts(result.data);
    };
    fetchData();
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
    <div className="feed-container">
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
  );
};

export default Feed;

// Ye FINAL
// import React, { useEffect, useState } from "react";
// import "../feed4.css";

// const PostTile = ({ post }) => {
//   const [comments, setComments] = useState([]);
//   const [likeCount, setLikeCount] = useState(0);

//   useEffect(() => {
//     const fetchComments = async () => {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${post.id}/comments`
//       );
//       const data = await response.json();
//       setComments(data);
//     };

//     const fetchLikes = async () => {
//       const response = await fetch(
//         `https://jsonplaceholder.typicode.com/posts/${post.id}/likes`
//       );
//       const data = await response.json();
//       setLikeCount(data.length);
//     };

//     fetchComments();
//     fetchLikes();
//   }, [post.id]);

//   return (
//     <div className="post-tile">
//       <div className="post-header">
//         <h3>{post.title}</h3>
//         <span>{likeCount} Likes</span>
//       </div>
//       <div className="post-content">
//         <p>{post.body}</p>
//       </div>
//       <div className="post-buttons">
//         <button>Like</button>
//         <button>Comment ({comments.length})</button>
//       </div>
//     </div>
//   );
// };

// const Feed = () => {
//   const [posts, setPosts] = useState([]);

//   useEffect(() => {
//     const fetchPosts = async () => {
//       const response = await fetch(
//         "https://jsonplaceholder.typicode.com/posts"
//       );
//       const data = await response.json();
//       setPosts(data);
//     };

//     fetchPosts();
//   }, []);

//   return (
//     <div className="feed-container">
//       {posts.map((post) => (
//         <PostTile key={post.id} post={post} />
//       ))}
//     </div>
//   );
// };

// export default Feed;
