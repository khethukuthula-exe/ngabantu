import React from "react";
import axios from "axios";

const conversationsDummy: { question: string, reply: string }[] = [
  { question: "hi", reply: "Hello! How can I assist you today?" },
  { question: "hey", reply: "Hey! What can I do for you?" },
  { question: "how are you?", reply: "I'm doing great, thank you! How about you?" },
  { question: "what's up?", reply: "Not much, just here to help you! How can I assist?" },
  { question: "good morning", reply: "Good morning! How can I help today?" },
  { question: "good afternoon", reply: "Good afternoon! How can I help today?" },
  { question: "good evening", reply: "Good evening! What can I do for you?" },
  { question: "bye", reply: "Goodbye! Have a great day!" },
  { question: "see you later", reply: "See you later! Don't hesitate to reach out if you need anything." },
  { question: "thanks", reply: "You're welcome! Let me know if you need more help." },
  { question: "thank you", reply: "You're welcome! Feel free to ask if you need anything else." },
  { question: "how are you doing?", reply: "I'm doing well, thank you for asking! How about you?" },
  { question: "what's your name?", reply: "I am a chatbot designed to help you! You can call me Bot." },
  { question: "what can you do?", reply: "I can help you with questions, provide information, and assist with various tasks." }
];

export const sendMessage = async (message: string) => {
  try {
    const response = await axios.post("https://siysith.pythonanywhere.com/chat", {
      message: message
    });
    return response.data;
  } catch (error) {
    console.error("Error sending message: ", error);
    return {message: conversationsDummy.map((conversation) => conversation.question === message.toLowerCase().trim() ? conversation.reply : 'Sorry, I did not understand that'), status: 'error'};
  }
};

export const getConversations = async () => {
  try {
    const response = await axios.get("https://siysith.pythonanywhere.com/conversations");
    return response.data;
  } catch (error) {
    console.error("Error fetching conversations: ", error);
    return [
      "hi", "Hello! How can I assist you today?",
      "hey", "Hey! What can I do for you?",
      "how are you?", "I'm doing great, thank you! How about you?",
      "Wwat's up?", "Not much, just here to help you! How can I assist?",
      "good morning", "Good morning! How can I help today?",
      "good afternoon", "Good afternoon! How can I help today?",
      "good evening", "Good evening! What can I do for you?",
      "bye", "Goodbye! Have a great day!",
      "see you later", "See you later! Don't hesitate to reach out if you need anything.",
      "thanks", "You're welcome! Let me know if you need more help.",
      "thank you", "You're welcome! Feel free to ask if you need anything else.",
      "how are you doing?", "I'm doing well, thank you for asking! How about you?",
      "what's your name?", "I am a chatbot designed to help you! You can call me Bot.",
      "what can you do?", "I can help you with questions, provide information, and assist with various tasks."
  ]
  }
}

export const addConversation = async (conversation: any) => {
  console.log(conversation)
  try {
    const response = await axios.post("https://siysith.pythonanywhere.com/add_conversation", {question: conversation.question, answer: conversation.answer});
    return response.data;
  } catch (error) {
    console.error("Error adding conversation: ", error);
    return {message: 'Error adding conversation', status: 'error'};
  }
};