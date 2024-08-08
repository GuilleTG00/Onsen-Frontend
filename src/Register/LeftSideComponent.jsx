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
          "linear-gradient(rgba(255,255,255,.4), rgba(255,255,255,.4)),url(/Images/Homepage/dogo-onsen-login.jpg)",
        backgroundSize: "100% 120%",
        backgroundPosition: "center",
        width: "100%",
        height: "100%",
      }}
      direction="row"
    >
      <Grid item xs={12} paddingTop={15}>
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
          Regístrate y reserva
          <br />
          una experiencia
          <br />
          <b>inolvidable</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default LeftSideComponent;
