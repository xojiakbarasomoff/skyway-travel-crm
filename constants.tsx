
import React from 'react';
import { Users, PlaneTakeoff, Wallet, TrendingUp } from 'lucide-react';
import { Customer, Trip, Booking, BookingStatus } from './types';

export const MOCK_CUSTOMERS: Customer[] = [
  { id: '1', name: 'Alisher Usmonov', email: 'alisher@example.com', phone: '+998 90 123 45 67', status: 'Active', lastContact: '2023-11-20', totalSpent: 4500 },
  { id: '2', name: 'Zilola Ganiyeva', email: 'zilola@example.com', phone: '+998 93 456 78 90', status: 'Lead', lastContact: '2023-11-22', totalSpent: 0 },
  { id: '3', name: 'Bobur Mansurov', email: 'bobur@example.com', phone: '+998 94 987 65 43', status: 'Active', lastContact: '2023-11-15', totalSpent: 1200 },
  { id: '4', name: 'Malika Karimova', email: 'malika@example.com', phone: '+998 97 222 33 44', status: 'Inactive', lastContact: '2023-10-01', totalSpent: 3000 },
];

export const MOCK_TRIPS: Trip[] = [
  { id: 't1', title: 'Antaliya Sohili', destination: 'Turkiya', price: 850, duration: '7 kun', image: 'https://picsum.photos/seed/antalya/800/600', description: 'Barchasi kiritilgan (All inclusive) dam olish maskani.', availableSeats: 12 },
  { id: 't2', title: 'Sharm el-Sheyx Ekspeditsiyasi', destination: 'Misr', price: 600, duration: '5 kun', image: 'https://picsum.photos/seed/sharm/800/600', description: 'Qizil dengizning marvaridi.', availableSeats: 8 },
  { id: 't3', title: 'Dubay City Tour', destination: 'BAA', price: 1100, duration: '4 kun', image: 'https://picsum.photos/seed/dubai/800/600', description: 'Hashamatli Dubay shahri bo\'ylab sayohat.', availableSeats: 20 },
  { id: 't4', title: 'Samarqand Boqiyligi', destination: 'O\'zbekiston', price: 200, duration: '2 kun', image: 'https://picsum.photos/seed/samarkand/800/600', description: 'Tarixiy obidalar va milliy taomlar.', availableSeats: 45 },
];

export const MOCK_BOOKINGS: Booking[] = [
  { id: 'b1', customerId: '1', tripId: 't1', bookingDate: '2023-11-18', status: BookingStatus.CONFIRMED, amount: 1700, travelers: 2 },
  { id: 'b2', customerId: '3', tripId: 't2', bookingDate: '2023-11-19', status: BookingStatus.PENDING, amount: 600, travelers: 1 },
];

export const DASHBOARD_STATS = [
  { label: 'Jami Mijozlar', value: '1,284', change: '+12%', isPositive: true, icon: <Users className="w-6 h-6 text-blue-600" /> },
  { label: 'Faol Sayohatlar', value: '24', change: '+4', isPositive: true, icon: <PlaneTakeoff className="w-6 h-6 text-green-600" /> },
  { label: 'Oylik Daromad', value: '$45,200', change: '+18.5%', isPositive: true, icon: <Wallet className="w-6 h-6 text-purple-600" /> },
  { label: 'Konversiya', value: '4.2%', change: '-0.5%', isPositive: false, icon: <TrendingUp className="w-6 h-6 text-orange-600" /> },
];
