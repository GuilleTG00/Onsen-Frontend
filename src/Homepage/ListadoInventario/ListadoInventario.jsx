import React, { useState, useEffect } from "react";
import {
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  Tooltip,
  IconButton,
  tableCellClasses,
  Paper,
  Grid,
  Button,
  Card,
  CardContent,
  CardActions,
  Typography,
} from "@mui/material";

import ArrowBackIcon from "@mui/icons-material/ArrowBack";

import "../../GeneralStyles/formStyles.css";
import TableView from "../ComponentUtils/TableView";

const DATE_OPTIONS = { day: "numeric", month: "long", year: "numeric" };

const LISTADO_INVENTARIO = [
  {
    nombreProducto: "Jabones Especiales",
    cantidad: 50,
    inventario: true,
  },
  {
    nombreProducto: "Kit de Bienvenida",
    cantidad: 50,
    inventario: true,
  },
];

const ListadoInventario = ({ startDate, endDate }) => {
  const [fechaInicio, setFechaInicio] = useState(new Date());
  const [fechaFinal, setFechaFinal] = useState(new Date());
  const [listadoInventario, setListadoInventario] =
    useState(LISTADO_INVENTARIO);

  return (
    <Grid container justifyContent="center" spacing={10}>
      <Grid item xs={12}>
        <Card
          style={{
            background:
              "linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(/Images/Homepage/soaps.jpg)",
            backgroundPosition: "center",
            backgroundSize: "100% 140%",
            backgroundRepeat: "no-repeat",
            backgroundAttachment: "fixed",
            position: "relative",
            fontFamily: "Montserrat, sans-serif",
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
              spacing={3}
              justifyContent="center"
              alignItems="center"
            >
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
              <Grid item xs={12}>
                <TableView tableData={listadoInventario} />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
    </Grid>
  );
};

export default ListadoInventario;
