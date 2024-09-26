import React, { useState } from 'react';
import axios from 'axios';

const CreateEmployee = () => {
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    gender: '',
    course: [],
    imgUpload: '',
  });

  const handleChange = (e) => {
    setEmployee({ ...employee, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post('http://localhost:5000/api/employees/create', employee);
      alert('Employee created successfully');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" onChange={handleChange} required />
      <input type="text" name="mobileNo" placeholder="Mobile No" onChange={handleChange} required />
      <select name="designation" onChange={handleChange} required>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
      <input type="radio" name="gender" value="Male" onChange={handleChange} required /> Male
      <input type="radio" name="gender" value="Female" onChange={handleChange} required /> Female
      <input type="checkbox" name="course" value="MCA" onChange={handleChange} /> MCA
      <input type="checkbox" name="course" value="BCA" onChange={handleChange} /> BCA
      <input type="checkbox" name="course" value="BSC" onChange={handleChange} /> BSC
      <input type="file" name="imgUpload" onChange={handleChange} />
      <button type="submit">Submit</button>
    </form>
  );
};

export default CreateEmployee;
