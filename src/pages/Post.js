// import React, { useState } from 'react';
// import axios from 'axios';
// import { AiOutlineSend } from 'react-icons/ai';
// import '../post.css';

// const Post = () => {
//   const [input, setInput] = useState('');

//   const handlePost = async (e) => {
//     e.preventDefault();
//     try {
//       await axios.post('http://localhost:8000/api/posts/', { content: input });
//       setInput('');
//       alert('Post submitted successfully');
//     } catch (error) {
//       console.log(error);
//       alert('Error submitting post');
//     }
//   };

//   return (
//     <div className="post-container">
//       <form onSubmit={handlePost}>
//         <textarea
//           value={input}
//           onChange={(e) => setInput(e.target.value)}
//           placeholder="Write something..."
//           required
//         />
//         <button type="submit">
//           <AiOutlineSend />
//           Post
//         </button>
//       </form>
//     </div>
//   );
// };

// export default Post;

// FINAL
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { AiOutlineSend } from 'react-icons/ai';
import Navbar from './Navbar';
import Footer from './Footer';
import '../post.css';

const Post = () => {
  const [title, setTitle] = useState('');
  const [content, setContent] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    // aboutRef.current.classList.add("fade-in");
    // impactRef.current.classList.add("fade-in");
    setTimeout(() => {
        setActive(true);
      }, 100);
  }, []);

  const handlePost = async (e) => {
    e.preventDefault();
    try {
      await axios.post('http://localhost:8000/api/posts/', { title, content });
      setTitle('');
      setContent('');
      alert('Post submitted successfully');
      window.location.href = '/feed'; // redirect to feed page
    } catch (error) {
      console.log(error);
      alert('Error submitting post');
    }
  };

  return (
    <div>
      <Navbar />
    <div className={`fade-in ${active ? 'active' : ''} post-container`}>
      <form onSubmit={handlePost}>
        <input
          type="text"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          placeholder="Title"
          required
        />
        <textarea
          value={content}
          onChange={(e) => setContent(e.target.value)}
          placeholder="Write something..."
          required
        />
        <button type="submit">
          <AiOutlineSend />
          Post
        </button>
      </form>
    </div>
    <Footer />
    </div>
  );
};

export default Post;
