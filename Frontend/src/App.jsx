import React, { useState } from 'react';
import { Segment } from 'semantic-ui-react';
import ChatBotComponent from './components/ChatBotComponent';
import Demo from './Demo';


function App() {
// const [isOpen,setOpen]=useState(false);

  return (
    <div className="App">
      <Segment floated='right'>
        <ChatBotComponent />
      
      </Segment>
    </div>
  );
}

export default App;
 
