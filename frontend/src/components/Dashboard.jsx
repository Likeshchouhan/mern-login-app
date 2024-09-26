import React from 'react';
import { Link } from 'react-router-dom';

const Dashboard = () => {
  return (
    <div>
      <h1>Welcome Admin Panel</h1>
      <nav>
        <ul>
          <li>
            <Link to="/employees">Employee List</Link>
          </li>
          <li>
            <Link to="/employees/create">Create Employee</Link>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Dashboard;
