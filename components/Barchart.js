import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
} from "recharts";

export default function Barchart({ data }) {
  function compareUV(a, b) {
    return b.uv - a.uv;
  }
  //   const d = data.slice(0, 10);
  var d1 = data.sort(compareUV);
  const d = data.slice(0, 5);
  return (
    <BarChart
      width={700}
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
      <Bar dataKey='uv' fill='#82ca9d' />
    </BarChart>
  );
}
