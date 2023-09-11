import React, { useState, useEffect } from "react";
import axios from 'axios';
import Starfield from './Starfield';
import Meditations from './Meditations';

function App() {
  /*
  ===== STATES AND STATE CHANGERS ======
  */

  const [quotes, setQuotes] = useState([]);

  const updQuotes = async () => {
    const newMeditations = await axios.get('/quotes/initial');
    return newMeditations.data;
  };

  /*
  ===== FUNCTIONALITY =====
  */

  // initialize meditations on load
  useEffect(() => {
    updQuotes()
      .then((quotes) => setQuotes(quotes))
      .catch((err) => console.error(err));
  }, []);

  async function generateQuote (e) {
    e.preventDefault();
    // have to do this so new state doesn't point to same position in memory
    let newQuotes = [];
    quotes.forEach(quote => newQuotes.push(quote));
    const quote = await axios.get('/quotes/meditate');
    newQuotes.unshift(quote.data[0]);
    setQuotes(newQuotes);
  };

  return (
    <div className="app-container">
      <Starfield
        generateQuote={generateQuote}
      />
      <Meditations
        quotes={quotes}
      />
    </div>
  );
}

export default App;
