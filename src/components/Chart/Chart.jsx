import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  Tooltip,
  XAxis,
  YAxis,
} from "recharts";
import "./chart.scss";

const colorSet = [
  "#85c1e9",
  "#98d7a5",
  "#ffb59b",
  "#d7a9e3",
  "#d1c4e9",
  "#f49ac2",
  "#9ad3de",
  "#ffc3c0",
  "#a7e6d7",
  "#e2bad4",
  "#b6d7a8",
  "#e8b4a9",
  "#9fd5d1",
];
const ChartData = ({ browserData, locationData, osData }) => {
  // Extracting browser data

  const browserChartData = Object.entries(browserData).map(
    ([browser, count]) => ({
      browser,
      users: count,
    })
  );
  const locationChartData = [
    { name: "City", data: Object.entries(locationData.city) },
    { name: "State", data: Object.entries(locationData.state) },
    { name: "Country", data: Object.entries(locationData.country) },
  ];

  const osChartData = Object.entries(osData).map(([os, count]) => ({
    os,
    users: count,
  }));

  return (
    <div>
      <h2>Browser Data</h2>
      <BarChart width={500} height={300} data={browserChartData}>
        <XAxis dataKey="browser" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="users"
          fill={colorSet[Math.floor(Math.random() * colorSet.length)]}
          barSize={40}
          label={{ position: "top" }}
        />
      </BarChart>

      <h2>Location Data</h2>
      {locationChartData.map(({ name, data }) => (
        <div key={name}>
          <h3>{name}</h3>
          <BarChart width={900} height={500} data={data}>
            <XAxis dataKey={([location]) => location} />
            <YAxis />
            <CartesianGrid strokeDasharray="3 3" />
            <Tooltip />
            <Legend />
            <Bar
              dataKey={([, count]) => count}
              fill={colorSet[Math.floor(Math.random() * colorSet.length)]}
              barSize={40}
              name="Users"
              label={{ position: "top" }}
            />
          </BarChart>
        </div>
      ))}

      <h2>OS Data</h2>
      <BarChart width={500} height={300} data={osChartData}>
        <XAxis dataKey="os" />
        <YAxis />
        <CartesianGrid strokeDasharray="3 3" />
        <Tooltip />
        <Legend />
        <Bar
          dataKey="users"
          fill={colorSet[Math.floor(Math.random() * colorSet.length)]}
          barSize={40}
          label={{ position: "top" }}
        />
      </BarChart>
    </div>
  );
};

export default ChartData;
