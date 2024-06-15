import React from 'react';

const buttonStyle = {
  borderRadius: '20px',
  backgroundColor: 'orange',
  color: 'white',
  padding: '10px 20px',
  margin: '10px', 
  border: 'none',
  cursor: 'pointer'
};

const SkillsPage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'left' }}>Skills</h1>
      <div style={{ display: 'flex', justifyContent: 'center', flexWrap: 'wrap' }}>
        <button style={buttonStyle}>Marketing Consulting</button>
        <button style={buttonStyle}>Accounts Consulting</button>
        <button style={buttonStyle}>Business Consulting</button>
        <button style={buttonStyle}>Business Consulting</button>
        <button style={buttonStyle}>Business Consulting</button>
      </div>
    </div>
  );
};

export default SkillsPage;
