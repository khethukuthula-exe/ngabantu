import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/user-profile/UserProfile';
import ServiceProvider from './components/service-provider-profile/ServiceProvider';
import ChatUI from './components/Chat/Chat';
import { Chatbot } from './components/floating-action-button/FloatingActionButtons';

const App = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  console.log('showChat', showChat)

  const handleClose = () => {
    setShowChat(false)
  }

  return (
    <div className="App">
      {showChat ? <ChatUI handleClose={handleClose} /> :
      (<>
      <ServiceProvider
        name='Khethukuthula'
        surname='Nkosi'
        location={{ area: 'Johannesburg' }}
        type={'ServiceProvider'}
        rating={4.5}
        about={'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Proin pulvinar velit eros, et maximus eros blandit nec.'}
        serviceCategories={['education']} 
        id={1}
        setShowChat={setShowChat}        
      />
      <Chatbot onClick={() => setShowChat(true)}/>
      </>)}
    </div>
  );
}

export default App;
