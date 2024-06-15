import React from 'react';
import { FaBarcode, FaCalendarAlt, FaClock, FaCheckCircle, FaVideo } from 'react-icons/fa';

const containerStyle = {
  padding: '20px',
};

const BookingDetails = ({ bookingInfo }) => {
  if (!bookingInfo) {
    return <div>Loading...</div>; 
  }

  const formatDate = (date) => {
    return new Date(date).toLocaleDateString('en-US', { weekday: 'short', year: 'numeric', month: 'short', day: 'numeric' });
  };

  const formatTime = (time) => {
    return time; 
  };

  const formatDuration = (duration) => {
    return duration; 
  };

  return (
    <div style={containerStyle}>
      <h1 style={{ textAlign: 'center', fontSize: '24px' }}>Booking Details</h1>
      <div style={{ marginBottom: '20px' }}>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaBarcode style={{ marginRight: '10px' }} />
          <span style={{ marginRight: '10px' }}>Booking ID:</span>
          <strong>{bookingInfo.bookingId}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaCalendarAlt style={{ marginRight: '10px' }} />
          <span style={{ marginRight: '10px' }}>Session Time & Date:</span>
          <strong>{formatDate(bookingInfo.date)}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaClock style={{ marginRight: '10px' }} />
          <span style={{ marginRight: '10px' }}>Session Duration:</span>
          <strong>{formatTime(bookingInfo.time)} ({formatDuration(bookingInfo.duration)})</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginBottom: '10px' }}>
          <FaCheckCircle style={{ marginRight: '10px' }} />
          <span style={{ marginRight: '10px' }}>Booking Status:</span>
          <strong style={{ color: 'green' }}>{bookingInfo.status}</strong>
        </div>
        <div style={{ display: 'flex', alignItems: 'center' }}>
          <FaVideo style={{ marginRight: '10px' }} />
          <span style={{ marginRight: '10px' }}>Join Session:</span>
          <button
            style={{
              padding: '8px 12px',
              backgroundColor: 'tomato',
              color: 'white',
              border: 'none',
              cursor: 'pointer',
              borderRadius: '5px',
              boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
              transition: 'background-color 0.3s, color 0.3s',
            }}
          >
            Join Now
          </button>
        </div>
        <div style={{ display: 'flex', alignItems: 'center', marginTop: '10px' }}>
          <span style={{ marginRight: '10px' }}>Consultation Category:</span>
          <strong>{bookingInfo.category}</strong>
        </div>
      </div>
    </div>
  );
};

export default BookingDetails;
