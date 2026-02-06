
import React from 'react';
import { LayoutDashboard, Users, Map, CalendarRange, MessageSquareCode, Settings, LogOut } from 'lucide-react';

interface SidebarProps {
  activeTab: string;
  setActiveTab: (tab: string) => void;
}

const Sidebar: React.FC<SidebarProps> = ({ activeTab, setActiveTab }) => {
  const menuItems = [
    { id: 'dashboard', label: 'Boshqaruv Paneli', icon: <LayoutDashboard className="w-5 h-5" /> },
    { id: 'customers', label: 'Mijozlar', icon: <Users className="w-5 h-5" /> },
    { id: 'trips', label: 'Tur Paketlar', icon: <Map className="w-5 h-5" /> },
    { id: 'bookings', label: 'Buyurtmalar', icon: <CalendarRange className="w-5 h-5" /> },
    { id: 'ai-assistant', label: 'AI Yordamchi', icon: <MessageSquareCode className="w-5 h-5" /> },
  ];

  return (
    <aside className="w-64 bg-slate-900 h-screen sticky top-0 flex flex-col transition-all duration-300">
      <div className="p-6">
        <div className="flex items-center gap-3 text-white mb-8">
          <div className="bg-blue-600 p-2 rounded-lg">
            <Map className="w-6 h-6" />
          </div>
          <span className="text-xl font-bold tracking-tight">SkyWay CRM</span>
        </div>

        <nav className="space-y-1">
          {menuItems.map((item) => (
            <button
              key={item.id}
              onClick={() => setActiveTab(item.id)}
              className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 group ${
                activeTab === item.id 
                  ? 'bg-blue-600 text-white shadow-lg shadow-blue-500/30' 
                  : 'text-slate-400 hover:bg-slate-800 hover:text-white'
              }`}
            >
              {item.icon}
              <span className="font-medium">{item.label}</span>
            </button>
          ))}
        </nav>
      </div>

      <div className="mt-auto p-6 space-y-4">
        <button className="w-full flex items-center gap-3 px-4 py-3 text-slate-400 hover:text-white transition-colors">
          <Settings className="w-5 h-5" />
          <span className="font-medium">Sozlamalar</span>
        </button>
        <button className="w-full flex items-center gap-3 px-4 py-3 text-red-400 hover:text-red-300 transition-colors">
          <LogOut className="w-5 h-5" />
          <span className="font-medium">Chiqish</span>
        </button>
      </div>
    </aside>
  );
};

export default Sidebar;
