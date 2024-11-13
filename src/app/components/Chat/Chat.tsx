import React from "react";
// import { Container, Row, Title, } from "../service-provider-profile/ServiceProvider.style";
import { Container, Overlay, Row, Title, Spacer, MessageInputContainer, StyledInput, StyledInputContainer, ChatContainer, MessagesContainer} from "./Chat.style";
import IconButton from '@mui/material/IconButton';
import { Close, Send } from "@mui/icons-material";
import Icon from '@mdi/react';
import { mdiCreation } from '@mdi/js';

const ChatUI: React.FC<{handleClose: any}> = ({handleClose}) => {
  const [messages, setMessages] = React.useState([])
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
    <Row style={{minHeight: '480px'}}></Row>
    <MessageInputContainer>
      <StyledInputContainer>
        <StyledInput type='text' placeholder="Ask me anything..."></StyledInput>
      </StyledInputContainer>
      <IconButton>
        <Send style={{color: '#fff'}}/>
      </IconButton>
    </MessageInputContainer>
  </Container>
  </Overlay>)
}

export default ChatUI;