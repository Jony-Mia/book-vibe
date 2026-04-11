import { BarChart, Bar, XAxis, YAxis } from 'recharts';


// #region Sample data
const data = [
  {
    name: 'Great Gatsby',
    read: 192
  },
  {
    name: 'To kill a mocking Bird',
    read: 281
  },
  {
    name: '1984',
    read: 328
  },
  {
    name: 'The Alchemist',
    read: 177
  },
  {
    name: 'Pride and Prejudice',
    read: 279
  },
  
];

// #endregion
const TinyBarChart = () => {
  return (
    <BarChart
      style={{ width: '100%'}}
      responsive
      data={data}
    >
      <Bar dataKey="read" radius={10} fill="#8884d8" />
      <XAxis dataKey={"name"}/>
      <YAxis dataKey={"read"}  />
    </BarChart>
  );
};

export default TinyBarChart;