import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import ChatBotComponent from './components/ChatBotComponent';
import Demo from './Demo';
import GeminiChat from './components/GeminiChat';
import './App.css'


function App() {
// const [isOpen,setOpen]=useState(false);

  return (
    <div className="App">
      <div className="rightside">
        <GeminiChat/>
      </div>
      {/* <div className='leftside'>
        <ChatBotComponent />
      </div> */}
    </div>
  );
}

export default App;
 
