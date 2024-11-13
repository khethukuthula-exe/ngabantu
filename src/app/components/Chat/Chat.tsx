import React, { useState } from "react";
// import { Container, Row, Title, } from "../service-provider-profile/ServiceProvider.style";
import { Container, Overlay, Row, Title, Spacer, MessageInputContainer, StyledInput, StyledInputContainer, ChatContainer} from "./Chat.style";
import IconButton from '@mui/material/IconButton';
import { Close, Send } from "@mui/icons-material";
import Icon from '@mdi/react';
import { mdiCreation } from '@mdi/js';
import Message, {MessageInterface} from "../message/Message";

const ChatUI: React.FC<{handleClose: any}> = ({handleClose}) => {
  const [messageInput, setMessageInput] = useState<string>();

  const [messages, setMessages] = React.useState<MessageInterface[]>([])

  const handleInputChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setMessageInput(event.target.value);
  }

  const handleKeyDown = (event: React.KeyboardEvent<HTMLInputElement>) => {
    if (event.key === 'Enter') {
      handleSendMessage();
    }
  };

  const handleSendMessage = (): void => {
    if (messageInput) {
    const newMessage: MessageInterface = {
      message: messageInput,
      type: 'outgoing'
    }
    setMessages((prevMessages) => [...prevMessages, newMessage])
    setMessageInput('')
    //send message to api & await response
  }
  }

  return (
    <Overlay>
  <Container>
    <Row>
      <Icon path={mdiCreation} size={1} className='icon-primary' style={{color: '#bdee63'}}/>
      <Title style={{textAlign: 'left'}}>AI Assistant</Title>
      <Spacer $width="40%"/>
      <IconButton onClick={handleClose}>
        <Close style={{color: '#fff'}}/>
      </IconButton>
    </Row>
    <ChatContainer>
      {messages.map((message) => <Message message={message.message} type={message.type} />)}
    <MessageInputContainer>
      <StyledInputContainer>
        <StyledInput type='text' placeholder="Ask me anything..." value={messageInput} onChange={handleInputChange} onKeyDown={handleKeyDown}></StyledInput>
      </StyledInputContainer>
      <IconButton onClick={handleSendMessage}>
        <Send style={{color: '#fff'}}/>
      </IconButton>
    </MessageInputContainer>
    </ChatContainer>
  </Container>
  </Overlay>)
}

export default ChatUI;