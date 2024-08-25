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
    nombreProducto: "Jabones Especiales",
    cantidad: 50,
  },
  {
    nombreProducto: "Kit de Bienvenida",
    cantidad: 50,
  },
];

const ListadoInventario = ({ startDate, endDate }) => {
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
                  <b>Listado Inventario</b>
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
                  <b>Inventario</b>
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

export default ListadoInventario;
