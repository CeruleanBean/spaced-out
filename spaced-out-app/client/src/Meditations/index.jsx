import React, { useEffect } from 'react';
import Quote from './Quote';

function Meditations ({quotes}) {
  let createQuoteList = () => {
    let quoteList = quotes.map((quote, i) => {
      return (
        <Quote key={i} quote={quote} />
      )
    })
    return quoteList;
  };
  return (
    <div className="meditations-container">
      {createQuoteList()}
    </div>
  );
};

export default Meditations;
