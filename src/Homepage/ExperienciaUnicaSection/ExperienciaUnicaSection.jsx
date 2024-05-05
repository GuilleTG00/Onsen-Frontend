import React from "react";
import { Grid, Typography, Divider } from "@mui/material";

const ExperienciaUnicaSection = () => {
  return (
    <Grid container alignItems="center">
      <Grid item xs={6}>
        <Grid container>
          <Grid item>
            <video width="100%" height="100%" autoPlay loop muted>
              <source
                src="/Videos/Homepage/dogo_onsen_video.mp4"
                type="video/mp4"
              />
            </video>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={6}>
        <Grid
          container
          paddingLeft={15}
          paddingRight={15}
          spacing={5}
          alignItems="center"
          justifyContent="center"
        >
          <Grid item xs={12}>
            <Typography
              variant="h2"
              sx={{
                color: "#000000",
                textAlign: "center",
              }}
            >
              Vive una experiencia <b>única</b>
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Typography
              variant="p"
              fontSize="20px"
              sx={{
                color: "#000000",
                textAlign: "justify",
              }}
            >
              Sea para darte un escape, relajarte o visitar uno de los lugares
              más emblemáticos de Japón, en Dogo Onsen contamos con lo necesario
              para que tengas una visita increíble
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={2}>
                <Divider style={{ backgroundColor: "black" }} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ExperienciaUnicaSection;
