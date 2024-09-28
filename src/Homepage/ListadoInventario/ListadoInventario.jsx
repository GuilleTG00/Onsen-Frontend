import React, { useState, useEffect } from "react";
import { Grid, Card, CardContent, Typography } from "@mui/material";

import "../../GeneralStyles/formStyles.css";
import TableView from "../ComponentUtils/TableView";
import ModalEditarInventario from "./Modals/ModalEditarInventario";

import {
  getListadoInventarioAPI,
  actualizarElementoInventarioAPI,
} from "../../APICalls";

const ListadoInventario = () => {
  const [listadoInventario, setListadoInventario] = useState(null);
  const [selectedInventario, setSelectedInventario] = useState(null);

  const handleAPICallListado = async () => {
    const { status, data } = await getListadoInventarioAPI(
      localStorage.getItem("token")
    );
    if (status === 200) {
      setListadoInventario(data);
    }
  };

  const handleAPICallUpdateInventario = async (
    nombreProducto,
    cantidad,
    id
  ) => {
    const { status } = await actualizarElementoInventarioAPI(
      localStorage.getItem("token"),
      nombreProducto,
      cantidad,
      id
    );
    if (status === 200) {
      handleAPICallListado();
    }
  };

  const updateSelectedInventario = (id, nombreProducto, cantidad) => {
    handleAPICallUpdateInventario(nombreProducto, cantidad, id);
  };

  const handleCloseModal = () => {
    setSelectedInventario(null);
  };

  useEffect(() => {
    handleAPICallListado();
  }, []);

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
              {listadoInventario && (
                <Grid item xs={12}>
                  <TableView
                    tableData={listadoInventario}
                    setSelectedInventario={setSelectedInventario}
                  />
                </Grid>
              )}
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
