import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return (
    <main className="App">
      <div className="main-container">
        <div className="left-side">
          <Split className="left" 
                 content="This is the content of the split component."
                 num={10}/>
        </div>
        <div className="right-side">
          <Split className="right" 
                 content="This is the content of the split component."
                 num={1} /> 
        </div>
      </div>
    </main>
  );
}

export default App;
