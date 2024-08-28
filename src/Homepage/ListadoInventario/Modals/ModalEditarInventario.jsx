import _ from "lodash";

import React, { useState } from "react";
import {
  Modal,
  Button,
  Card,
  CardContent,
  CardActions,
  Grid,
  Typography,
  InputAdornment,
  TextField,
} from "@mui/material";

import InventoryIcon from "@mui/icons-material/Inventory";

const ModalEditarInventario = ({
  selectedInventario,
  handleCloseModal,
  updateSelectedInventario,
}) => {
  const [updatedValue, setUpdatedValue] = useState(
    selectedInventario["cantidad"]
  );

  const handleChangeValue = (event) => {
    setUpdatedValue(event.target.value);
  };

  const callUpdateSelectInventario = () => {
    updateSelectedInventario(
      updatedValue,
      selectedInventario["nombreProducto"]
    );
    handleCloseModal();
  };

  return (
    <Modal
      open={selectedInventario}
      onClose={handleCloseModal}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        overflow: "auto",
      }}
    >
      <Grid container justifyContent="center" flexDirection="row">
        <Card
          style={{
            width: "70%",
          }}
        >
          <CardContent>
            <Grid
              container
              spacing={5}
              justifyContent="center"
              alignItems="center"
            >
              <Grid item xs={12} style={{ textAlign: "center" }}>
                <Card
                  style={{
                    background: `linear-gradient(rgba(255,255,255,.5), rgba(255,255,255,.5)),url(${selectedInventario["image"]})`,
                    backgroundPosition: "center",
                    backgroundSize: "100% 100%",
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
                          <b>
                            Seleccionado: {selectedInventario["nombreProducto"]}
                          </b>
                        </Typography>
                      </Grid>
                    </Grid>
                  </CardContent>
                </Card>
              </Grid>
              <Grid item xs={12}>
                <Grid container spacing={2}>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#000000",
                        textAlign: "left",
                        fontFamily: "montserrat, sans-serif",
                      }}
                    >
                      <b>Información:</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Typography
                      variant="h5"
                      sx={{
                        color: "#000000",
                        textAlign: "left",
                        fontFamily: "montserrat, sans-serif",
                      }}
                    >
                      <b>Unidades Actuales: {selectedInventario["cantidad"]}</b>
                    </Typography>
                  </Grid>
                  <Grid item xs={12}>
                    <Grid
                      container
                      spacing={5}
                      alignItems="center"
                      justifyContent="center"
                    >
                      <Grid item>
                        <Typography
                          variant="h6"
                          sx={{
                            color: "#000000",
                            textAlign: "left",
                            fontFamily: "montserrat, sans-serif",
                          }}
                        >
                          Ingrese el nuevo valor del producto a modificar:
                        </Typography>
                      </Grid>
                      <Grid item xs={2}>
                        <TextField
                          id="username"
                          name="username"
                          onChange={handleChangeValue}
                          value={updatedValue}
                          type="number"
                          InputProps={{
                            startAdornment: (
                              <InputAdornment
                                position="start"
                                className="text-primary"
                              >
                                <InventoryIcon />
                              </InputAdornment>
                            ),
                          }}
                        />
                      </Grid>
                    </Grid>
                  </Grid>
                </Grid>
              </Grid>
            </Grid>
          </CardContent>
          <CardActions
            style={{
              display: "flex",
              justifyContent: "flex-end",
            }}
          >
            <Button
              size="medium"
              variant="contained"
              color="error"
              onClick={handleCloseModal}
            >
              Cancelar
            </Button>
            <Button
              size="medium"
              variant="contained"
              color="success"
              onClick={callUpdateSelectInventario}
            >
              CONFIRMAR
            </Button>
          </CardActions>
        </Card>
      </Grid>
    </Modal>
  );
};

export default ModalEditarInventario;
