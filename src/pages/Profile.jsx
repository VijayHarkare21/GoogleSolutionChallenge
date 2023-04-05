import React, { useState, useEffect } from "react";
import axios from "axios";
import Navbar from "./Navbar";
import Footer from './Footer';
import "../profile.css";

const Profile = () => {
  const [activeTab, setActiveTab] = useState("personal-info");
  const [userInfo, setUserInfo] = useState({
    name: "Vijay Harkare",
    mobile: "+91 99999 88888",
    email: "xyz@gmail.com",
    address: "India",
    profileImageUrl: 'data:image/png;base64,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'
  });
  const profileImg = 'data:image/png;base64,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'
  const [contributions, setContributions] = useState([]);
  const [active, setActive] = useState(false);

  useEffect(() => {
    // fetch user info from API endpoint
    const fetchUserInfo = async () => {
      const result = await axios("API_ENDPOINT_FOR_USER_INFO");
      setUserInfo(result.data);
    };
    fetchUserInfo();

    // fetch user contributions from API endpoint
    const fetchContributions = async () => {
      const result = await axios("API_ENDPOINT_FOR_USER_CONTRIBUTIONS");
      setContributions(result.data);
    };
    fetchContributions();

    setTimeout(() => {
      setActive(true);
    }, 100);
  }, []);

  const handleSaveChanges = async () => {
    // save user info changes to API endpoint
    await axios.post("API_ENDPOINT_FOR_SAVING_USER_INFO", userInfo);
  };

  const handleTabClick = (tab) => {
    setActiveTab(tab);
  };

  const handleInputChange = (event) => {
    const { name, value } = event.target;
    setUserInfo((prevUserInfo) => ({
      ...prevUserInfo,
      [name]: value,
    }));
  };

  const handleProfileImageChange = (event) => {
    const file = event.target.files[0];
    const reader = new FileReader();
    reader.onload = (e) => {
      setUserInfo((prevUserInfo) => ({
        ...prevUserInfo,
        profileImageUrl: e.target.result,
      }));
    };
    reader.readAsDataURL(file);
  };
  

  return (
    <div>
      <Navbar />
      <div className={`fade-in ${active ? 'active' : ''} profile-container`}>
        <div className="sidebar">
          <button
            className={activeTab === "personal-info" ? "active" : ""}
            onClick={() => handleTabClick("personal-info")}
          >
            Personal Information
          </button>
          <button
            className={activeTab === "my-contributions" ? "active" : ""}
            onClick={() => handleTabClick("my-contributions")}
          >
            My Contributions
          </button>
        </div>
        <div className="profile-content">
          {activeTab === "personal-info" && (
            <div className="profile-personal">
            <div className="personal-info">
              <div className="input-group">
                <label>Name:</label>
                <input
                  type="text"
                  name="name"
                  value={userInfo.name}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label>Mobile Number:</label>
                <input
                  type="text"
                  name="mobile"
                  value={userInfo.mobile}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label>Email Id:</label>
                <input
                  type="text"
                  name="email"
                  value={userInfo.email}
                  onChange={handleInputChange}
                />
              </div>
              <div className="input-group">
                <label>Address:</label>
                <input
                  type="text"
                  name="address"
                  value={userInfo.address}
                  onChange={handleInputChange}
                />
              </div>
              <button onClick={handleSaveChanges}>Save Changes</button>
            </div>
            <div className="profile-image">
                <label>Profile Image:</label>
                <input type="file" name="profileImage" accept="image/*" onChange={handleProfileImageChange} />
                <img src={userInfo.profileImageUrl || profileImg} alt="Profile" />
            </div>
            </div>
          )}
          {activeTab === "my-contributions" && (
            <div className="contributions">
              {contributions.map((contribution) => (
                <div className="contribution-tile" key={contribution.id}>
                  <div className="contribution-image">
                    <img src={contribution.imageUrl} alt="" />
                  </div>
                  <div className="contribution-details">
                    <p>Amount Contributed: {contribution.amount}</p>
                    <p>Event Attended: {contribution.eventAttended ? "True" : "False"}</p>
                  </div>
                </div>
            ))}
            <div className="contribution-tile" key='10'>
                  <div className="contribution-image">
                    <img src="https://via.placeholder.com/150" alt="Placeholder"/>
                  </div>
                  <div className="contribution-details">
                    <p>Location: Mumbai, India</p>
                    <p>Event Name: Something here...</p>
                    <p>Amount Contributed: 20000</p>
                    <p>Event Attended: True</p>
                  </div>
                </div>
          </div>
        )}
      </div>
    </div>
    <Footer />
  </div>
  );
};

export default Profile;
