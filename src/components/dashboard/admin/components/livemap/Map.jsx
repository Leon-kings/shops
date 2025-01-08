import React, { useState } from "react";
import Map, { Marker } from "react-map-gl";
import "mapbox-gl/dist/mapbox-gl.css";
React;
const LiveMap = () => {
  const [viewport, setViewport] = useState({
    latitude: 37.7749,
    longitude: -122.4194,
    zoom: 10,
  });

  return (
    <div className="h-screen w-full">
      <Map
        {...viewport}
        onMove={(e) => setViewport(e.viewState)}
        style={{ width: "100%", height: "100%" }}
        mapStyle="mapbox://styles/mapbox/streets-v11"
        mapboxAccessToken="YOUR_MAPBOX_ACCESS_TOKEN"
      >
        <Marker latitude={37.7749} longitude={-122.4194} offsetLeft={-20} offsetTop={-10}>
          <div className="bg-blue-500 text-white rounded-full p-2">📍</div>
        </Marker>
      </Map>
    </div>
  );
};

export default LiveMap;
