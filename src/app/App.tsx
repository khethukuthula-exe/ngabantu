import React, { useState } from 'react';
import './App.css';
import UserProfile from './components/user-profile/UserProfile';
import ServiceProvider from './components/service-provider-profile/ServiceProvider';
import ChatUI from './components/Chat/Chat';
import Dashboard from './components/dashboard/Dashboard';
import { Chatbot } from './components/floating-action-button/FloatingActionButtons';

const UserInterface: React.FC<{showChat: boolean, handleClose: any; setShowChat: any}> = ({showChat, handleClose, setShowChat}) => {
 return <>{showChat ? <ChatUI handleClose={handleClose} /> :
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
      </> 
} 

const App = () => {
  const [showChat, setShowChat] = useState<boolean>(false);
  const [userType, setUserType] = useState<'service-provider'|'client' | null>(null);
  console.log('showChat', showChat);

  const handleClose = () => {
    setShowChat(false);
  };

  const handleUserTypeSelection = (type: 'service-provider' | 'client') => {
    setUserType(type);
  };

  return (
    <div className="App">
      {userType === null ? (
        <div>
          <button onClick={() => handleUserTypeSelection('client')}>Client</button>
          <button onClick={() => handleUserTypeSelection('service-provider')}>Service Provider</button>
        </div>
      ) : (
        userType === 'service-provider' ? <Dashboard /> : <UserInterface showChat={showChat} handleClose={handleClose} setShowChat={setShowChat} />
      )}
    </div>
  );
};

export default App;
