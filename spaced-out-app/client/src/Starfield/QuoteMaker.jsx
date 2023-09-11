import React, { useState, useEffect } from 'react';
import axios from 'axios';

function QuoteMaker ({generateQuote}) {

  return(
    <div className="quote-maker-container">
      <button onClick={(e) => { generateQuote(e) }}>MEDITATE</button>
    </div>
  )
};

export default QuoteMaker;