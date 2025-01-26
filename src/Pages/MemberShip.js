
import React, { useState, useEffect } from 'react';

function MembershipForm() {
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: '',
  });
  
  const [errors, setErrors] = useState({
    name: '',
    email: '',
    phone: '',
    membershipType: '',
  });


  useEffect(() => {
    const savedFormData = localStorage.getItem('membershipFormData');
    if (savedFormData) {
      setFormData(JSON.parse(savedFormData));
    }
  }, []);

  
  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };


  const handleSubmit = (e) => {
    e.preventDefault();

    let valid = true;
    let validationErrors = { ...errors };

 
    if (!formData.name) {
      validationErrors.name = 'Name is required';
      valid = false;
    } else {
      validationErrors.name = '';
    }

    if (!formData.email) {
      validationErrors.email = 'Email is required';
      valid = false;
    } else if (!/\S+@\S+\.\S+/.test(formData.email)) {
      validationErrors.email = 'Email is not valid';
      valid = false;
    } else {
      validationErrors.email = '';
    }

    if (!formData.phone) {
      validationErrors.phone = 'Phone number is required';
      valid = false;
    } else if (!/^\d{10}$/.test(formData.phone)) {
      validationErrors.phone = 'Phone number must be 10 digits';
      valid = false;
    } else {
      validationErrors.phone = '';
    }

    if (!formData.membershipType) {
      validationErrors.membershipType = 'Please select a membership type';
      valid = false;
    } else {
      validationErrors.membershipType = '';
    }

    setErrors(validationErrors);


    if (valid) {

      localStorage.setItem('membershipFormData', JSON.stringify(formData));

      alert('Form submitted successfully!');
      setFormData({
        name: '',
        email: '',
        phone: '',
        membershipType: '',
      });
    }
  };

  return (
    <div className="FormDev">
      <div className="form-container">
        <h2>Membership Form</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-group">
            <label htmlFor="name">Full Name:</label>
            <input
              type="text"
              id="name"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Enter your full name"
            />
            {errors.name && <span className="error">{errors.name}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              id="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Enter your email"
            />
            {errors.email && <span className="error">{errors.email}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="phone">Phone Number:</label>
            <input
              type="text"
              id="phone"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="Enter your phone number"
            />
            {errors.phone && <span className="error">{errors.phone}</span>}
          </div>

          <div className="form-group">
            <label htmlFor="membershipType">Membership Type:</label>
            <select
              id="membershipType"
              name="membershipType"
              value={formData.membershipType}
              onChange={handleChange}
            >
              <option value="">Select Membership Type</option>
              <option value="basic">Basic</option>
              <option value="premium">Premium</option>
              <option value="vip">VIP</option>
            </select>
            {errors.membershipType && (
              <span className="error">{errors.membershipType}</span>
            )}
          </div>

          <button type="submit" className="submit-btn">
            Submit
          </button>
        </form>
      </div>
    </div>
  );
}

export default MembershipForm;