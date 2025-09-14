import React, { useState } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import Finance from './components/Finance';
import HR from './components/HR';
import Marketing from './components/Marketing';
import Customers from './components/Customers';
import Compliance from './components/Compliance';
import Reports from './components/Reports';
import AIAssistant from './components/AIAssistant';
import { ToastProvider } from './contexts/ToastContext';
import { DataProvider } from './contexts/DataContext';
import { MessageCircle } from 'lucide-react';

function App() {
  const [activeTab, setActiveTab] = useState('dashboard');
  const [showAssistant, setShowAssistant] = useState(false);
  const [darkMode, setDarkMode] = useState(false);

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard':
        return <Dashboard />;
      case 'finance':
        return <Finance />;
      case 'hr':
        return <HR />;
      case 'marketing':
        return <Marketing />;
      case 'customers':
        return <Customers />;
      case 'compliance':
        return <Compliance />;
      case 'reports':
        return <Reports />;
      default:
        return <Dashboard />;
    }
  };

  return (
    <ToastProvider>
      <DataProvider>
        <div className={`min-h-screen ${darkMode ? 'dark bg-gray-900' : 'bg-gray-50'} transition-colors duration-300`}>
        <div className="flex">
          <Sidebar 
            activeTab={activeTab} 
            setActiveTab={setActiveTab}
            darkMode={darkMode}
            setDarkMode={setDarkMode}
          />
          
          <main className="flex-1 ml-0 lg:ml-64 transition-all duration-300">
            <div className="p-4 lg:p-8">
              {renderContent()}
            </div>
          </main>

          {/* AI Assistant Toggle */}
          <button
            onClick={() => setShowAssistant(!showAssistant)}
            className="fixed bottom-6 right-6 bg-blue-600 hover:bg-blue-700 text-white p-3 lg:p-4 rounded-full shadow-lg transition-all duration-300 hover:scale-110 z-50"
            aria-label="Open AI Assistant"
          >
            <MessageCircle size={20} className="lg:w-6 lg:h-6" />
          </button>

          {/* AI Assistant */}
          {showAssistant && (
            <AIAssistant onClose={() => setShowAssistant(false)} darkMode={darkMode} />
          )}
        </div>
      </div>
      </DataProvider>
    </ToastProvider>
  );
}

export default App;