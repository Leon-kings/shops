import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl";
import "maplibre-gl/dist/maplibre-gl.css";
import {
  LineChart,
  Line,
  BarChart,
  Bar,
  PieChart,
  Pie,
  Cell,
  XAxis,
  YAxis,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import Userview from "../userview/Userview";
React;
const Graphs = () => {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  // Sample Data for Charts
  const data = [
    { name: "Jan", value: 30 },
    { name: "Feb", value: 50 },
    { name: "Mar", value: 40 },
    { name: "Apr", value: 70 },
    { name: "May", value: 60 },
    { name: "Jun", value: 90 },
  ];

  const pieData = [
    { name: "Category A", value: 400 },
    { name: "Category B", value: 300 },
    { name: "Category C", value: 200 },
  ];
  const COLORS = ["#0088FE", "#00C49F", "#FFBB28"];

  useEffect(() => {
    if (map) return;

    const newMap = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json",
      center: [30.0605, -1.9441], // Kigali, Rwanda
      zoom: 12,
    });

    new maplibregl.Marker()
      .setLngLat([30.0605, -1.9441])
      .setPopup(new maplibregl.Popup({ offset: 25 }).setText("Kigali City"))
      .addTo(newMap);

    setMap(newMap);

    return () => newMap.remove();
  }, []);

  return (
    <div className="flex flex-col  bg-gray-100">
      {/* Header */}
      <header className="bg-blue-600 text-white p-4 text-center text-xl font-semibold">
        Kigali Graphs
      </header>

      {/* Main Content */}
      <div className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-3 gap-6 p-6">
        {/* Line Chart */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Monthly Data Trends</h2>
          <ResponsiveContainer width="100%" height={250}>
            <LineChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Line type="monotone" dataKey="value" stroke="#8884d8" />
            </LineChart>
          </ResponsiveContainer>
        </div>

        {/* Bar Chart */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">Bar Chart Example</h2>
          <ResponsiveContainer width="100%" height={250}>
            <BarChart data={data}>
              <XAxis dataKey="name" />
              <YAxis />
              <Tooltip />
              <Legend />
              <Bar dataKey="value" fill="#82ca9d" />
            </BarChart>
          </ResponsiveContainer>
        </div>
       
        {/* Pie Chart */}
        <div className="bg-white shadow-md rounded-lg p-4">
          <h2 className="text-lg font-semibold mb-2">
            Pie Chart Representation
          </h2>
          <ResponsiveContainer width="100%" height={250}>
            <PieChart>
              <Pie
                data={pieData}
                dataKey="value"
                cx="50%"
                cy="50%"
                outerRadius={60}
              >
                {pieData.map((entry, index) => (
                  <Cell
                    key={`cell-${index}`}
                    fill={COLORS[index % COLORS.length]}
                  />
                ))}
              </Pie>
              <Tooltip />
              <Legend />
            </PieChart>
          </ResponsiveContainer>
        </div>
      </div>
      <div className="w-full main-container">
          <Userview />
        </div>
      {/* Map Section */}
      <div className="p-6">
        <h2 className="text-lg font-semibold mb-2">Kigali City Map</h2>
        <div
          ref={mapContainer}
          className="h-96 w-full bg-gray-300 rounded-lg shadow-md"
        />
      </div>
    </div>
  );
};

export default Graphs;
