
import React from 'react';
import { BarChart, Bar, XAxis, YAxis, CartesianGrid, Tooltip, ResponsiveContainer, AreaChart, Area } from 'recharts';
import { DASHBOARD_STATS } from '../constants';
import { ArrowUpRight, ArrowDownRight, Clock, CheckCircle2, UserPlus, Plane } from 'lucide-react';

const REVENUE_DATA = [
  { name: 'Iyun', revenue: 4000, bookings: 24 },
  { name: 'Iyul', revenue: 3000, bookings: 13 },
  { name: 'Avg', revenue: 5000, bookings: 35 },
  { name: 'Sent', revenue: 7800, bookings: 50 },
  { name: 'Okt', revenue: 6000, bookings: 42 },
  { name: 'Noy', revenue: 9000, bookings: 65 },
];

const RECENT_ACTIVITIES = [
  { id: 1, type: 'booking', user: 'Alisher Usmonov', detail: 'Antaliya turini sotib oldi', time: '12 daqiqa oldin', icon: <Plane className="w-4 h-4" />, color: 'bg-blue-100 text-blue-600' },
  { id: 2, type: 'customer', user: 'Yulduz Ortiqova', detail: 'Yangi mijoz sifatida qo\'shildi', time: '45 daqiqa oldin', icon: <UserPlus className="w-4 h-4" />, color: 'bg-green-100 text-green-600' },
  { id: 3, type: 'payment', user: 'Bobur Mansurov', detail: 'To\'lovni muvaffaqiyatli yakunladi', time: '2 soat oldin', icon: <CheckCircle2 className="w-4 h-4" />, color: 'bg-purple-100 text-purple-600' },
];

const Dashboard: React.FC = () => {
  return (
    <div className="space-y-8 animate-in fade-in duration-500">
      <div className="flex flex-col md:flex-row md:items-center justify-between gap-4">
        <div>
          <h1 className="text-3xl font-bold text-slate-900 tracking-tight">Tizim Holati</h1>
          <p className="text-slate-500 mt-1">Sizning biznesingiz real vaqt rejimida.</p>
        </div>
        <div className="flex gap-3">
          <button className="px-5 py-2.5 bg-white border border-slate-200 rounded-xl text-slate-700 font-semibold hover:bg-slate-50 transition-all shadow-sm">
            Hisobotlar
          </button>
          <button className="px-5 py-2.5 bg-blue-600 text-white rounded-xl font-bold hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
            Yangi Sayohat +
          </button>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        {DASHBOARD_STATS.map((stat, idx) => (
          <div key={idx} className="bg-white p-6 rounded-3xl border border-slate-100 shadow-sm hover:shadow-xl transition-all duration-300">
            <div className="flex justify-between items-start mb-4">
              <div className="p-3 bg-slate-50 rounded-2xl">
                {stat.icon}
              </div>
              <div className={`flex items-center gap-1 text-[10px] font-bold px-2.5 py-1 rounded-full ${stat.isPositive ? 'bg-green-100 text-green-700' : 'bg-red-100 text-red-700'}`}>
                {stat.isPositive ? <ArrowUpRight className="w-3 h-3" /> : <ArrowDownRight className="w-3 h-3" />}
                {stat.change}
              </div>
            </div>
            <p className="text-slate-500 text-sm font-medium">{stat.label}</p>
            <h3 className="text-3xl font-extrabold text-slate-900 mt-1">{stat.value}</h3>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2 space-y-8">
          <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
            <div className="flex items-center justify-between mb-8">
              <h3 className="text-xl font-bold text-slate-900">Daromad Analitikasi</h3>
              <select className="bg-slate-50 border-none rounded-lg text-sm font-semibold text-slate-600 px-3 py-1 focus:ring-0">
                <option>Oxirgi 6 oy</option>
                <option>Oxirgi 12 oy</option>
              </select>
            </div>
            <div className="h-80 w-full">
              <ResponsiveContainer width="100%" height="100%">
                <AreaChart data={REVENUE_DATA}>
                  <defs>
                    <linearGradient id="colorRevenue" x1="0" y1="0" x2="0" y2="1">
                      <stop offset="5%" stopColor="#2563eb" stopOpacity={0.15}/>
                      <stop offset="95%" stopColor="#2563eb" stopOpacity={0}/>
                    </linearGradient>
                  </defs>
                  <CartesianGrid strokeDasharray="3 3" vertical={false} stroke="#f1f5f9" />
                  <XAxis dataKey="name" axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <YAxis axisLine={false} tickLine={false} tick={{fill: '#94a3b8', fontSize: 12}} />
                  <Tooltip 
                    contentStyle={{backgroundColor: '#0f172a', border: 'none', borderRadius: '12px', color: '#fff'}}
                    itemStyle={{color: '#fff'}}
                  />
                  <Area type="monotone" dataKey="revenue" stroke="#2563eb" strokeWidth={4} fillOpacity={1} fill="url(#colorRevenue)" />
                </AreaChart>
              </ResponsiveContainer>
            </div>
          </div>
        </div>

        <div className="bg-white p-8 rounded-3xl border border-slate-100 shadow-sm">
          <h3 className="text-xl font-bold text-slate-900 mb-6">Oxirgi faolliklar</h3>
          <div className="space-y-6">
            {RECENT_ACTIVITIES.map((activity) => (
              <div key={activity.id} className="flex gap-4 items-start group">
                <div className={`mt-1 p-2.5 rounded-xl ${activity.color} transition-transform group-hover:scale-110`}>
                  {activity.icon}
                </div>
                <div className="flex-1">
                  <p className="text-sm font-bold text-slate-900">{activity.user}</p>
                  <p className="text-xs text-slate-500 mt-0.5">{activity.detail}</p>
                  <div className="flex items-center gap-1 mt-2 text-[10px] text-slate-400 font-medium">
                    <Clock className="w-3 h-3" />
                    {activity.time}
                  </div>
                </div>
              </div>
            ))}
          </div>
          <button className="w-full mt-8 py-3 text-sm font-bold text-blue-600 bg-blue-50 rounded-2xl hover:bg-blue-100 transition-colors">
            Barchasini ko'rish
          </button>
        </div>
      </div>
    </div>
  );
};

export default Dashboard;
