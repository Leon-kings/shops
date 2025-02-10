import React, { useEffect, useRef, useState } from "react";
import maplibregl from "maplibre-gl"; // Or mapbox-gl if you have a license
import "maplibre-gl/dist/maplibre-gl.css"; // Ensure styles are imported
React;
function DashboardMap() {
  const mapContainer = useRef(null);
  const [map, setMap] = useState(null);

  useEffect(() => {
    if (map) return; // Prevent re-initialization

    // Initialize the map
    const newMap = new maplibregl.Map({
      container: mapContainer.current,
      style: "https://basemaps.cartocdn.com/gl/positron-gl-style/style.json", // Valid MapLibre style
      center: [30.0605, -1.9441], // Kigali, Rwanda coordinates
      zoom: 12, // Zoom level
    });

    // Save map instance
    setMap(newMap);

    // Add navigation controls
    newMap.addControl(new maplibregl.NavigationControl(), "top-left");

    // Add a marker at Kigali
    new maplibregl.Marker()
      .setLngLat([30.0605, -1.9441]) // Kigali Longitude, Latitude
      .setPopup(new maplibregl.Popup({ offset: 25 }).setText("Welcome to Kigali! 🏙️"))
      .addTo(newMap);

    // Add a GeoJSON source and layer (Example)
    newMap.on("load", () => {
      newMap.addSource("my-data", {
        type: "geojson",
        data: "https://example.com/my-geojson.json", // Replace with real GeoJSON URL
      });

      newMap.addLayer({
        id: "my-layer",
        type: "circle",
        source: "my-data",
        paint: {
          "circle-radius": 6,
          "circle-color": "#ff0000",
        },
      });
    });

    // Cleanup function to remove the map on unmount
    return () => newMap.remove();
  }, []);

  return (
    <div className="relative h-screen w-full">
      {/* Map Container */}
      <div ref={mapContainer} className="absolute top-0 left-0 w-full h-full" />

      {/* Example Dashboard Controls */}
      <div className="absolute top-4 left-4 bg-white p-4 rounded shadow-md">
        <h2 className="text-lg font-bold">Kigali Map Dashboard</h2>
        <button className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded">
          Filter Data
        </button>
      </div>
    </div>
  );
}

export default DashboardMap;
