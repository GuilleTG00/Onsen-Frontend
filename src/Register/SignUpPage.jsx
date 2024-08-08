import React from "react";
import { Grid, Button, Toolbar, AppBar } from "@mui/material";

import FormPopulation from "./FormPopulation";
import LeftSideComponent from "./LeftSideComponent";

const SignupPage = () => {
  return (
    <Grid container justifyContent="center">
      <Grid item xs={6}>
        <LeftSideComponent />
      </Grid>
      <Grid item xs={6}>
        <FormPopulation />
      </Grid>
    </Grid>
  );
};

export default SignupPage;
