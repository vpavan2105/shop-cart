import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, Tooltip, Legend, ResponsiveContainer } from 'recharts';
import { OrderData, useAppSelector } from '../../utils/Admin/adminUtils';


const OrderLineComponents: React.FC = () => {
  const orders:OrderData[] = useAppSelector(state => state.orders.ordersData);

  const validOrders = orders.filter((order:any) => order.date instanceof Date);
  orders.forEach((order:any) => {
    order.date = new Date(order.date as string);
  });
  // Sort valid orders by date

  // Count number of orders for each date
  const ordersByDate = validOrders.reduce((acc: any, order: any) => {
    const dateStr = new Date(order.date).toLocaleDateString('en-US', { month: 'long', day: 'numeric', year: 'numeric' });
    acc[dateStr] = (acc[dateStr] || 0) + 1; // Increment count for each date
    return acc;
}, {});

  // Convert ordersByDate object into an array of objects with date and order count
  const data = Object.keys(ordersByDate).map(date => ({
    date,
    orders: ordersByDate[date]
  }));

  return (
    <ResponsiveContainer width="100%" height={400}>
      <LineChart data={data} margin={{ top: 20, right: 30, left: 20, bottom: 5 }}>
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="date" />
        <YAxis />
        <Tooltip />
        <Legend />
        <Line type="monotone" dataKey="orders" stroke="#63E6BE"strokeWidth={2}  activeDot={{ r: 8 }} />
      </LineChart>
    </ResponsiveContainer>
  );
};

export default OrderLineComponents;
