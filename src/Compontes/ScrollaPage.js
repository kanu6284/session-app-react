import React from 'react';


const containerStyle = {
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  padding: '20px',
  overflowX: 'auto',
  position: 'relative',
  borderBottom: '1px solid #ccc'
};

const sectionStyle = {
  margin: '0 20px',
  textAlign: 'center'
};

const arrowStyle = {
  fontSize: '24px',
  cursor: 'pointer',
  margin: '0 10px'
};

const cursorStyle = {
  padding: '10px 20px',
  margin: '10px 0',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
  display: 'inline-block',
  color: 'blue'
};

const ScrollablePage = () => {
  return (
    <div style={{ padding: '20px' }}>
      <div style={containerStyle}>
        <div style={arrowStyle}>&lt;</div>
        <div style={sectionStyle}>
          <h1 style={{ fontSize: '18px' }}>Today</h1>
          <div style={cursorStyle}>08 Available</div>
        </div>
        <div style={sectionStyle}>
          <h1 style={{ fontSize: '18px' }}>Tomorrow</h1>
          <div style={cursorStyle}>06 Available</div>
        </div>
        <div style={sectionStyle}>
          <h1 style={{ fontSize: '18px' }}>Sat 1, May</h1>
          <div style={cursorStyle}>06 Available</div>
        </div>
        <div style={arrowStyle}>&gt;</div>
      </div>
      <div style={{ width: '100%', height: '20px', overflowX: 'scroll' }}>
        <div style={{ width: '200%' }}></div>
      </div>
    </div>
  );
};

export default ScrollablePage;
