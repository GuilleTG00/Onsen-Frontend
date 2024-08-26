import React from "react";
import { Grid, Typography, Divider } from "@mui/material";
import useMediaQuery from "@mui/material/useMediaQuery";

const LugarHistoriaSection = () => {
  const isSmallScreen = useMediaQuery("(max-width:800px)");
  return (
    <Grid container alignItems="center">
      <Grid item xs={12} md={6}>
        <Grid
          container
          paddingLeft={isSmallScreen ? 0 : 15}
          paddingRight={isSmallScreen ? 0 : 15}
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
              Un lugar con <b>historia</b>
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
              Creado aproximadamente en el año 1894 (Período Meiji), es
              considerada una de las fuentes termales más antiguas de Japón,
              así, disfrutarás de un relajante viaje al pasado.
            </Typography>
          </Grid>
          <Grid item xs={12}>
            <Grid container justifyContent="flex-end">
              <Grid item xs={2}>
                <Divider
                  style={{
                    backgroundColor: "black",
                    borderBottomWidth: "3px",
                  }}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      <Grid item xs={12} md={6}>
        <Grid container>
          <Grid item>
            <img
              src="/Images/Homepage/dogo_onsen_old_pic.jpg"
              style={{
                height: "100%",
                width: "100%",
                objectFit: "cover",
              }}
            />
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default LugarHistoriaSection;
