import React, { useState, useEffect } from 'react';
import QuoteMaker from './QuoteMaker';

function Starfield ({generateQuote}) {
  return (
    <QuoteMaker
      generateQuote={generateQuote}
    />
  );
};

export default Starfield;