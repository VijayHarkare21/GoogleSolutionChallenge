import React, { useEffect, useRef, useState } from "react";
import Navbar from "./Navbar";
import Footer from "./Footer";
import "../home.css";

const Home = () => {
  const aboutRef = useRef(null);
  const impactRef = useRef(null);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // aboutRef.current.classList.add("fade-in");
    // impactRef.current.classList.add("fade-in");
    setTimeout(() => {
        setActive(true);
      }, 100);
  }, []);

  return (
    <div>
      <Navbar />
      <div className="container">
        <section className={`fade-in ${active ? 'active' : ''} about`} ref={aboutRef}>
          <div>
            <img style={{width:'400px', height:'300px'}} src="https://i.ytimg.com/vi/C553Gp0T0ko/maxresdefault.jpg" alt=""/>
          </div>
          <div className="about-text">
            <h2>About Us</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ullamcorper lectus. Fusce fermentum neque at dui pretium, eu
              bibendum sapien finibus. Sed ultricies bibendum mi, eu bibendum
              sapien finibus. Sed ultricies bibendum mi, eu bibendum sapien
              finibus.
            </p>
          </div>
        </section>
        <section className={`fade-in ${active ? 'active' : ''} impact`} ref={impactRef}>
          <div className="impact-text">
            <h2>Our Impact</h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed sed
              ullamcorper lectus. Fusce fermentum neque at dui pretium, eu
              bibendum sapien finibus. Sed ultricies bibendum mi, eu bibendum
              sapien finibus. Sed ultricies bibendum mi, eu bibendum sapien
              finibus.
            </p>
          </div>
          <div>
            <img style={{width:'400px', height:'300px'}} src="https://i.ytimg.com/vi/C553Gp0T0ko/maxresdefault.jpg" alt=""/>
          </div>
        </section>
      </div>
      <Footer />
    </div>
  );
};

export default Home;
