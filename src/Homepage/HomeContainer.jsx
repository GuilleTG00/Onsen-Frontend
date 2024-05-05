import React, { useState, useEffect } from "react";
import WebFont from "webfontloader";
import { Grid } from "@mui/material";

import HeroSection from "./HeroSection/HeroSection";
import ExperienciaUnicaSection from "./ExperienciaUnicaSection/ExperienciaUnicaSection";
import LugarHistoriaSection from "./LugarHistoriaSection/LugarHistoriaSection";

const HomeContainer = () => {
  useEffect(() => {
    WebFont.load({
      google: {
        families: ["Montserrat:300,400,500,600,700,800,900"],
      },
    });
  }, []);

  return (
    <Grid container justifyContent="center" alignItems="center">
      <Grid item xs={12}>
        <HeroSection />
      </Grid>
      <Grid item xs={12}>
        <ExperienciaUnicaSection />
      </Grid>
      <Grid item xs={12}>
        <LugarHistoriaSection />
      </Grid>
    </Grid>
  );
};

export default HomeContainer;
