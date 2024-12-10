import React, { useEffect } from 'react';
import {
  GlobalStyle,
  PollContainer,
  Sidebar,
  SidebarHeading,
  SidebarDescription,
  SidebarNav,
  NewLabel,
  StepIndicator,
  MainContent,
  MainHeader,
  MainHeaderTitle,
  CloseButton,
  PollFormInput,
  SectionHeading,
  FormActions,
  Overlay,
  PollFormContainer
} from './Dashboard.style';
import Icon from '@mdi/react';
import { mdiCreation } from '@mdi/js';
import { Button, IconButton } from '@mui/material';
import Close from '@mui/icons-material/Close';
import Conversations from '../conversations/Conversation';
import { addConversation } from '../../hooks/APIHandler';

export interface DashboardProps {
  conversations: Conversation[];
  setConversations: any;
  handleClose: any;
}

export type Conversation = {
  id: number;
  question: string;
  answer: string;
  attachment?: string;
}

const Dashboard: React.FC<DashboardProps> = ({conversations, setConversations, handleClose}) => {
  const [question, setQuestion] = React.useState<string>('');
  const [answer, setAnswer] = React.useState<string>('');
  const [showConversationForm, setshowConversationForm] = React.useState<boolean>(false);
  const [showChatUpload, setShowChatUpload] = React.useState<boolean>(false);
  const [activeTab, setActiveTab] = React.useState<string>('conversations');

  useEffect(() => {
    const uploadConversation = async () => {
      await addConversation(conversations[-1]);
    }
    uploadConversation();
  }, [conversations])

  const handleFAQSubmit = () => {
    if (question.trim() === '' || answer.trim() === '') {
      return;
    }

    const newConversation: Conversation = {
      id: conversations.length + 1,
      question,
      answer
    };

    setConversations([...conversations, newConversation]);
    setQuestion('');
    setAnswer('');
    setshowConversationForm(false);
  };

  const handleQuestionChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setQuestion(e.target.value);
  }

  const handleAnswerChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    setAnswer(e.target.value);
  }

  console.log('conversations', conversations);

  return (
    <>
      <GlobalStyle />
      {showConversationForm ? (
        <Overlay>
          <PollFormContainer>
            <MainHeader>
              <MainHeaderTitle>Add Conversation</MainHeaderTitle>
              <IconButton onClick={() => setshowConversationForm(false)}>
                <Close style={{ color: '#000' }} />
              </IconButton>
            </MainHeader>
            <SidebarDescription style={{ color: '#000', textAlign: 'left', margin: '24px 0' }}>
              Add a Frequently Asked Question and the answer you would like your chatbot to give to clients.
            </SidebarDescription>
            <PollFormInput
              type="text"
              id="question"
              placeholder="Frequently Asked Question"
              value={question}
              onChange={handleQuestionChange}
            />
            <PollFormInput
              type="text"
              id="answer"
              placeholder="Answer"
              value={answer}
              onChange={handleAnswerChange}
            />
            <FormActions>
              <Button variant="contained" color="success" style={{ marginLeft: 'auto' }} onClick={handleFAQSubmit}>
                Submit
              </Button>
            </FormActions>
          </PollFormContainer>
        </Overlay>
      ) : (
        <PollContainer>
          <Sidebar>
            <Icon path={mdiCreation} size={1} className='icon-primary' style={{ color: '#bdee63' }} />
            <SidebarHeading>AI Assistant</SidebarHeading>
            <SidebarDescription>
              Create and manage an AI assistant to answer questions and engage with potential clients.
            </SidebarDescription>
            <SidebarNav>
              <ul>
                <li className={activeTab === 'conversations' ? "active" : ''} onClick={() => setActiveTab('conversations')}>Conversations</li>
                <li className={activeTab === 'upload chats' ? "active" : ''} onClick={() => setActiveTab('upload chats')}>Upload Chats <NewLabel>New</NewLabel></li>
              </ul>
            </SidebarNav>
            <StepIndicator>Zenith Tech 2024</StepIndicator>
          </Sidebar>
          {activeTab === 'conversations' ? <MainContent>
            <MainHeader>
              <MainHeaderTitle>Conversations</MainHeaderTitle>
              <CloseButton onClick={handleClose}>×</CloseButton>
            </MainHeader>
            <div className="options">
            {conversations.length > 0 ? <><SectionHeading>My Service FAQs</SectionHeading>
              <Conversations conversations={conversations} /></> : <SectionHeading style={{fontWeight: 'normal', marginTop: '2rem'}}>No Conversations Yet</SectionHeading>}
              <Button variant="contained" color="success" style={{ marginLeft: 'auto', marginTop: '2rem' }} onClick={() => setshowConversationForm(true)}>
                 + Add Conversation
              </Button>
            </div>
          </MainContent> : <MainContent>
            <MainHeader>
              <MainHeaderTitle>Uploaded Chats</MainHeaderTitle>
              <CloseButton onClick={handleClose}>×</CloseButton>
            </MainHeader>
            <div className="options">
            {conversations.length > 0 ? <><SectionHeading>My Service FAQs</SectionHeading>
              <Conversations conversations={conversations} /></> : <SectionHeading style={{fontWeight: 'normal', marginTop: '2rem'}}>No Uploaded Chats</SectionHeading>}
              <Button variant="contained" color="success" style={{ marginLeft: 'auto', marginTop: '2rem' }} onClick={() => setShowChatUpload(true)}>
                Upload
              </Button>
            </div>
          </MainContent>}
        </PollContainer>
      )}
    </>
  );
};

export default Dashboard;