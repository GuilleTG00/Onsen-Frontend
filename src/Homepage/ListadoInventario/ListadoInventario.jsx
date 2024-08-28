import React, { useState } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

import "../../GeneralStyles/formStyles.css";
import TableView from "../ComponentUtils/TableView";
import ModalEditarInventario from "./Modals/ModalEditarInventario";

const LISTADO_INVENTARIO = [
  {
    nombreProducto: "Jabones Especiales",
    cantidad: 50,
    image: "/Images/Homepage/soaps.jpg",
    inventario: true,
  },
  {
    nombreProducto: "Kit de Bienvenida",
    cantidad: 50,
    image: "/Images/Homepage/welcome-kit.jpg",
    inventario: true,
  },
];

const ListadoInventario = () => {
  const [listadoInventario, setListadoInventario] = useState(LISTADO_INVENTARIO);
  const [selectedInventario, setSelectedInventario] = useState(null);

  const updateSelectedInventario = (param, selectedData) => {
    handleFilterInventario(param, selectedData);
  };

  const handleFilterInventario = (param, productoEditar) => {
    const updatedListadoInventario = LISTADO_INVENTARIO.map((element) => {
      if (element["nombreProducto"] === productoEditar) {
        return {
          ...element,
          cantidad: param,
        };
      }
      return element;
    });
    setListadoInventario(updatedListadoInventario);
  };

  const handleCloseModal = () => {
    setSelectedInventario(null);
  };

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
                <TableView
                  tableData={listadoInventario}
                  setSelectedInventario={setSelectedInventario}
                />
              </Grid>
            </Grid>
          </Grid>
        </Grid>
      </Grid>
      {selectedInventario && (
        <ModalEditarInventario
          selectedInventario={selectedInventario}
          updateSelectedInventario={updateSelectedInventario}
          handleCloseModal={handleCloseModal}
        />
      )}
    </Grid>
  );
};

export default ListadoInventario;
