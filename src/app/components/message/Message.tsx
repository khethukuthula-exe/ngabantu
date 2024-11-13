import React from "react";
import { StyledContainer, Incoming, Outgoing } from "./Message.style";

export interface MessageInterface {
  message: string;
  attachments?: File[];
  type: 'outgoing' | 'incoming';
}

const Message: React.FC<MessageInterface> = () => {
  return (<StyledContainer>
    
  </StyledContainer>)
}

export default Message;