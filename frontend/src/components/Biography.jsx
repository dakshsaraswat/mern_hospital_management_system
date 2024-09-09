import React from "react";

const Biography = ({imageUrl}) => {
  return (
    <>
      <div className="container biography">
        <div className="banner">
          <img src="..\prew.jpg" alt="whoweare" />
        </div>
        <div className="banner">
          <p>Biography</p>
          <h3>Who We Are</h3>
          <p>
          Shri Ram Murti Smarak Hospital is more than just a healthcare facility; we are a dedicated team of professionals committed to providing exceptional care to our community. Established in 1998, our hospital has grown to become a trusted healthcare partner, offering comprehensive medical services and advanced treatments to patients of all ages.
          </p>
          <p>
          At Shri Ram Murti Smarak College, our mission is to improve the health and well-being of the people we serve. We are committed to delivering patient-centered care with compassion, respect, and excellence. Every day, our team of doctors, nurses, and healthcare professionals work together to ensure that each patient receives personalized attention and the highest standard of medical care.
          </p>
        </div>
      </div>
    </>
  );
};

export default Biography;