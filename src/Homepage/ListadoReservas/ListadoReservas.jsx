import React, { useState, useEffect } from "react";
import {
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";
import { Carousel } from "nuka-carousel";

import IconButton from "@mui/material/IconButton";
import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../../GeneralStyles/formStyles.css";

const DATE_OPTIONS = { day: "numeric", month: "long", year: "numeric" };

const CARDS_INFORMATION = [
  {
    title: "“Habitación Onsen High Class”",
    subtitle: "Habitación Premium",
    roomDescription: "Onsen Privado",
    camas: "5 camas",
    images: ["/Images/Homepage/luxury-onsen-ryokan_4.jpg"],
  },
  {
    title: "“Habitación 2”",
    subtitle: "Habitación Classic",
    roomDescription: "Onsen Privado",
    camas: "3 camas",
    images: [
      "/Images/Homepage/onsen-classic.jpg",
      "/Images/Homepage/onsen-classic.jpg",
    ],
  },
  {
    title: "“Habitación 3”",
    subtitle: "Habitación Economic",
    roomDescription: "Acceso a Onsen Público",
    camas: "2 camas",
    images: ["/Images/Homepage/onsen-economic.jpeg"],
  },
];

const ListadoReservas = ({ startDate, endDate }) => {
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFinal, setFechaFinal] = useState(new Date());

  return (
    <Grid container justifyContent="center" spacing={10}>
      <Grid item xs={12}>
        <Card
          style={{
            background: "url(/Images/Homepage/dogo_onsen_hero_1.png)",
            backgroundPosition: "center",
            backgroundSize: "100% 100%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            position: "relative",
            fontFamily: "Montserrat, sans-serif",
            backgroundColor: "rgba(255, 254, 254, 0.8)",
          }}
        >
          <CardContent>
            <Grid
              container
              padding={10}
              alignItems="center"
              justifyContent="center"
            >
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "montserrat, sans-serif",
                  }}
                >
                  <b>Listado Reservas</b>
                </Typography>
              </Grid>
            </Grid>
          </CardContent>
        </Card>
      </Grid>
      <Grid item xs={12}>
        <Grid container spacing={5} justifyContent="center" alignItems="center">
          <Grid item xs={12}>
            <Grid container justifyContent="center" alignItems="center">
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "montserrat, sans-serif",
                  }}
                >
                  <b>Reservas Activas</b>
                </Typography>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container>
              <Grid item xs={12}>
                <Typography
                  variant="h5"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "montserrat, sans-serif",
                  }}
                >
                  <b>Reservas Completadas</b>
                </Typography>
              </Grid>
              <Grid item xs={12}></Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListadoReservas;
