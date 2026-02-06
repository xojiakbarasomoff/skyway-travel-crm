
import React, { useState, useRef, useEffect } from 'react';
import { Send, Bot, User, Sparkles, Loader2, Eraser } from 'lucide-react';
import { getTravelRecommendationStream } from '../services/geminiService';

interface Message {
  id: string;
  role: 'bot' | 'user';
  text: string;
}

const AIAssistant: React.FC = () => {
  const [input, setInput] = useState('');
  const [messages, setMessages] = useState<Message[]>([
    { id: '1', role: 'bot', text: 'Salom! Men sizning aqlli yordamchingizman. Mijozlaringiz uchun ideal sayohat rejasini tuzishda yordam beraman. Masalan: "Antaliyaga 2 kishilik budjetli sayohat rejasi tuzib ber" deb yozing.' }
  ]);
  const [loading, setLoading] = useState(false);
  const scrollRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    if (scrollRef.current) {
      scrollRef.current.scrollTop = scrollRef.current.scrollHeight;
    }
  }, [messages]);

  const handleSend = async () => {
    if (!input.trim() || loading) return;

    const userMessage: Message = { id: Date.now().toString(), role: 'user', text: input };
    setMessages(prev => [...prev, userMessage]);
    const botMsgId = (Date.now() + 1).toString();
    const initialBotMessage: Message = { id: botMsgId, role: 'bot', text: '' };
    setMessages(prev => [...prev, initialBotMessage]);
    
    setInput('');
    setLoading(true);

    await getTravelRecommendationStream(input, (streamedText) => {
      setMessages(prev => prev.map(m => m.id === botMsgId ? { ...m, text: streamedText } : m));
    });
    
    setLoading(false);
  };

  const clearChat = () => {
    setMessages([{ id: '1', role: 'bot', text: 'Suhbat tozalandi. Yangi savolingiz bormi?' }]);
  };

  return (
    <div className="max-w-4xl mx-auto h-[calc(100vh-12rem)] flex flex-col bg-white rounded-[2.5rem] border border-slate-100 shadow-2xl overflow-hidden animate-in zoom-in duration-500">
      <div className="p-6 border-b border-slate-100 bg-slate-50/50 flex items-center justify-between">
        <div className="flex items-center gap-4">
          <div className="w-12 h-12 bg-gradient-to-tr from-blue-600 to-blue-400 rounded-2xl flex items-center justify-center text-white shadow-lg shadow-blue-500/30">
            <Bot className="w-7 h-7" />
          </div>
          <div>
            <h2 className="font-extrabold text-slate-900 tracking-tight">Smart Agent</h2>
            <div className="flex items-center gap-1.5 mt-0.5">
              <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
              <p className="text-[10px] text-slate-500 font-bold uppercase tracking-widest">Aktiv • Gemini 3.0</p>
            </div>
          </div>
        </div>
        <button 
          onClick={clearChat}
          className="p-2.5 text-slate-400 hover:text-red-500 hover:bg-red-50 rounded-xl transition-all"
          title="Suhbatni tozalash"
        >
          <Eraser className="w-5 h-5" />
        </button>
      </div>

      <div ref={scrollRef} className="flex-1 overflow-y-auto p-8 space-y-8 bg-[#fdfdfd]">
        {messages.map((msg) => (
          <div key={msg.id} className={`flex ${msg.role === 'user' ? 'justify-end' : 'justify-start'}`}>
            <div className={`flex gap-4 max-w-[85%] ${msg.role === 'user' ? 'flex-row-reverse' : 'flex-row'}`}>
              <div className={`w-9 h-9 rounded-xl flex-shrink-0 flex items-center justify-center ${msg.role === 'user' ? 'bg-slate-200' : 'bg-blue-600 shadow-md shadow-blue-500/20'}`}>
                {msg.role === 'user' ? <User className="w-5 h-5 text-slate-600" /> : <Sparkles className="w-5 h-5 text-white" />}
              </div>
              <div className={`p-5 rounded-3xl ${
                msg.role === 'user' 
                  ? 'bg-blue-600 text-white rounded-tr-none shadow-lg shadow-blue-500/10' 
                  : 'bg-white text-slate-800 rounded-tl-none border border-slate-100 shadow-sm'
              }`}>
                <p className="text-sm leading-relaxed whitespace-pre-wrap font-medium">{msg.text || (loading && msg.role === 'bot' ? '...' : '')}</p>
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="p-6 bg-white border-t border-slate-50">
        <div className="relative group">
          <input
            type="text"
            value={input}
            onChange={(e) => setInput(e.target.value)}
            onKeyPress={(e) => e.key === 'Enter' && handleSend()}
            placeholder="Mijoz uchun sayohat rejasi yoki maslahat so'rang..."
            className="w-full pl-6 pr-14 py-4 bg-slate-50 border border-slate-200 rounded-2xl focus:outline-none focus:ring-2 focus:ring-blue-500 focus:bg-white transition-all shadow-inner group-focus-within:shadow-blue-500/5"
          />
          <button
            onClick={handleSend}
            disabled={!input.trim() || loading}
            className="absolute right-2 top-2 bottom-2 px-4 bg-blue-600 text-white rounded-xl hover:bg-blue-700 disabled:opacity-50 disabled:cursor-not-allowed transition-all shadow-md active:scale-95"
          >
            {loading ? <Loader2 className="w-5 h-5 animate-spin" /> : <Send className="w-5 h-5" />}
          </button>
        </div>
        <div className="flex items-center justify-center gap-2 mt-4">
           <div className="px-2 py-0.5 bg-blue-50 text-blue-600 rounded text-[9px] font-bold uppercase tracking-tighter">AI Analysis</div>
           <p className="text-[10px] text-slate-400 font-medium italic">SkyWay CRM maxsus sun'iy intellekt tizimi</p>
        </div>
      </div>
    </div>
  );
};

export default AIAssistant;
