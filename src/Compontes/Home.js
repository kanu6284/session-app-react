import React, { useState } from 'react';
import SlotSelection from './TimePage';
import BookingDetails from './bookingDeatail';

const Home = () => {
  const [bookingInfo, setBookingInfo] = useState(null);

  const handleSlotSelect = (selectedBookingInfo) => {
    setBookingInfo(selectedBookingInfo);
  };

  return (
    <div>
      {!bookingInfo ? (
        <SlotSelection onSlotSelect={handleSlotSelect} />
      ) : (
        <BookingDetails bookingInfo={bookingInfo} />
      )}
    </div>
  );
};

export default Home;
