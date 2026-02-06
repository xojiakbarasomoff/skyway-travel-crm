
export enum BookingStatus {
  PENDING = 'Kutilmoqda',
  CONFIRMED = 'Tasdiqlangan',
  CANCELLED = 'Bekor qilingan',
  COMPLETED = 'Yakunlangan'
}

export interface Customer {
  id: string;
  name: string;
  email: string;
  phone: string;
  status: 'Lead' | 'Active' | 'Inactive';
  lastContact: string;
  totalSpent: number;
}

export interface Trip {
  id: string;
  title: string;
  destination: string;
  price: number;
  duration: string;
  image: string;
  description: string;
  availableSeats: number;
}

export interface Booking {
  id: string;
  customerId: string;
  tripId: string;
  bookingDate: string;
  status: BookingStatus;
  amount: number;
  travelers: number;
}

export interface StatItem {
  label: string;
  value: string | number;
  change: string;
  isPositive: boolean;
  icon: React.ReactNode;
}
