import React from "react";
import ChatUI from "../Chat/Chat";
import Dashboard from "../dashboard/Dashboard";
import  { Chatbot } from "../floating-action-button/FloatingActionButtons"
import ServiceProvider from "../service-provider-profile/ServiceProvider";

const ServiceProviderInterface: React.FC<{showChat: boolean, handleClose: any; setShowChat: any}> = ({showChat, handleClose, setShowChat}) => {
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
  