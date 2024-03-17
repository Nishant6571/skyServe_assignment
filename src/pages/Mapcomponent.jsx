import React from "react";

import { MapContainer, TileLayer } from "react-leaflet";

import "leaflet/dist/leaflet.css";
import "leaflet-draw/dist/leaflet.draw.css";
import { Heading } from "@chakra-ui/react";

const Mapcomponent = () => {
  return (
    <div
      style={{
        marginTop: "10px",
        width: "100%",
        height: "600px",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <div
        style={{
          justifyContent: "center",
          width: "30%",
          height: "600px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
          textAlign: "center",
        }}
      >
        <div
          style={{
            backgroundColor: "#85c8f5",
            justifyContent: "center",
            borderRadius: "10px",
            width: "85%",
            height: "400px",
            display: "flex",
            flexDirection: "column",
            alignItems: "center",
            gap: "20px",
            textAlign: "center",
          }}
        >
          <Heading>Upload file</Heading>
          <form>
            <div
              style={{
                width: "100%",
                textAlign: "center",
              }}
            >
              <label htmlFor="upload-file">Choose file:</label>
              <input
                style={{
                  width: "60%",
                }}
                type="file"
              />
            </div>
          </form>
        </div>
      </div>
      <div
        style={{
          width: "70%",
          height: "600px",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        <MapContainer
          center={[21.0, 78.0]}
          zoom={2.1}
          style={{ height: "600px", width: "100%" }}
        >
          <TileLayer
            url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
            attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          />
        </MapContainer>
      </div>
    </div>
  );
};

export default Mapcomponent;
