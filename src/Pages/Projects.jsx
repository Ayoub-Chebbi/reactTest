import React, { useState } from 'react';
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';

const Projects = () => {
  const [selectedProject, setSelectedProject] = useState('Project A');

  // Example project data
  const projects = [
    { name: 'Project A', investment: 5000, change: 'up', news: ['Added A new Sensor 1', 'Upgraded Something 1'] },
    { name: 'Project B', investment: 3000, change: 'down', news: ['Added A new Sensor 2 ', 'Upgraded Something 2'] },
    { name: 'Project C', investment: 7000, change: 'up', news: ['Added A new Sensor 2 ', 'Upgraded Something 2'] },
  ];

  // Example chart data
  const chartData = [
    { month: 'Jan', investment: 4000 },
    { month: 'Feb', investment: 3000 },
    { month: 'Mar', investment: 2000 },
    { month: 'Apr', investment: 2780 },
    { month: 'May', investment: 1890 },
    { month: 'Jun', investment: 2390 },
    { month: 'Jul', investment: 3490 },
  ];

  const selectedProjectData = projects.find((p) => p.name === selectedProject);

  return (
    <div className="p-8 bg-gray-100 min-h-screen">
      {/* Header */}
      <h1 className="text-2xl font-bold mb-6 text-center text-green-700">Dashboard</h1>

      {/* Project Overview */}
      <div className="mb-8 grid grid-cols-1 md:grid-cols-3 gap-6">
        {projects.map((project) => (
          <div
            key={project.name}
            className={`p-4 border rounded-lg ${
              project.change === 'up' ? 'border-green-500' : 'border-red-500'
            } bg-white shadow-md hover:shadow-lg transition`}
            onClick={() => setSelectedProject(project.name)}
          >
            <h2 className="text-lg font-bold">{project.name}</h2>
            <p>
              Investment: <strong>${project.investment}</strong>
            </p>
            <p className={`text-sm font-medium ${project.change === 'up' ? 'text-green-500' : 'text-red-500'}`}>
              {project.change === 'up' ? '📈 Increased' : '📉 Decreased'}
            </p>
          </div>
        ))}
      </div>

      {/* Charts Section */}
      <div className="mb-8">
        <h2 className="text-xl font-bold text-center mb-4">Investment Trends</h2>
        <div className="w-full h-64">
          <ResponsiveContainer>
            <LineChart data={chartData}>
              <CartesianGrid strokeDasharray="3 3" />
              <XAxis dataKey="month" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="investment" stroke="#82ca9d" />
            </LineChart>
          </ResponsiveContainer>
        </div>
      </div>

      {/* News Section */}
      <div>
        <h2 className="text-xl font-bold text-center mb-4">News for {selectedProject}</h2>
        <ul className="bg-white p-4 rounded-lg shadow-md">
          {selectedProjectData?.news.map((news, index) => (
            <li key={index} className="mb-2 text-gray-700">
              - {news}
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default Projects;
