import React from 'react';
import './Summary.scss';

const Summary = () => {
  return <div className="summaryWrapper">
    <section className='summaryWrapper__product'>
      <div className='summaryWrapper__productImage'></div>
      <div className='summaryWrapper__productDetails'>
        <h4>3x CoreProduct®</h4>
        <h4>$39.99</h4>
      </div>
      <span>X Remove</span>
    </section>
    <section className='summaryWrapper__total'>
      <h5>Total</h5>
      <div>
        <h3>USD</h3>
        <h6>$49.98</h6>
      </div>
    </section>
  </div>;
};

export default Summary;
