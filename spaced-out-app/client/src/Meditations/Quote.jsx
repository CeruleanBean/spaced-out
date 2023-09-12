import React, { useState, useEffect } from 'react';

function Quote ({quote}) {
  return (
    <div className="quote-container">
      <p className="quote-body">{quote.quote}</p>
      <p className="quote-author">- {quote.author}</p>
    </div>
  )
};

export default Quote;