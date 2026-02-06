
import React, { useState, useEffect } from 'react';
import Sidebar from './components/Sidebar';
import Dashboard from './components/Dashboard';
import CustomerList from './components/CustomerList';
import TripGrid from './components/TripGrid';
import AIAssistant from './components/AIAssistant';
import Login from './components/Login';
import { Bell, Search, User, Keyboard } from 'lucide-react';

const App: React.FC = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState('dashboard');
  const [currentTime, setCurrentTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => setCurrentTime(new Date()), 1000);
    return () => clearInterval(timer);
  }, []);

  if (!isLoggedIn) {
    return <Login onLogin={() => setIsLoggedIn(true)} />;
  }

  const renderContent = () => {
    switch (activeTab) {
      case 'dashboard': return <Dashboard />;
      case 'customers': return <CustomerList />;
      case 'trips': return <TripGrid />;
      case 'ai-assistant': return <AIAssistant />;
      default: return <Dashboard />;
    }
  };

  return (
    <div className="flex min-h-screen bg-slate-50 font-['Inter']">
      <Sidebar activeTab={activeTab} setActiveTab={setActiveTab} />
      
      <main className="flex-1 flex flex-col min-w-0 overflow-hidden relative">
        <header className="h-20 bg-white/80 backdrop-blur-md border-b border-slate-100 flex items-center justify-between px-10 sticky top-0 z-40">
          <div className="flex-1 max-w-xl hidden lg:block">
            <div className="relative group">
              <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-4 h-4 text-slate-400 group-focus-within:text-blue-500 transition-colors" />
              <input 
                type="text" 
                placeholder="Tizim bo'ylab qidirish..."
                className="w-full pl-12 pr-12 py-3 bg-slate-100/50 border border-transparent rounded-2xl text-sm focus:outline-none focus:ring-2 focus:ring-blue-500/20 focus:bg-white focus:border-blue-500/30 transition-all"
              />
              <div className="absolute right-3 top-1/2 -translate-y-1/2 px-1.5 py-0.5 border border-slate-200 rounded text-[10px] text-slate-400 font-bold bg-white">
                ⌘ K
              </div>
            </div>
          </div>

          <div className="flex items-center gap-6">
            <div className="hidden xl:flex items-center gap-2 text-slate-400 font-semibold text-xs bg-slate-50 px-3 py-1.5 rounded-lg border border-slate-100">
               <Clock className="w-3.5 h-3.5" />
               {currentTime.toLocaleTimeString('uz-UZ', { hour: '2-digit', minute: '2-digit' })}
            </div>

            <button className="p-2.5 text-slate-400 hover:text-blue-600 hover:bg-blue-50 rounded-xl relative transition-all group">
              <Bell className="w-5 h-5 group-hover:shake" />
              <span className="absolute top-2.5 right-2.5 w-2 h-2 bg-red-500 border-2 border-white rounded-full"></span>
            </button>
            
            <div className="h-10 w-px bg-slate-100"></div>
            
            <div className="flex items-center gap-4 cursor-pointer group">
              <div className="text-right hidden sm:block">
                <p className="text-sm font-extrabold text-slate-900 group-hover:text-blue-600 transition-colors">Admin SkyWay</p>
                <p className="text-[10px] font-bold text-green-500 uppercase tracking-widest">Onlayn</p>
              </div>
              <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-indigo-600 rounded-2xl flex items-center justify-center text-white font-bold shadow-xl shadow-blue-500/20 group-hover:scale-105 transition-transform duration-300">
                <User className="w-6 h-6" />
              </div>
            </div>
          </div>
        </header>

        <div className="flex-1 overflow-y-auto p-10 bg-[#f8fafc]">
          <div className="max-w-7xl mx-auto">
            {renderContent()}
          </div>
        </div>

        <footer className="py-4 px-10 bg-white border-t border-slate-100 flex items-center justify-between">
          <p className="text-[10px] font-bold text-slate-400 uppercase tracking-widest">&copy; 2023 SkyWay CRM Enterprise</p>
          <div className="flex gap-4">
             <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase">Yordam</a>
             <a href="#" className="text-[10px] font-bold text-slate-400 hover:text-blue-600 transition-colors uppercase">Maxfiylik</a>
          </div>
        </footer>
      </main>
    </div>
  );
};

// Clock icon needed for the header
const Clock = ({ className }: { className?: string }) => (
  <svg className={className} xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><circle cx="12" cy="12" r="10"/><polyline points="12 6 12 12 16 14"/></svg>
);

export default App;
