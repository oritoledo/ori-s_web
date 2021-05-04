import React from 'react'
import './App.css';
import {useState} from 'react';

function App() {
  const [count, setCount] = useState(0);
  const [text, setText] = useState([]);

  const handleSubmit = (e) =>{
    e.preventDefault();
    
  }

  return (
    <div className="App">
      <section>
        <h2>Lorem Ipsum No More</h2>
        <form classNmae ='lorem-form' onSubmit={handleSubmit}>
          <label htmlFor="amount">
            sentences:
          </label>
          <input type='number' name='amount' id = 'amount' value = {count} 
          onChange ={(e) => setCount(e.target.value)}/>
          <button type='submit' className = 'btn'>generate</button>
        </form>
        <article className='lorem-text'>
          <p>
            here will go the sentences from the API
          </p>
          </article>
      </section>
    </div>
  );
}

export default App;
