import React from "react";
import { Grid, Typography, Divider } from "@mui/material";

const ChihiroMessage = () => {
  return (
    <Grid
      container
      style={{
        background:
          "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(/Images/Homepage/chihiro-onsen.jpg)",
        backgroundSize: "100% 150%",
        backgroundPosition: "center",
        width: "100%",
        height: "50vh",
      }}
      justifyContent="center"
      alignItems="center"
    >
      <Grid item>
        <Typography
          variant="h1"
          sx={{
            color: "#000000",
            textAlign: "center",
          }}
        >
          <b>¡Te esperamos pronto!</b>
        </Typography>
      </Grid>
    </Grid>
  );
};

export default ChihiroMessage;
