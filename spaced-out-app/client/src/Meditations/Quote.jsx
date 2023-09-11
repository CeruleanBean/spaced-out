import React, { useState, useEffect } from 'react';

function Quote ({quote}) {
  return (
    <div className="quote-container">
      <p className="quote-body">{quote.q}</p>
      <p className="quote-author">- {quote.a}</p>
    </div>
  )
};

export default Quote;