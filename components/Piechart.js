import { PieChart, Pie, Cell, Tooltip, ResponsiveContainer } from "recharts";

const COLORS = [
  "#0088FE",
  "#00C49F",
  "#FFBB28",
  "#FF8042",
  "#7A86B6",
  "#ABC9FF",
  "#495C83",
  "#FF8B8B",
  "#C4DFAA",
  "#73A9AD",
  "#C9BBCF",
  "#937DC2",
  "#FFC4C4",
  "#FFE7BF",
];
function Piechart({ data }) {
  return (
    // <ResponsiveContainer width='100%' height='100%'>
    <PieChart width={800} height={550}>
      <Pie
        dataKey='value'
        isAnimationActive={true}
        data={data}
        cx='50%'
        cy='50%'
        innerRadius={120}
        outerRadius={200}
        fill='#8884d8'
        label>
        {data.map((entry, index) => (
          <Cell key={`cell-${index}`} fill={COLORS[index % COLORS.length]} />
        ))}
      </Pie>
      <Tooltip />
    </PieChart>
    // </ResponsiveContainer>
  );
}

export default Piechart;
