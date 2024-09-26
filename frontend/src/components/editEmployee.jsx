import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';

const EditEmployee = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  
  const [employee, setEmployee] = useState({
    name: '',
    email: '',
    mobileNo: '',
    designation: '',
    gender: '',
    course: [],
    imgUpload: '',
  });

  useEffect(() => {
    const fetchEmployee = async () => {
      const res = await axios.get(`http://localhost:5000/api/employees/${id}`);
      setEmployee(res.data);
    };
    fetchEmployee();
  }, [id]);

  const handleChange = (e) => {
    if (e.target.name === 'course') {
      const value = e.target.value;
      setEmployee((prev) => ({
        ...prev,
        course: prev.course.includes(value) 
          ? prev.course.filter((course) => course !== value) 
          : [...prev.course, value]
      }));
    } else {
      setEmployee({ ...employee, [e.target.name]: e.target.value });
    }
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      await axios.put(`http://localhost:5000/api/employees/update/${id}`, employee);
      alert('Employee updated successfully');
      navigate('/employees');
    } catch (err) {
      console.error(err);
    }
  };

  return (
    <form onSubmit={handleSubmit}>
      <input type="text" name="name" placeholder="Name" value={employee.name} onChange={handleChange} required />
      <input type="email" name="email" placeholder="Email" value={employee.email} onChange={handleChange} required />
      <input type="text" name="mobileNo" placeholder="Mobile No" value={employee.mobileNo} onChange={handleChange} required />
      <select name="designation" value={employee.designation} onChange={handleChange} required>
        <option value="HR">HR</option>
        <option value="Manager">Manager</option>
        <option value="Sales">Sales</option>
      </select>
      <input type="radio" name="gender" value="Male" checked={employee.gender === 'Male'} onChange={handleChange} required /> Male
      <input type="radio" name="gender" value="Female" checked={employee.gender === 'Female'} onChange={handleChange} required /> Female
      <input type="checkbox" name="course" value="MCA" checked={employee.course.includes('MCA')} onChange={handleChange} /> MCA
      <input type="checkbox" name="course" value="BCA" checked={employee.course.includes('BCA')} onChange={handleChange} /> BCA
      <input type="checkbox" name="course" value="BSC" checked={employee.course.includes('BSC')} onChange={handleChange} /> BSC
      <input type="file" name="imgUpload" onChange={handleChange} />
      <button type="submit">Update</button>
    </form>
  );
};

export default EditEmployee;
