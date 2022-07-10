import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";

export default function Barchart({ data, clicked }) {
  function compareUV(a, b) {
    return b.player_of_match - a.player_of_match;
  }
  data.sort(compareUV);
  var x = clicked === false ? 5 : 10;
  const d = data.slice(0, x);
  return (
    <div className='w-full md:w-[80%] min-w-[320px] h-[400px]'>
      <ResponsiveContainer>
        <BarChart
          width={clicked === false ? 1200 : 1500}
          className='overflow-x-scroll md:overflow-x-hidden md:w-full w-3/2'
          style={{
            // width: "100%",
            transition: "1s ease-in-out",
            fontSize: "16px",
          }}
          height={500}
          data={d}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}>
          <CartesianGrid strokeDasharray='3 3' />
          <XAxis dataKey='name' />
          <YAxis />
          <Tooltip />
          <Legend />
          <Bar dataKey='player_of_match' fill='#82ca9d' />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
}
