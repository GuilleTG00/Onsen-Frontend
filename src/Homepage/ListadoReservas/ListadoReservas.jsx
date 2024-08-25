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

const LISTADO_RESERVAS_ACTIVAS = [
  {
    fechaDeReserva: new Date("02-06-2024"),
    nombreHabitacion: "“Habitación Onsen High Class”",
    tipoHabitacion: "Premium",
    fechaDeCheckIn: new Date("12-12-2024"),
    fechaDeCheckOut: new Date("16-16-2024"),
  },
  {
    fechaDeReserva: new Date("02-06-2024"),
    nombreHabitacion: "“Habitación 2”",
    tipoHabitacion: "Classic",
    fechaDeCheckIn: new Date("10-07-2024"),
    fechaDeCheckOut: new Date("12-07-2024"),
  },
  {
    fechaDeReserva: new Date("02-06-2024"),
    nombreHabitacion: "“Habitación 3”",
    tipoHabitacion: "Economic",
    fechaDeCheckIn: new Date("13-10-2024"),
    fechaDeCheckOut: new Date("15-10-2024"),
  },
];

const LISTADO_RESERVAS_COMPLETADAS = [
  {
    fechaDeReserva: new Date("01-01-2024"),
    nombreHabitacion: "“Habitación Onsen High Class”",
    tipoHabitacion: "Premium",
    fechaDeCheckIn: new Date("12-01-2024"),
    fechaDeCheckOut: new Date("16-01-2024"),
    calificacion: 5,
  },
  {
    fechaDeReserva: new Date("02-06-2024"),
    nombreHabitacion: "“Habitación 2”",
    tipoHabitacion: "Classic",
    fechaDeCheckIn: new Date("20-11-2023"),
    fechaDeCheckOut: new Date("24-11-2023"),
    calificacion: 5,
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
