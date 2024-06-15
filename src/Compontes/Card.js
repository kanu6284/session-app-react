import React from 'react';
import './Card.css';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faGraduationCap, faBriefcase, faDollarSign, faUsers } from '@fortawesome/free-solid-svg-icons'; // Import specific icons you need
import SkillsPage from './Skills';

const Card = () => {
  return (
    <div className="card mt-5">
      <div className="row gx-5">
        {/* Left Side */}
        <div className="col-md-4">
          <div className="left-side p-4 d-flex align-items-start">
            <img src="https://img.freepik.com/free-photo/young-beautiful-woman-pink-warm-sweater-natural-look-smiling-portrait-isolated-long-hair_285396-896.jpg" alt="Profile" className="profile-img mb-3" />
            <div className="consultant-info">
              <h2 className="heading mb-1">Ridhima Sen</h2>
              <p className="role mb-1">Consulting Leader</p>
              <p className="qualification mb-1"><FontAwesomeIcon icon={faUsers} className="icon" /> Qualified in startup Consulting</p>
              <p className="experience mb-1"><FontAwesomeIcon icon={faBriefcase} className="icon" /> 20 Years of experience in consulting</p>
              <p className="consultation-fee mb-1"><FontAwesomeIcon icon={faDollarSign} className="icon" /> Consultation fee ₹1000</p>
            </div>
          </div>
        </div>

        {/* Right Side */}
        <div className="col-md-8">
          <div className="right-side p-4">
            <h3 className="sub-heading mb-3">Consultation Prices</h3>
            <div className="price-list d-flex flex-column">
              <div className="d-flex justify-content-between mb-1">
                <div className="price-item">
                  <span className="bold">30 min session</span>
                </div>
                <div className="price-item">
                  <span className="bold">01 hr session</span>
                </div>
                <div className="price-item">
                  <span className="bold">Availability</span>
                </div>
              </div>
              <div className="d-flex justify-content-between">
                <div className="price-item">
                  <span>₹1000</span>
                </div>
                <div className="price-item">
                  <span>₹1500</span>
                </div>
                <div className="price-item">
                  <span>Mon-Sat</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
      <SkillsPage />
    </div>
  );
}

export default Card;
