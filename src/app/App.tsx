import React, { useEffect, useState } from 'react';
import './App.css';
import UserProfile from './components/user-profile/UserProfile';
import ServiceProvider from './components/service-provider-profile/ServiceProvider';
import ChatUI from './components/Chat/Chat';
import Dashboard, { Conversation } from './components/dashboard/Dashboard';
import { Chatbot } from './components/floating-action-button/FloatingActionButtons';
import { UserTypeSelectionContainer, UserTypeButton, LoginFormContainer, LoginFormInput, LoginButton } from './components/dashboard/Dashboard.style';
import { getConversations, addConversation } from './hooks/APIHandler';

const UserInterface: React.FC<{showChat: boolean, handleClose: any; setShowChat: any}> = ({showChat, handleClose, setShowChat}) => {
  return <>{showChat ? <ChatUI handleClose={handleClose} /> :
       (<>
       <ServiceProvider
         name='Amanda'
         surname='Zulu'
         location={{ area: 'Soshanguve' }}
         type={'ServiceProvider'}
         rating={4.7}
         about={"Passionate about helping students achieve their academic goals, I provide flexible scheduling and real-time support through the app’s chat feature, ensuring that each session is personalized and accessible. Whether you're looking for ongoing support or last-minute exam prep, I'm here to help you succeed!"}
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
  const [conversations, setConversations] = React.useState<Conversation[]>([]);
  const [userType, setUserType] = useState<'service-provider'|'client' | null>(null);
  const [email, setEmail] = useState<string>('');
  const [password, setPassword] = useState<string>('');

  console.log('showChat', showChat);

  const handleClose = () => {
    setShowChat(false);
  };

  const handleDashboardClose = () => {
    setUserType(null);
  }

  useEffect(() => {
    const fetchConversations = async () => {
      const response = await getConversations();
      setConversations(response);
    }
    fetchConversations();
  }, [])


  const handleLogin = () => {
    if (!(['amandazulu13@gmail.com', 'idealuser@gmail.com'].includes(email.toLowerCase()))) {
      alert('User not found')
      return
    }
    if (!password) {
      alert('Please enter a password');
      return;
    } 
    if (email.toLowerCase() === 'amandazulu13@gmail.com') 
      {password === 'password123' 
        ? setUserType('service-provider') 
        : alert('Wrong password!')
      } else if (email.toLowerCase() === 'idealuser@gmail.com') 
        {password === 'user123' 
          ? setUserType('client') 
          : alert('Wrong Password!')} 
  };

  const handleUserTypeSelection = (type: 'service-provider' | 'client') => {
    setUserType(type);
  };

  return (
    <div className="App">
      {userType === null ? (
        <LoginFormContainer>
          <h2>Login</h2>
          <LoginFormInput
            type="email"
            placeholder="Email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
          <LoginFormInput
            type="password"
            placeholder="Password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
          <LoginButton onClick={handleLogin}>Login</LoginButton>
        </LoginFormContainer>
      ) : (
        userType === 'service-provider' ? <Dashboard conversations={[]} setConversations={setConversations} handleClose={handleDashboardClose}/> : <UserInterface showChat={showChat} handleClose={handleClose} setShowChat={setShowChat} />
      )}
    </div>
  );
};

export default App;
