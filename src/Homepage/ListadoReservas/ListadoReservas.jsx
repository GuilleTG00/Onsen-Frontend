import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import "../../GeneralStyles/formStyles.css";
import TableView from "../ComponentUtils/TableView";

const LISTADO_RESERVAS_ACTIVAS = [
  {
    fechaDeReserva: "02-06-2024",
    nombreHabitacion: "“Habitación Onsen High Class”",
    tipoHabitacion: "Premium",
    fechaDeCheckIn: "12-12-2024",
    fechaDeCheckOut: "16-12-2024",
  },
  {
    fechaDeReserva: "02-06-2024",
    nombreHabitacion: "“Habitación 2”",
    tipoHabitacion: "Classic",
    fechaDeCheckIn: "10-07-2024",
    fechaDeCheckOut: "12-07-2024",
  },
  {
    fechaDeReserva: "02-06-2024",
    nombreHabitacion: "“Habitación 3”",
    tipoHabitacion: "Economic",
    fechaDeCheckIn: "12-10-2024",
    fechaDeCheckOut: "15-10-2024",
  },
];

const LISTADO_RESERVAS_COMPLETADAS = [
  {
    fechaDeReserva: "01-01-2024",
    nombreHabitacion: "“Habitación Onsen High Class”",
    tipoHabitacion: "Premium",
    fechaDeCheckIn: "12-01-2024",
    fechaDeCheckOut: "16-01-2024",
    calificacion: 5,
  },
  {
    fechaDeReserva: "02-06-2024",
    nombreHabitacion: "“Habitación 2”",
    tipoHabitacion: "Classic",
    fechaDeCheckIn: "20-11-2023",
    fechaDeCheckOut: "24-11-2023",
    calificacion: 3,
  },
];

const ListadoReservas = ({ fechaInicio, fechaFinal }) => {
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
                  variant="h3"
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
        <Grid
          container
          padding={5}
          paddingTop={0}
          spacing={10}
          justifyContent="center"
          alignItems="center"
        >
          <Grid item xs={12}>
            <Grid
              container
              spacing={2}
              justifyContent="center"
              alignItems="center"
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
                  <b>Reservas Activas</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TableView tableData={LISTADO_RESERVAS_ACTIVAS} />
              </Grid>
            </Grid>
          </Grid>
          <Grid item xs={12}>
            <Grid container spacing={2}>
              <Grid item xs={12}>
                <Typography
                  variant="h4"
                  sx={{
                    color: "#000000",
                    textAlign: "center",
                    fontFamily: "montserrat, sans-serif",
                  }}
                >
                  <b>Reservas Completadas</b>
                </Typography>
              </Grid>
              <Grid item xs={12}>
                <TableView
                  tableData={LISTADO_RESERVAS_COMPLETADAS}
                  isCalificacion={true}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListadoReservas;
