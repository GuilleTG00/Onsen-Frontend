import React from "react";

const GENERATED_API_KEY = "AIzaSyB41DRUbKWJHPxaFjMAwdrzWzbVKartNGg";

import { GoogleMap, LoadScript } from "@react-google-maps/api";

const containerStyle = {
  width: "100%",
  height: "80vh",
};

const center = {
  lat: 33.8521084,
  lng: 132.7862964,
};

const MapRenderer = () => {
  return (
    <LoadScript googleMapsApiKey={GENERATED_API_KEY}>
      <GoogleMap mapContainerStyle={containerStyle} center={center} zoom={20}>
        {/* Child components, such as markers, info windows, etc. */}
      </GoogleMap>
    </LoadScript>
  );
};

export default MapRenderer;
