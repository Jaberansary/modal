// Modal.js

import React, { useState } from 'react';
import axios from 'axios';

const Modal = ({ isOpen, onClose }) => {
  const [formData, setFormData] = useState({
    // Your form fields here
    name: '',
    type: '',
    label:'',
    additionalInfo:{
        description:""
    }
  });

  
    const handleChange = (e) => {
        // If the changed field is within the additionalInfo object
        if (e.target.name.startsWith('additionalInfo.')) {
          setFormData({
            ...formData,
            additionalInfo: {
              ...formData.additionalInfo,
              [e.target.name.replace('additionalInfo.', '')]: e.target.value,
            },
        });
        console.log(formData);
        } else {
          // If the changed field is not within the additionalInfo object
          setFormData({
            ...formData,
            [e.target.name]: e.target.value,
          });
        console.log(formData);

        }
      };
      

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      // Replace 'YOUR_API_ENDPOINT' with your actual API endpoint
      const response = await axios.post('YOUR_API_ENDPOINT', formData);

      // Handle the response if needed
      console.log(response.data);

      // Close the modal after successful submission
      onClose();
    } catch (error) {
      // Handle errors
      console.error('Error submitting form:', error);
    }
  };
  return (
    <div className={` bg-slate-200 ${isOpen?"":"hidden"}`}>
      <div className="modal-content">
        <span className="close" onClick={onClose}>
          &times;
        </span>
        <form onSubmit={handleSubmit}>
          {/* Your form fields go here */}
          <label>
            Name:
            <input type="text" name="name" value={formData.name} onChange={handleChange} />
          </label>
          <label>
            Type:
            <input type="text" name="type" value={formData.type} onChange={handleChange} />
          </label>
          <label>
            Label:
            <input type="text" name="label" value={formData.label} onChange={handleChange} />
          </label>
          <label>
            Description:
            <input type="email" name="additionalInfo.description" value={formData.additionalInfo.description} onChange={handleChange} />
          </label>
          <button type="submit"
          onClick={handleSubmit}
          >Submit</button>
        </form>
      </div>
    </div>
  );
};

export default Modal;
