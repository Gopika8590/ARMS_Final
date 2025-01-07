import React, { useState } from 'react';
import Sidebar from 'react-sidebar';
import './Sidebar.css';

const SidebarComponent = () => {
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const handleSidebarToggle = (open) => {
    setSidebarOpen(open);
  };

  return (
    <Sidebar
      sidebar={
        <div>
          <a className="menu-item" href="/">
            Home
          </a>
          <a className="menu-item" href="/Patients">
            Patients
          </a>
          <a className="menu-item" href="/">
            Log Out
          </a>
        </div>
      }
      open={sidebarOpen}
      onSetOpen={handleSidebarToggle}
      styles={{ sidebar: { background: '#fff', padding: '15px', width: '250px' } }}
    >
      <div className="hamburger-icon" onClick={() => handleSidebarToggle(true)}>
        <div></div>
        <div></div>
        <div></div>
      </div>
    </Sidebar>
  );
};

export default SidebarComponent;
