import React from "react";
import axios from "axios";
import { Conversation } from "../components/dashboard/Dashboard";
import { TutorConversations } from "../components/conversations/ConversationMocks";

const conversationsDummy: Conversation[] = [
  { id: 4, question: "What's up?", answer: "Not much, just here to help you! How can I assist?" },
  // { id: 5, question: "good morning", answer: "Good morning! How can I help today?" },
  // { id: 6, question: "good afternoon", answer: "Good afternoon! How can I help today?" },
  // { id: 7, question: "good evening", answer: "Good evening! What can I do for you?" },
  // { id: 8, question: "bye", answer: "Goodbye! Have a great day!" },
  // { id: 9, question: "see you later", answer: "See you later! Don't hesitate to reach out if you need anything." },
  { id: 10, question: "Thanks", answer: "You're welcome! Let me know if you need more help." },
  // { id: 11, question: "thank you", answer: "You're welcome! Feel free to ask if you need anything else." },
  // { id: 12, question: "how are you doing?", answer: "I'm doing well, thank you for asking! How about you?" },
  { id: 13, question: "What's your name?", answer: "I am a chatbot designed to help you! You can call me Bot." },
  { id: 14, question: "What can you do?", answer: "I can help you with questions, provide information, and assist with various tasks." }
];

export const sendMessage = (message: string, userType: string) => {
  let response;
  switch (userType) {
    case 'tutor':
      response = TutorConversations.find((conversation) => conversation.question.toLowerCase().trim() === message.toLowerCase().trim())
      break;
    default:
      response = conversationsDummy.find((conversation) => conversation.question.toLowerCase().trim() === message.toLowerCase().trim())  
  }
  // console.log('response',response)
  return response ? {message: response.answer, attachment: response.attachment} : {message: 'Sorry, I did not understand that'};
};

export const getConversations = () => {
 return conversationsDummy;
}

export const addConversation = async (conversation: any) => {
  console.log(conversation)

  // try {
  //   const response = await axios.post("https://siysith.pythonanywhere.com/add_conversation", {question: conversation.question, answer: conversation.answer});
  //   return response.data;
  // } catch (error) {
  //   console.error("Error adding conversation: ", error);
  //   return {message: 'Error adding conversation', status: 'error'};
  // }
};