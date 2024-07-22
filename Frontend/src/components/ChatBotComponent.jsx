import React, { useState } from "react";
import ChatBot from "react-simple-chatbot";
import { Segment } from "semantic-ui-react";
import axios from "axios";
import ImmenphereAvatar from './Immenphere.jpg';  

function ChatBotComponent() {
  const [name, setName] = useState("");
   
  

  const handleEnd = ({ steps, values }) => {
    console.log('HandleEnd called'); // Check if this is printed
    const issue = values[1];
    const message = values[2];
    console.log('Issue:', issue); // Debugging line
    console.log('Message:', message); // Debugging line
  
    axios
      .post("http://localhost:3000/api/chat", { name, issue, message })
      .then((response) => {
        console.log("Message saved:", response.data);
      })
      .catch((error) => {
        console.error("Error saving message:", error);
      });
  };
  

  const steps = [
    {
      id: "Greet",
      message: "Hello, welcome to our website",
      trigger: "Ask Name",
    },
    {
      id: "Ask Name",
      message: "Please enter your name",
      trigger: "Waiting1",
    },
    {
      id: "Waiting1",
      user: true,
      trigger: ({ value }) => {
        setName(value);
        return "Name";
      },
    },
    {
      id: "Name",
      message: ({ previousValue }) => `Hello, ${previousValue}! Thank you for contacting IMMENSPHERE. How can I help you?`,
      trigger: "issues",
    },
    {
      id: "issues",
      options: [
        { value: "Service", label: "Service", trigger: "Service" },
        { value: "Query", label: "Query", trigger: "Query" },
      ],
    },
    {
      id: "Service",
      message: "Our Services are",
      trigger: "serviceMessage",
    },
    {
      id: "serviceMessage",
      options: [
        { value: "Design", label: "Design", trigger: "Design" },
        { value: "Develop", label: "Develop", trigger: "Develop" },
        { value: "Digital marketing", label: "Digital marketing", trigger: "Digital marketing" },
      ],
    },
    {
      id: "Design",
      message: "Immensphere is a modern, clean, and super flexible IT Solution Company. It offers all the tools you need to create a unique looking site for any business. It is constantly improved with new features and functionality. Power your site with the Best Selling U-Design and get all the features you will need!",
      trigger: "endMessage",
    },
    {
      id: "Develop",
      message: "Develop mobile applications, websites, web applications",
      trigger: "endMessage",
    },
    {
      id: "Digital marketing",
      message: `We will use our expertise to make your digital experience brighter by optimizing the necessary tools. The brightest minds in digital marketing are at your service! Do you want to know more about our company? Kindly visit our official website 'https://immensphere.com/'`,
      trigger: "endMessage",
    },
    {
      id: "Query",
      options: [
        { value: "Technical issue", label: "Technical issue", trigger: "problem" },
        { value: "Login issues", label: "Login issues", trigger: "problem" },
      ],
    },
    {
      id: "problem",
      message: ({ previousValue }) => `Thank you for telling your issue about ${previousValue}. Please provide your contact details.`,
      trigger: "angularMessage",
    },
    {
      id: "angularMessage",
      message: "Thank you for your message. We will get back to you soon!",
      end: true,
    },
    {
      id: "endMessage",
      message: "Thank you for your message. We will get back to you soon!",
      end: true,
    },
  ];
  

  return (
    <Segment floated="right">
   <ChatBot
  steps={steps}
  handleEnd={handleEnd}
  headerTitle="Chat with Immensphere"
  botAvatar={ImmenphereAvatar}
/>

    </Segment>
  );
}

export default ChatBotComponent;
