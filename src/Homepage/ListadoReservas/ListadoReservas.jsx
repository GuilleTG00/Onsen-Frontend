import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";
import "../../GeneralStyles/formStyles.css";
import TableView from "../ComponentUtils/TableView";

import { getReservaPorEstadoAPI } from "../../APICalls";

const ListadoReservas = () => {
  const [reservasActivas, setReservasActivas] = useState(null);
  const [reservasCompletas, setReservasCompletas] = useState(null);

  const getListadoInventarioActivo = async () => {
    const { status, data } = await getReservaPorEstadoAPI(
      localStorage.getItem("token"),
      "activo"
    );
    if (status === 200) {
      setReservasActivas(data);
    }
  };

  const getListadoInventarioCompletado = async () => {
    const { status, data } = await getReservaPorEstadoAPI(
      localStorage.getItem("token"),
      "completado"
    );
    if (status === 200) {
      setReservasCompletas(data);
    }
  };

  useEffect(() => {
    getListadoInventarioActivo();
    getListadoInventarioCompletado();
  }, []);

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
              {reservasActivas && (
                <Grid item xs={12}>
                  <TableView tableData={reservasActivas} />
                </Grid>
              )}
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
              {reservasCompletas && (
                <Grid item xs={12}>
                  <TableView
                    tableData={reservasCompletas}
                    isCalificacion={true}
                  />
                </Grid>
              )}
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListadoReservas;
