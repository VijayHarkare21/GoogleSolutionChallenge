import React, { useState, useEffect} from 'react';
import Navbar from './Navbar';
import Footer from './Footer';
import "../need.css";

const Need = () => {
  // Code for fetching data from API and storing in state goes here
  const [active, setActive] = useState(false);

  useEffect(() => {
    // aboutRef.current.classList.add("fade-in");
    // impactRef.current.classList.add("fade-in");
    setTimeout(() => {
        setActive(true);
      }, 100);
  }, []);
  
  const handleContribute = () => {
    const overlay = document.createElement('div');
    overlay.style.position = 'fixed';
    overlay.style.top = '0';
    overlay.style.left = '0';
    overlay.style.width = '100%';
    overlay.style.height = '100%';
    overlay.style.backgroundColor = 'rgba(0, 0, 0, 0.5)';
    overlay.style.display = 'flex';
    overlay.style.justifyContent = 'center';
    overlay.style.alignItems = 'center';
  
    const form = document.createElement('form');
    form.style.backgroundColor = '#fff';
    form.style.padding = '20px';
    form.style.borderRadius = '5px';
    form.style.width = '400px';
    // form.style.justifyItems = 'center';
    // form.style.alignContent = 'flex-start';
    form.onsubmit = (event) => {
        event.preventDefault();
        const name = event.target.elements.name.value;
        const mobile = event.target.elements.mobile.value;
        const amount = event.target.elements.amount.value;
        
        // Send data to backend API endpoint
        fetch('https://example.com/api/contribute', {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json'
          },
          body: JSON.stringify({
            name: name,
            mobile: mobile,
            amount: amount
          })
        })
        .then(response => response.json())
        .then(data => {
          console.log(data);
          // form.remove();
          // overlay.remove();
          // do something with the response data if needed
        })
        .catch(error => {
          console.error(error);
          // handle the error if needed
        });
        form.remove();
        overlay.remove();
      };
  
    const title = document.createElement('h2');
    title.innerText = 'Give Contribution';
    title.htmlFor = 'title'
    
    const nameLabel = document.createElement('label');
    nameLabel.innerText = 'Name:';
    nameLabel.htmlFor = 'name';
    const nameInput = document.createElement('input');
    nameInput.type = 'text';
    nameInput.name = 'name';
    nameInput.required = true;
    nameLabel.style.margin = '10px';
    nameInput.style.margin = '10px';
  
    const mobileLabel = document.createElement('label');
    mobileLabel.innerText = 'Mobile Number:';
    mobileLabel.htmlFor = 'mobile';
    const mobileInput = document.createElement('input');
    mobileInput.type = 'tel';
    mobileInput.name = 'mobile';
    mobileInput.required = true;
    mobileLabel.style.margin = '10px';
    mobileInput.style.margin = '10px';

    const amountLabel = document.createElement('label');
    amountLabel.innerText = 'Amount to be Contributed:';
    amountLabel.htmlFor = 'amount';
    const amountInput = document.createElement('input');
    amountInput.type = 'number';
    amountInput.name = 'amount';
    amountInput.min = '0';
    amountInput.required = true;
    amountLabel.style.margin = '10px';
    amountInput.style.margin = '10px';
  
    const submitButton = document.createElement('button');
    submitButton.type = 'submit';
    submitButton.innerText = 'Submit';
    submitButton.style.margin = '10px';
  
    const cancelButton = document.createElement('button');
    cancelButton.type = 'button';
    cancelButton.innerText = 'Cancel';
    cancelButton.onclick = () => {
      form.remove();
      overlay.remove();
    };
    cancelButton.style.margin = '10px'
  
    form.append(title, nameLabel, nameInput, mobileLabel, mobileInput, amountLabel, amountInput, submitButton, cancelButton);
    overlay.appendChild(form);
    document.body.appendChild(overlay);
  };
   
  
  return (
      <div>
      <Navbar />
      <div className={`fade-in ${active ? 'active' : ''} container`}>
        {/* <h1 className="title">Need</h1> */}
        <div className="need-grid">
          <div className="need-item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <div className="need-info">
              <p className="confidence">Confidence of Draught: 70%</p>
              <p className="location">Location: XYZ</p>
              <button className="contribute-btn" onClick={handleContribute}>Contribute</button>
            </div>
          </div>
          <div className="need-item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <div className="need-info">
              <p className="confidence">Confidence of Flood: 80%</p>
              <p className="location">Location: ABC</p>
              <button className="contribute-btn" onClick={handleContribute}>Contribute</button>
            </div>
          </div>
          <div className="need-item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <div className="need-info">
              <p className="confidence">Confidence of Draught: 50%</p>
              <p className="location">Location: PQR</p>
              <button className="contribute-btn" onClick={handleContribute}>Contribute</button>
            </div>
          </div>
          <div className="need-item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <div className="need-info">
              <p className="confidence">Confidence of Flood: 90%</p>
              <p className="location">Location: LMN</p>
              <button className="contribute-btn" onClick={handleContribute}>Contribute</button>
            </div>
          </div>
          <div className="need-item">
            <img src="https://via.placeholder.com/150" alt="Placeholder" />
            <div className="need-info">
              <p className="confidence">Confidence of Draught: 60%</p>
              <p className="location">Location: EFG</p>
              <button className="contribute-btn" onClick={handleContribute}>Contribute</button>
            </div>
          </div>
        </div>
      </div>
      <Footer />
      </div>
  );
};

export default Need;
