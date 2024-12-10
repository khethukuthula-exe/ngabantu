import React from "react";
import { StyledContainer, Incoming, Outgoing, ScrollableContainer } from "./Message.style";
import ReactMarkdown from "react-markdown";

export interface MessageInterface {
  message: string;
  attachment?: string;
  type: 'outgoing' | 'incoming';
}

const Message: React.FC<MessageInterface> = ({type, message, attachment}) => {
  if (attachment){
  console.log('attachment', attachment)
}
  // const businessReport = new File([attachment as BlobPart], 'business-report.pdf', {type: 'application/pdf'});
  return (
  <StyledContainer $isOutgoing={type === 'outgoing'}>
    {type === 'incoming' ? <Incoming>
      {message}
      {attachment && <ScrollableContainer><ReactMarkdown>{attachment}</ReactMarkdown></ScrollableContainer>}
    </Incoming> : <Outgoing>{message}</Outgoing>}
  </StyledContainer>
  )
}

export default Message;