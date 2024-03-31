import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { OrderData } from '../../redux/utils/adminUtils';
import {useAppSelector} from '../../redux/utils/Product_Utils'


const RevenueLineComponents: React.FC = () => {
  const orders:OrderData[] = useAppSelector(state => state.orders.ordersData);


  const ordersByDate = orders.reduce((acc: any, order: any) => {
    const dateStr = new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    acc[dateStr] = (acc[dateStr] || 0) + order.totalAmount; 
    return acc;
}, {});

  // Convert ordersByDate object into an array of objects with date and order count
  console.log(ordersByDate);
  
  const data = Object.keys(ordersByDate).map(date => ({
    date,
    revenue: ordersByDate[date]
  }));
console.log(data);

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="revenue" stroke="#63E6BE"strokeWidth={2}  activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default RevenueLineComponents;
