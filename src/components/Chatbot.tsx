import React, { useState, useRef, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageCircle, X, Send, Bot, User } from 'lucide-react';

interface Message {
  id: string;
  type: 'user' | 'bot';
  content: string;
  timestamp: Date;
}

const Chatbot: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [messages, setMessages] = useState<Message[]>([
    {
      id: '1',
      type: 'bot',
      content: "Hi! I'm PromptBot 🤖 Ask me anything about Prompt Techies!",
      timestamp: new Date()
    }
  ]);
  const [inputMessage, setInputMessage] = useState('');
  const messagesEndRef = useRef<HTMLDivElement>(null);
  const inputRef = useRef<HTMLInputElement>(null);

  const quickOptions = [
    { text: 'What is Prompt Techies?', emoji: '🚀' },
    { text: 'How to join?', emoji: '📝' },
    { text: 'Next event?', emoji: '📅' },
    { text: 'Team info', emoji: '👥' },
    { text: 'Tools', emoji: '🛠️' },
    { text: 'Contact', emoji: '📞' }
  ];

  // Pre-defined responses
  const responses: { [key: string]: string } = {
    'what is prompt techies': "Prompt Techies is CMRIT's premier student tech club! 🎯 We focus on AI, Web Development, Innovation, and Community Building. Our motto is 'Dream. Develop. Deploy.' We organize events, workshops, and provide opportunities for students to grow in tech! 🚀",
    
    'how to join': "Great question! 🌟 You can join Prompt Techies by:\n\n1. 📝 Fill out our application form: https://forms.gle/FCvFaMWWVcoztz9J7\n2. 💬 Join our WhatsApp group: https://chat.whatsapp.com/D9akvV5WlvN8bJW78GIG9Y\n3. 📧 Email us: prompt_techies@cmrithyderabad.edu.in\n\nWe welcome all passionate tech enthusiasts! ✨",
    
    'next event': "🔥 Our biggest event is coming up!\n\n🎯 SMARTZY × PROMPT TECHIES HACKATHON 2025\n📅 Date: November 29, 2025\n👥 3000+ Hackers expected\n📍 Location: Smartzy HQ & CMRIT\n\n🚀 Register now: https://forms.gle/Hn8JVEov5AAvS7Ef8\n\nIt's going to be Hyderabad's biggest student hackathon! 💻✨",
    
    'team info': "Our amazing team is organized into specialized divisions! 👑\n\n👑 Founders: Saahil & Varshitha\n🖥️ Digital Team: Swaroop, Zaid, Prasanna\n🎨 Design Team: Harsha, Deepak, Chandu\n🧠 AI Division: Ravi, Vaishnavi, Sriya\n📢 PR & Creative: Yashwanth, Manaswini, Durga, Vamshi\n🧭 Management: Sheetal, Navya, Vyshali\n⚙️ Operations: Gopi, Kiran, Maheswar\n\nEach member brings unique skills to drive innovation! 🌟",
    
    'tools': "We've built amazing tools for students! 🛠️\n\n🧾 Resume Builder Tool\n✨ Create ATS-friendly resumes in minutes\n🔗 https://resumebuilder-bice.vercel.app/\n\n🤖 AI Tools Directory\n✨ 100+ curated AI tools by our team\n🔗 https://techiestools.vercel.app/\n\nMore tools coming soon! Built with ❤️ by Prompt Techies",
    
    'contact': "Let's connect! 📞\n\n📧 Email: prompt_techies@cmrithyderabad.edu.in\n📱 Phone: +91 80080 87702\n📍 Location: CMR Institute of Technology, Hyderabad\n\n🌐 Follow us:\n• Instagram: @cmrit_prompt_techies\n• LinkedIn: cmrit-prompt-techies\n• GitHub: @prompttechies123\n• Twitter: @promptechies\n\nWe'd love to hear from you! 💙",
    
    'events': "We organize amazing events throughout the year! 🎉\n\nRecent events:\n• 🌐 CYBERSPHERE (Feb 2024)\n• ✨ SPECTRUM SPARKS (Mar 2024)\n• 🤝 JNTU X CMRIT (Apr 2024)\n• 🧠 AI GANESHA (Sep 2024)\n\nUpcoming:\n• 🔥 SMARTZY × PROMPT TECHIES HACKATHON 2025\n• 👩‍💻 SAWIT.AI - Gen AI Learning Challenge\n• 🚀 AI No-Code Workshop\n\nStay tuned for more exciting events! 🌟",
    
    'ai': "AI is at the heart of what we do! 🧠\n\nOur AI Division includes:\n• Ravi Kiran - Chat GPT Lead\n• Neeli Vaishnavi - AI Lead  \n• Sriya Kandukuri - Tech Lead (AI Specialist)\n\nWe explore cutting-edge AI technologies, organize AI workshops, and help students learn about machine learning, deep learning, and generative AI! 🤖✨",
    
    'hackathon': "🔥 SMARTZY × PROMPT TECHIES HACKATHON 2025 is our flagship event!\n\n📅 November 29, 2025\n👥 3000+ Hackers\n📍 Smartzy HQ & CMRIT\n⏰ 24-hour hacking sprint\n\n🎯 Features:\n• AI + Blockchain tracks\n• Industry mentorship\n• Startup showcase\n• Amazing prizes!\n\n🚀 Register: https://forms.gle/Hn8JVEov5AAvS7Ef8",
    
    'web development': "We love web development! 💻\n\nOur Code Crew (led by Maheswar) works on:\n• Modern web applications\n• React & Next.js projects\n• Full-stack development\n• UI/UX design\n\nWe also built our own tools like the Resume Builder and AI Tools Directory! Check them out on our website. 🚀",
    
    'founders': "Meet our amazing founders! 👑\n\n🌟 Shaik Saahil Zameer - Founder & President\nVisionary leader driving innovation at Prompt Techies\n\n🌟 Varshitha Reddy - Founder Vice President  \nEmpowering students through technology and community\n\nTogether, they've built Prompt Techies into CMRIT's premier tech club! 🚀✨"
  };

  const scrollToBottom = () => {
    messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  useEffect(() => {
    scrollToBottom();
  }, [messages]);

  useEffect(() => {
    if (isOpen && inputRef.current) {
      inputRef.current.focus();
    }
  }, [isOpen]);

  const getBotResponse = (userMessage: string): string => {
    const message = userMessage.toLowerCase().trim();
    
    // Check for exact matches first
    for (const [key, response] of Object.entries(responses)) {
      if (message.includes(key)) {
        return response;
      }
    }
    
    // Check for partial matches and keywords
    if (message.includes('hello') || message.includes('hi') || message.includes('hey')) {
      return "Hello there! 👋 Welcome to Prompt Techies! I'm here to help you learn about our amazing tech club. What would you like to know? 🚀";
    }
    
    if (message.includes('thank') || message.includes('thanks')) {
      return "You're welcome! 😊 Happy to help! If you have any more questions about Prompt Techies, feel free to ask. Don't forget to join our community! 💙";
    }
    
    if (message.includes('bye') || message.includes('goodbye')) {
      return "Goodbye! 👋 Thanks for chatting with me. Don't forget to apply to join Prompt Techies and follow us on social media! See you soon! 🚀✨";
    }
    
    if (message.includes('help')) {
      return "I'm here to help! 🤝 You can ask me about:\n\n• What is Prompt Techies?\n• How to join our club\n• Upcoming events & hackathons\n• Our team members\n• Tools we've built\n• Contact information\n\nJust type your question or use the quick options below! 💙";
    }
    
    // Fallback response
    return "That's an interesting question! 🤔 I'd love to help, but I might not have that specific information. Try asking about:\n\n• Prompt Techies club info\n• How to join us\n• Our events & hackathon\n• Team members\n• Our tools\n• Contact details\n\nOr reach out to us directly at prompt_techies@cmrithyderabad.edu.in! 📧";
  };

  const sendMessage = (messageText: string) => {
    if (!messageText.trim()) return;

    const userMessage: Message = {
      id: Date.now().toString(),
      type: 'user',
      content: messageText.trim(),
      timestamp: new Date()
    };

    setMessages(prev => [...prev, userMessage]);
    setInputMessage('');

    // Simulate typing delay
    setTimeout(() => {
      const botResponse = getBotResponse(messageText);
      const botMessage: Message = {
        id: (Date.now() + 1).toString(),
        type: 'bot',
        content: botResponse,
        timestamp: new Date()
      };
      setMessages(prev => [...prev, botMessage]);
    }, 500);
  };

  const handleQuickOption = (option: typeof quickOptions[0]) => {
    sendMessage(option.text);
  };

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    sendMessage(inputMessage);
  };

  const formatTime = (date: Date) => {
    return date.toLocaleTimeString([], { hour: '2-digit', minute: '2-digit' });
  };

  return (
    <>
      {/* Chat Button */}
      <motion.button
        onClick={() => setIsOpen(!isOpen)}
        className="fixed bottom-6 right-6 z-50 w-16 h-16 bg-gradient-to-r from-neon-blue to-blue-500 rounded-full flex items-center justify-center hover:from-neon-blue-hover hover:to-blue-600 transition-all duration-300 group shadow-lg hover:shadow-neon-blue/25"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.9 }}
        animate={{ rotate: isOpen ? 180 : 0 }}
        title="Chat with PromptBot!"
      >
        {isOpen ? (
          <X size={24} className="text-white" />
        ) : (
          <MessageCircle size={24} className="text-white group-hover:animate-bounce" />
        )}
        
        {/* Notification pulse */}
        {!isOpen && (
          <motion.div
            className="absolute inset-0 bg-neon-blue rounded-full"
            animate={{ scale: [1, 1.2, 1], opacity: [0.7, 0, 0.7] }}
            transition={{ duration: 2, repeat: Infinity }}
          />
        )}
      </motion.button>

      {/* Chat Window */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ opacity: 0, y: 100, scale: 0.8 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 100, scale: 0.8 }}
            transition={{ duration: 0.3 }}
            className="fixed bottom-24 right-6 z-50 w-96 h-[500px] glass-card rounded-xl overflow-hidden flex flex-col shadow-2xl"
          >
            {/* Header */}
            <div className="bg-gradient-to-r from-neon-blue/20 to-blue-500/20 p-4 border-b border-white/10">
              <div className="flex items-center space-x-3">
                <div className="w-10 h-10 bg-gradient-to-r from-neon-blue to-blue-500 rounded-full flex items-center justify-center">
                  <Bot size={20} className="text-white" />
                </div>
                <div className="flex-1">
                  <h3 className="font-orbitron font-semibold text-white">PromptBot</h3>
                  <p className="text-xs text-gray-400">Your Prompt Techies Assistant</p>
                </div>
                <motion.div
                  className="w-3 h-3 bg-green-400 rounded-full"
                  animate={{ opacity: [0.5, 1, 0.5] }}
                  transition={{ duration: 2, repeat: Infinity }}
                />
              </div>
            </div>

            {/* Messages */}
            <div className="flex-1 p-4 space-y-4 overflow-y-auto">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 10 }}
                  animate={{ opacity: 1, y: 0 }}
                  className={`flex ${message.type === 'user' ? 'justify-end' : 'justify-start'}`}
                >
                  <div className={`flex items-start space-x-2 max-w-[80%] ${message.type === 'user' ? 'flex-row-reverse space-x-reverse' : ''}`}>
                    <div className={`w-8 h-8 rounded-full flex items-center justify-center flex-shrink-0 ${
                      message.type === 'user' 
                        ? 'bg-neon-blue' 
                        : 'bg-gradient-to-r from-purple-500 to-blue-500'
                    }`}>
                      {message.type === 'user' ? (
                        <User size={16} className="text-white" />
                      ) : (
                        <Bot size={16} className="text-white" />
                      )}
                    </div>
                    <div className={`p-3 rounded-lg text-sm ${
                      message.type === 'user'
                        ? 'bg-neon-blue text-white'
                        : 'bg-white/10 text-white'
                    }`}>
                      <p className="whitespace-pre-wrap">{message.content}</p>
                      <p className={`text-xs mt-1 opacity-70 ${
                        message.type === 'user' ? 'text-blue-100' : 'text-gray-400'
                      }`}>
                        {formatTime(message.timestamp)}
                      </p>
                    </div>
                  </div>
                </motion.div>
              ))}
              
              <div ref={messagesEndRef} />
            </div>

            {/* Quick Options */}
            <div className="p-3 border-t border-white/10">
              <div className="grid grid-cols-3 gap-2 mb-3">
                {quickOptions.map((option, index) => (
                  <motion.button
                    key={index}
                    onClick={() => handleQuickOption(option)}
                    className="text-xs bg-white/10 hover:bg-neon-blue/20 text-white px-2 py-2 rounded-lg transition-colors duration-300 flex items-center justify-center space-x-1"
                    whileHover={{ scale: 1.05 }}
                    whileTap={{ scale: 0.95 }}
                  >
                    <span>{option.emoji}</span>
                    <span className="truncate">{option.text}</span>
                  </motion.button>
                ))}
              </div>

              {/* Input Form */}
              <form onSubmit={handleSubmit} className="flex space-x-2">
                <input
                  ref={inputRef}
                  type="text"
                  value={inputMessage}
                  onChange={(e) => setInputMessage(e.target.value)}
                  placeholder="Ask me anything..."
                  className="flex-1 bg-white/10 border border-white/20 rounded-lg px-3 py-2 text-sm text-white placeholder-gray-400 focus:outline-none focus:border-neon-blue"
                />
                <motion.button
                  type="submit"
                  disabled={!inputMessage.trim()}
                  className="bg-neon-blue hover:bg-neon-blue-hover text-white p-2 rounded-lg transition-colors duration-300 disabled:opacity-50 disabled:cursor-not-allowed"
                  whileHover={{ scale: 1.05 }}
                  whileTap={{ scale: 0.95 }}
                >
                  <Send size={16} />
                </motion.button>
              </form>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Chatbot;