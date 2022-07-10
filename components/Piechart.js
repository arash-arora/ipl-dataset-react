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
    <div className='w-full h-[300px] mt-12 md:h-[400px]'>
      <ResponsiveContainer>
        <PieChart>
          <Pie
            dataKey='value'
            isAnimationActive={true}
            data={data}
            cx='50%'
            cy='50%'
            // innerRadius={100}
            // outerRadius={120}
            fill='#8884d8'
            label>
            {data.map((entry, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
}

export default Piechart;
