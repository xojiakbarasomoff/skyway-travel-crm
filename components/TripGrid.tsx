
import React from 'react';
import { MOCK_TRIPS } from '../constants';
import { MapPin, Clock, Users, Plus } from 'lucide-react';

const TripGrid: React.FC = () => {
  return (
    <div className="space-y-6 animate-in fade-in duration-500">
      <div className="flex justify-between items-center">
        <div>
          <h1 className="text-2xl font-bold text-slate-900">Tur Paketlar</h1>
          <p className="text-slate-500">Mavjud barcha sayohat yo'nalishlari va paketlar.</p>
        </div>
        <button className="flex items-center gap-2 px-4 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition-all shadow-lg shadow-blue-500/20">
          <Plus className="w-5 h-5" />
          Yangi Paket Qo'shish
        </button>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
        {MOCK_TRIPS.map((trip) => (
          <div key={trip.id} className="bg-white rounded-2xl overflow-hidden border border-slate-100 shadow-sm hover:shadow-xl transition-all group">
            <div className="relative h-48">
              <img src={trip.image} alt={trip.title} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
              <div className="absolute top-3 left-3 bg-white/90 backdrop-blur px-3 py-1 rounded-full text-[10px] font-bold text-blue-600 uppercase tracking-wider shadow-sm">
                {trip.destination}
              </div>
              <div className="absolute bottom-3 right-3 bg-blue-600 text-white px-3 py-1 rounded-lg font-bold shadow-lg">
                ${trip.price}
              </div>
            </div>
            
            <div className="p-5">
              <h3 className="font-bold text-slate-900 mb-2 truncate">{trip.title}</h3>
              <p className="text-sm text-slate-500 mb-4 line-clamp-2">{trip.description}</p>
              
              <div className="flex items-center justify-between py-3 border-t border-slate-50">
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Clock className="w-3.5 h-3.5 text-blue-500" />
                  {trip.duration}
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <Users className="w-3.5 h-3.5 text-orange-500" />
                  {trip.availableSeats} o'rin
                </div>
                <div className="flex items-center gap-1.5 text-xs text-slate-500">
                  <MapPin className="w-3.5 h-3.5 text-green-500" />
                  {trip.destination}
                </div>
              </div>

              <button className="w-full mt-4 py-2.5 bg-slate-50 text-slate-700 font-semibold rounded-xl hover:bg-blue-600 hover:text-white transition-all">
                Batafsil
              </button>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default TripGrid;
