import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom'; 
import { FaClock } from 'react-icons/fa';
import BookingDetails from './bookingDeatail';

const SlotSelection = () => {
  const [selectedCategory, setSelectedCategory] = useState('');
  const [selectedTime, setSelectedTime] = useState('');
  const [bookingInfo, setBookingInfo] = useState(null);
  const navigate = useNavigate(); 

  const handleCategorySelect = (category) => {
    setSelectedCategory(category);
  };

  const handleTimeSelect = (time) => {
    setSelectedTime(time);
  };

  const handleBooking = () => {
    if (selectedCategory && selectedTime) {
      const bookingInfo = {
        bookingId: '25716236',
        category: selectedCategory === 'startup' ? 'Startup consultation' : 'Career consultation',
        date: 'Wed, May 10, 2024',
        time: selectedTime,
        duration: selectedTime.includes('30') ? '30 min' : '1 Hour', 
      };
      setBookingInfo(bookingInfo);

     
      navigate('/booking-detail');
    } else {
      alert('Please select both category and time.');
    }
  };

  const buttonStyle = {
    padding: '10px 15px',
    fontSize: '16px',
    border: 'none',
    borderRadius: '20px',
    cursor: 'pointer',
    transition: 'background-color 0.3s, color 0.3s',
  };

  const selectedButtonStyle = {
    backgroundColor: 'orange',
    color: 'white',
  };

  const hoverStyle = {
    backgroundColor: '#ff9f1a',
  };

  return (
    <div style={{ padding: '20px' }}>
      <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Slot Selection</h1>
      <div style={{ display: 'flex', justifyContent: 'center', marginBottom: '20px' }}>
        <button
          style={selectedCategory === 'startup' ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = selectedCategory === 'startup' ? selectedButtonStyle.backgroundColor : '')
          }
          onClick={() => handleCategorySelect('startup')}
        >
          Startup Consulting
        </button>
        <button
          style={selectedCategory === 'career' ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
          onMouseOut={(e) =>
            (e.currentTarget.style.backgroundColor = selectedCategory === 'career' ? selectedButtonStyle.backgroundColor : '')
          }
          onClick={() => handleCategorySelect('career')}
        >
          Career Consulting
        </button>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        {/* 30 min Slots */}
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <FaClock style={{ marginRight: '10px' }} />
          <h2 style={{ margin: 0 }}>30 min</h2>
        </div>
        <div style={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {['7:00-7:30 AM', '7:30-8:00 AM', '8:00-8:30 AM', '8:30-9:00 AM', '9:00-9:30 AM'].map((timeSlot) => (
              <button
                key={timeSlot}
                style={selectedTime === timeSlot ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = selectedTime === timeSlot ? selectedButtonStyle.backgroundColor : '')
                }
                onClick={() => handleTimeSelect(timeSlot)}
              >
                {timeSlot}
              </button>
            ))}
          </div>
          <div style={{ display: 'flex', justifyContent: 'center' }}>
            {['9:30-10:00 AM', '10:00-10:30 AM', '10:30-11:00 AM', '11:00-11:30 AM', '11:30-12:00 PM'].map((timeSlot) => (
              <button
                key={timeSlot}
                style={selectedTime === timeSlot ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
                onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
                onMouseOut={(e) =>
                  (e.currentTarget.style.backgroundColor = selectedTime === timeSlot ? selectedButtonStyle.backgroundColor : '')
                }
                onClick={() => handleTimeSelect(timeSlot)}
              >
                {timeSlot}
              </button>
            ))}
          </div>
        </div>
      </div>

      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginRight: '20px' }}>
          <FaClock style={{ marginRight: '10px' }} />
          <h2 style={{ margin: 0 }}>1 hr</h2>
        </div>
        <div style={{ display: 'flex', gap: '10px' }}>
          {['7:00-8:00 AM', '10:00-11:00 AM', '2:00-3:00 PM'].map((timeSlot) => (
            <button
              key={timeSlot}
              style={selectedTime === timeSlot ? { ...buttonStyle, ...selectedButtonStyle } : buttonStyle}
              onMouseOver={(e) => (e.currentTarget.style.backgroundColor = hoverStyle.backgroundColor)}
              onMouseOut={(e) =>
                (e.currentTarget.style.backgroundColor = selectedTime === timeSlot ? selectedButtonStyle.backgroundColor : '')
              }
              onClick={() => handleTimeSelect(timeSlot)}
            >
              {timeSlot}
            </button>
          ))}
        </div>
      </div>

      <div style={{ display: 'flex', justifyContent: 'center', marginTop: '20px' }}>
        <button
          style={{
            padding: '10px 20px',
            fontSize: '16px',
            backgroundColor: 'tomato',
            color: 'white',
            border: 'none',
            cursor: 'pointer',
            borderRadius: '20px',
            boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
            transition: 'background-color 0.3s, color 0.3s',
          }}
          onMouseOver={(e) => (e.currentTarget.style.backgroundColor = '#ff6347')}
          onMouseOut={(e) => (e.currentTarget.style.backgroundColor = 'tomato')}
          onClick={handleBooking}
        >
          Book Slot
        </button>
      </div>

      {bookingInfo && <BookingDetails bookingInfo={bookingInfo} />} 
    </div>
  );
};

export default SlotSelection;
