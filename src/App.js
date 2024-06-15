import React, { useState } from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import './App.css';
import CustomNavbar from './Compontes/CustomNavbar'; 
import Navigation from './Compontes/Navigation'; 
import Card from './Compontes/Card'; 
import Home from './Compontes/Home'; 
import TimePage from './Compontes/TimePage'; 
import BookingDetails from './Compontes/bookingDeatail';

function App() {
  const [bookingInfo, setBookingInfo] = useState(null); 

  const handleBookingInfo = () => {
    const newBookingInfo = {
      bookingId: '123456',
      date: new Date().toISOString(),
      time: '10:00 AM',
      duration: '1 hour',
      status: 'Confirmed',
      category: 'Startup consultation',
    };
    setBookingInfo(newBookingInfo);
  };

  return (
    <Router>
      <div className="App">
        <CustomNavbar />
        <Navigation />
        <Card />
        <button onClick={handleBookingInfo}>Set Booking Info</button>
        
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/home" element={<Home />} />
          <Route path="/time" element={<TimePage />} />
          <Route
            path="/booking-detail"
            element={<BookingDetails bookingInfo={bookingInfo} />}
          />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
