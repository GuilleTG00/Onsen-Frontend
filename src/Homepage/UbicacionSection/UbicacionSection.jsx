import React from "react";
import { Grid, Typography } from "@mui/material";
import MapRenderer from "./MapRenderer";

const UbicacionSection = () => {
  return (
    <Grid container alignItems="center" paddingTop={10}>
      <Grid item xs={12}>
        <Typography
          variant="h2"
          sx={{
            color: "#000000",
            textAlign: "center",
          }}
        >
          <b>Ubicación</b>
        </Typography>
      </Grid>
      <Grid item xs={12} padding={10}>
        <MapRenderer />
      </Grid>
    </Grid>
  );
};

export default UbicacionSection;
