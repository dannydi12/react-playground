import React from 'react';
import Split from './composition/Split';
import './App.css';

function App() {
  return (
    <main className='App'>
      <Split className="left" flexBasis={2}>
      This is the content of the split component.
      </Split>
      <Split className="right">
      This is the content of the split component.
      </Split>
    </main>
  );
}

export default App;
