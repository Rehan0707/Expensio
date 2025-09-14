import React, { useState } from 'react';
import { X, Send, Mic, MicOff } from 'lucide-react';

interface AIAssistantProps {
  onClose: () => void;
  darkMode: boolean;
}

const AIAssistant: React.FC<AIAssistantProps> = ({ onClose, darkMode }) => {
  const [message, setMessage] = useState('');
  const [isListening, setIsListening] = useState(false);
  const [messages, setMessages] = useState([
    {
      type: 'assistant',
      content: 'Hello! I\'m your AI business assistant. I can help you with quick queries about your business. Try asking "Show today\'s profit" or "How are my campaigns performing?"'
    }
  ]);

  const quickActions = [
    'Show today\'s profit',
    'Marketing performance',
    'Employee attendance',
    'Pending invoices',
    'Cash flow forecast',
    'Top customers'
  ];

  const handleSendMessage = () => {
    if (!message.trim()) return;

    const userMessage = { type: 'user', content: message };
    setMessages(prev => [...prev, userMessage]);

    // Simulate AI response
    setTimeout(() => {
      const responses = {
        'show today\'s profit': 'Today\'s profit is ₹15,240. This is 12% higher than yesterday. Your main revenue sources were sales (₹28,500) and services (₹8,750).',
        'marketing performance': 'Your marketing campaigns are performing well! Current ROI is 245%. The "Diwali Sale" campaign has the highest engagement with 3,250 clicks.',
        'employee attendance': 'Today\'s attendance is 92% (22/24 employees present). 2 employees are on leave and 1 is running late.',
        'pending invoices': 'You have 3 pending invoices totaling ₹2,42,000. Invoice #INV-002 (₹32,000) is due in 2 days.',
        'cash flow forecast': 'Based on current trends, next month\'s cash flow is predicted to be ₹4,85,000 positive. Consider investing surplus in growth opportunities.',
        'top customers': 'Your top 3 customers are: 1) Rahul Sharma (₹45,000), 2) Priya Patel (₹28,000), 3) Amit Singh (₹15,000).'
      };

      const response = responses[message.toLowerCase()] || 
        'I understand your query. This feature will be available once connected to your live business data. Would you like me to help with something else?';

      setMessages(prev => [...prev, { type: 'assistant', content: response }]);
    }, 1000);

    setMessage('');
  };

  const handleQuickAction = (action: string) => {
    setMessage(action);
    handleSendMessage();
  };

  const toggleListening = () => {
    setIsListening(!isListening);
    // Voice recognition would be implemented here
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center z-50 p-4">
      <div className={`w-full max-w-2xl h-[600px] rounded-xl shadow-xl ${
        darkMode ? 'bg-gray-800 border-gray-700' : 'bg-white border-gray-200'
      } border flex flex-col`}>
        {/* Header */}
        <div className={`p-4 border-b ${darkMode ? 'border-gray-700' : 'border-gray-200'} flex items-center justify-between`}>
          <div>
            <h3 className={`font-semibold ${darkMode ? 'text-white' : 'text-gray-900'}`}>
              AI Business Assistant
            </h3>
            <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'}`}>
              Ask me anything about your business
            </p>
          </div>
          <button
            onClick={onClose}
            className={`p-2 rounded-lg hover:${darkMode ? 'bg-gray-700' : 'bg-gray-100'} transition-colors`}
          >
            <X className={darkMode ? 'text-gray-400' : 'text-gray-500'} size={20} />
          </button>
        </div>

        {/* Messages */}
        <div className="flex-1 p-4 overflow-y-auto space-y-4">
          {messages.map((msg, index) => (
            <div key={index} className={`flex ${msg.type === 'user' ? 'justify-end' : 'justify-start'}`}>
              <div className={`max-w-xs lg:max-w-md px-4 py-2 rounded-lg ${
                msg.type === 'user'
                  ? 'bg-blue-600 text-white'
                  : darkMode
                  ? 'bg-gray-700 text-gray-100'
                  : 'bg-gray-100 text-gray-900'
              }`}>
                <p className="text-sm">{msg.content}</p>
              </div>
            </div>
          ))}
        </div>

        {/* Quick Actions */}
        <div className={`p-4 border-t ${darkMode ? 'border-gray-700' : 'border-gray-200'}`}>
          <p className={`text-sm ${darkMode ? 'text-gray-400' : 'text-gray-500'} mb-2`}>
            Quick Actions:
          </p>
          <div className="flex flex-wrap gap-2 mb-4">
            {quickActions.map((action, index) => (
              <button
                key={index}
                onClick={() => handleQuickAction(action)}
                className={`px-3 py-1 rounded-full text-xs ${
                  darkMode
                    ? 'bg-gray-700 text-gray-300 hover:bg-gray-600'
                    : 'bg-gray-200 text-gray-700 hover:bg-gray-300'
                } transition-colors`}
              >
                {action}
              </button>
            ))}
          </div>

          {/* Input */}
          <div className="flex gap-2">
            <div className="flex-1 flex">
              <input
                type="text"
                value={message}
                onChange={(e) => setMessage(e.target.value)}
                onKeyPress={(e) => e.key === 'Enter' && handleSendMessage()}
                placeholder="Type your message..."
                className={`flex-1 px-4 py-2 border rounded-l-lg focus:outline-none focus:ring-2 focus:ring-blue-500 ${
                  darkMode
                    ? 'bg-gray-700 border-gray-600 text-white placeholder-gray-400'
                    : 'bg-white border-gray-300 text-gray-900 placeholder-gray-500'
                }`}
              />
              <button
                onClick={toggleListening}
                className={`px-3 border-t border-b ${
                  isListening ? 'bg-red-100 text-red-600' : darkMode ? 'bg-gray-700 text-gray-400' : 'bg-gray-50 text-gray-500'
                } ${darkMode ? 'border-gray-600' : 'border-gray-300'} hover:${
                  isListening ? 'bg-red-200' : darkMode ? 'bg-gray-600' : 'bg-gray-100'
                } transition-colors`}
              >
                {isListening ? <MicOff size={18} /> : <Mic size={18} />}
              </button>
            </div>
            <button
              onClick={handleSendMessage}
              className="px-4 py-2 bg-blue-600 text-white rounded-r-lg hover:bg-blue-700 transition-colors"
            >
              <Send size={18} />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;