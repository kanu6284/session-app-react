import React, { useState } from 'react';


const buttonStyle = {
  borderRadius: '0px', 
  backgroundColor: 'white',
  color: 'black',
  padding: '10px 20px',
  margin: '0', 
  border: '2px solid orange',
  boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)',
  cursor: 'pointer',
  transition: 'background-color 0.3s, color 0.3s',
};

const buttonHoverStyle = {
  backgroundColor: 'orange',
  color: 'white',
};

const SlotsPage = ({ onSlotSelect }) => {
  const [selectedCategory, setSelectedCategory] = useState('');

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
    if (onSlotSelect) {
      onSlotSelect(category);
    }
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'left', fontSize: '24px' }}>Available Slots</h1>
      <div style={{ display: 'flex', justifyContent: 'center' }}>
        <button
          style={selectedCategory === 'startup' ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setSelectedCategory('startup')}
          onMouseLeave={() => setSelectedCategory('')}
          onClick={() => handleCategorySelect('startup')}
        >
          Startup Consulting
        </button>
        <button
          style={selectedCategory === 'career' ? { ...buttonStyle, ...buttonHoverStyle } : buttonStyle}
          onMouseEnter={() => setSelectedCategory('career')}
          onMouseLeave={() => setSelectedCategory('')}
          onClick={() => handleCategorySelect('career')}
        >
          Career Consulting
        </button>
      </div>
    </div>
  );
};

export default SlotsPage;
