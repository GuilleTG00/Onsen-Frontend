import React from "react";
import {
  Grid,
  TextField,
  InputAdornment,
  IconButton,
  Typography,
} from "@mui/material";

const LeftSideComponent = () => {
  return (
    <Grid
      container
      style={{
        background:
          "linear-gradient(rgba(255,255,255,.6), rgba(255,255,255,.6)),url(/Images/Homepage/dogo-onsen-login.jpg)",
        backgroundSize: "100% 120%",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
      direction="row"
    >
      <Grid item xs={12} paddingTop={10}>
        <Typography
          variant="h3"
          sx={{
            color: "#000000",
            textAlign: "center",
            letterSpacing: "20px",
          }}
        >
          DOGO ONSEN
        </Typography>
      </Grid>
      <Grid item xs={12}>
        <Typography
          variant="p"
          sx={{
            color: "#000000",
            textAlign: "center",
            fontSize: "40px",
          }}
        >
          Ingresa a una
          <br />
          plataforma llena de
          <br />
          <b>experiencias</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LeftSideComponent;
