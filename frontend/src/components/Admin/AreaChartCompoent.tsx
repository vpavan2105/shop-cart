
import { Pie, PieChart, Cell, Legend } from 'recharts';
import { useAppSelector } from '../../utils/Admin/adminUtils';

const AreaChartComponent = () => {
    const products = useAppSelector(state => state.products.productsData);

    const categoryCounts: Record<string, number> = products.reduce((acc, product) => {
        acc[product.category] = (acc[product.category] || 0) + 1;
        return acc;
    }, {});
    
    const data: { name: string, value: number }[] = Object.keys(categoryCounts).map(category => ({
        name: category,
        value: categoryCounts[category]
    }));

    const COLORS = ['#0088FE', '#00C49F', '#FFBB28', '#FF8042', '#AF19FF'];

    return (
        <PieChart width={500} height={400}>
            <Pie
                data={data}
                cx={200}
                cy={200}
                labelLine={false}
                label
                outerRadius={120}
                fill="#63E6BE"
                dataKey="value"
            >
                {data.map((entry, index) => (
                    <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
                ))}
            </Pie>
            <Legend layout="vertical" align="left"  verticalAlign="middle" />
        </PieChart>
    );
};

export default AreaChartComponent;
