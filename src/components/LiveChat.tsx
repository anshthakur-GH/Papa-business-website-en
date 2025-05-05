
import React, { useState, useEffect } from 'react';
import { X, MessageSquare } from 'lucide-react';

const LiveChat = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState([
    { id: 1, text: 'Hello! How can I help you today?', sender: 'agent', time: new Date() }
  ]);
  const [newMessage, setNewMessage] = useState('');
  
  const toggleChat = () => {
    setIsOpen(!isOpen);
  };
  
  const sendMessage = (e) => {
    e.preventDefault();
    if (!newMessage.trim()) return;
    
    const userMessage = { id: messages.length + 1, text: newMessage, sender: 'user', time: new Date() };
    setMessages((prev) => [...prev, userMessage]);
    setNewMessage('');
    
    // Simulate agent response after a delay
    setTimeout(() => {
      const responses = [
        'I can help you with that. Could you please provide more details?',
        'Thank you for your message. One of our agents will get back to you shortly.',
        'Would you like me to arrange a callback from our insurance expert?',
        'For immediate assistance, you can also call us at 9721883299.',
        'We offer the lowest rates for motor insurance. Would you like a quote?'
      ];
      
      const randomResponse = responses[Math.floor(Math.random() * responses.length)];
      const agentMessage = { id: messages.length + 2, text: randomResponse, sender: 'agent', time: new Date() };
      setMessages((prev) => [...prev, agentMessage]);
    }, 1000);
  };
  
  return (
    <>
      {/* Chat button */}
      <button
        className={`fixed z-40 bottom-6 right-6 w-14 h-14 rounded-full shadow-lg flex items-center justify-center transition-all duration-300 ${
          isOpen ? 'bg-red-500 hover:bg-red-600' : 'bg-dark-blue hover:bg-blue-600'
        }`}
        onClick={toggleChat}
        aria-label="Live Chat"
      >
        {isOpen ? <X size={24} className="text-white" /> : <MessageSquare size={24} className="text-white" />}
      </button>
      
      {/* Chat window */}
      <div
        className={`fixed z-30 bottom-24 right-6 w-[350px] max-w-[calc(100vw-3rem)] bg-dark-secondary rounded-lg shadow-2xl flex flex-col transition-transform duration-300 transform ${
          isOpen ? 'translate-y-0 opacity-100' : 'translate-y-10 opacity-0 pointer-events-none'
        }`}
        style={{ height: '500px', maxHeight: 'calc(100vh - 120px)' }}
      >
        {/* Chat header */}
        <div className="bg-dark-blue rounded-t-lg p-4 flex items-center">
          <div className="w-10 h-10 rounded-full bg-white/20 flex items-center justify-center mr-3">
            <MessageSquare size={20} className="text-white" />
          </div>
          <div>
            <h4 className="font-semibold text-white">Live Support</h4>
            <p className="text-xs text-blue-100">We typically reply within minutes</p>
          </div>
        </div>
        
        {/* Chat messages */}
        <div className="flex-1 overflow-y-auto p-4 space-y-4">
          {messages.map((message) => (
            <div
              key={message.id}
              className={`flex ${message.sender === 'user' ? 'justify-end' : 'justify-start'}`}
            >
              <div
                className={`max-w-[80%] rounded-lg p-3 ${
                  message.sender === 'user'
                    ? 'bg-dark-blue text-white'
                    : 'bg-dark-accent text-dark-text'
                }`}
              >
                <p>{message.text}</p>
                <p className="text-xs opacity-70 mt-1">
                  {message.time.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' })}
                </p>
              </div>
            </div>
          ))}
        </div>
        
        {/* Chat input */}
        <form onSubmit={sendMessage} className="border-t border-gray-700 p-4">
          <div className="flex">
            <input
              type="text"
              value={newMessage}
              onChange={(e) => setNewMessage(e.target.value)}
              placeholder="Type your message..."
              className="flex-1 bg-dark rounded-l-lg px-4 py-2 text-dark-text outline-none border border-gray-700 focus:border-dark-blue"
            />
            <button
              type="submit"
              className="bg-dark-blue hover:bg-blue-600 text-white px-4 rounded-r-lg transition-colors"
            >
              Send
            </button>
          </div>
        </form>
      </div>
    </>
  );
};

export default LiveChat;
