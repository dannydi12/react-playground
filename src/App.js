import React from 'react';
import './App.css';
import Split from './composition/Split';
import Tooltip from './composition/Tooltip';
import Messages from './messages/Messages';
import TheDate from './state/TheDate';
import Counter from './state/Counter';

function App() {
  // Old code
    const firstTooltip = (
      <Tooltip message='tooltip message' color='hotpink'>
        ipsum
      </Tooltip>
    )
    const secondTooltip = (
      <Tooltip message='another tooltip message' color='#126BCC'>
        officiis
      </Tooltip>
    )

    

  return (
    <main className='App'>
      <Split className="left" flexBasis={2}>
          This is the content of the {firstTooltip} split component.
          <TheDate />
          <Counter count={123} step={37}/>
        </Split>
        <Tooltip message='one more tooltip message'>
          Necessitatibus?
        </Tooltip>
        <Split className="right">
          This is the content of {secondTooltip} the split component.
          <Messages name="Messages" unread={0} />
          <Messages name="Notifications" unread={10} />
        </Split>
    </main>
  );
}

export default App;
