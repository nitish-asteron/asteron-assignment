import React, { useState } from "react";
import "./MultiStepForm.css";

const MultiStepForm = () => {
  const [step, setStep] = useState(1);
  const [formData, setFormData] = useState({
    firstName: "",
    lastName: "",
    email: "",
    age: "",
    phone: "",
    address: "",
    city: "",
    state: "",
    zip: "",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
    console.log(formData);
  };

  const handlePrevious = () => {
    setStep(step - 1);
  };
  const handleNext = (e) => {
    e.preventDefault();
    setStep(step + 1);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Form Submitted");
    setFormData({
      firstName: "",
      lastName: "",
      email: "",
      age: "",
      phone: "",
      address: "",
      city: "",
      state: "",
      zip: "",
    });
    setStep(1);
  };

  const progress = (step / 3) * 100;

  return (
    <div className="container">
      <h1>Multi-step form</h1>
      <div
        className="bar"
        style={{
          width: `${progress}%`,
          border: "2px solid black",
          transitionDuration: "500ms",
        }}
      ></div>
      {step === 1 && (
        <form onSubmit={handleNext}>
          <h2>Personal Information</h2>
          <div className="form-group">
            <label htmlFor="firstName">First Name:</label>
            <input
              type="text"
              name="firstName"
              id="firstName"
              value={formData.firstName}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="lastName">last Name:</label>
            <input
              type="text"
              name="lastName"
              id="lastName"
              value={formData.lastName}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="email">Email:</label>
            <input
              type="email"
              name="email"
              id="email"
              value={formData.email}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="age">Age</label>
            <input
              type="number"
              name="age"
              id="age"
              min="10"
              max="100"
              value={formData.age}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <div className="form-group">
            <label htmlFor="phone">Phone:</label>
            <input
              type="tel"
              name="phone"
              id="phone"
              value={formData.phone}
              onChange={handleChange}
              required
            />
          </div>
          <br />
          <button type="submit">Next</button>
        </form>
      )}
      {step === 2 && (
        <form onSubmit={handleNext}>
          <h2>Address Information</h2>
          <div className="form-group"><label htmlFor="address">Address:</label>
          <input
            type="text"
            name="address"
            id="address"
            value={formData.address}
            onChange={handleChange}
            required
          /></div>
          
          <br />
          <div className="form-group"><label htmlFor="city">City:</label>
          <input
            type="text"
            name="city"
            id="city"
            value={formData.city}
            onChange={handleChange}
            required
          /></div>
          
          <br />
          <div className="form-group"><label htmlFor="state">State:</label>
          <input
            type="text"
            name="state"
            id="state"
            value={formData.state}
            onChange={handleChange}
            required
          /></div>
          
          <br />
          <div className="form-group"><label htmlFor="zip">Zip:</label>
          <input
            type="number"
            name="zip"
            id="zip"
            value={formData.zip}
            onChange={handleChange}
            required
          /></div>
          
          <br />
          <button onClick={handlePrevious}>Previous</button>
          <button type="submit">Next</button>
        </form>
      )}

      {step === 3 && (
        <form onSubmit={handleSubmit}>
          <h2>confirmation</h2>
          <div>{JSON.stringify(formData)}</div>
          <button onClick={handlePrevious}>Previous</button>
          <button type="submit">Submit</button>
        </form>
      )}
    </div>
  );
};

export default MultiStepForm;
