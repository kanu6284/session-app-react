import React from 'react';

const Navigation = () => {
  const navItemStyle = {
    textAlign: 'center',
    margin: '0 3px',  
    marginBottom: '-50px', 
    flex: '1', 
  };

  const borderBottomStyle = {
    borderBottom: '2px solid orange',
    paddingBottom: '0px', 
    marginTop: '10px'
  };

  return (
    <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', padding: '0 20px' }}>
      <div style={{ ...navItemStyle }}>
        <span style={{ fontWeight: 'bold', ...borderBottomStyle }}>LaunchPad</span>
      </div>
      <div style={{ ...navItemStyle }}>
        <span style={borderBottomStyle}>Learning</span>
      </div>
      <div style={{ ...navItemStyle }}>
        <span style={borderBottomStyle}>Networking</span>
      </div>
      <div style={{ ...navItemStyle }}>
        <span style={borderBottomStyle}>Projects</span>
      </div>
      <div style={{ ...navItemStyle }}>
        <span style={{ fontWeight: 'bold', ...borderBottomStyle }}>Jobs</span> in center
      </div>
    </div>
  );
}

export default Navigation;
