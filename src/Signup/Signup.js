import React from 'react';

const YouSubmitted = () => {
  return (
    <div>
      <h1>You Have Submitted successfully To Our Website!</h1>
      <button onClick={() => {
            window.location.href='/'
            
             }}>GO Home</button>
    </div>
  );
};

export default YouSubmitted;