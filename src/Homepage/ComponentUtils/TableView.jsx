import _ from "lodash";

import React, { useState, useEffect } from "react";

import {
  Grid,
  TableContainer,
  Table,
  TableHead,
  TableRow,
  TableBody,
  TableCell,
  tableCellClasses,
  Paper,
  Rating,
  Button,
  Tooltip,
  IconButton,
  Snackbar,
  Alert,
  AlertTitle,
  Chip,
} from "@mui/material";
import { styled } from "@mui/material/styles";

import EditIcon from "@mui/icons-material/Edit";
import ContentCopyIcon from "@mui/icons-material/ContentCopy";
import CheckCircleOutlineIcon from "@mui/icons-material/CheckCircleOutline";

const parseTitlesTable = (stringToParse) => {
  return stringToParse
    .replace(/([a-z])([A-Z])/g, "$1 $2")
    .replace(/^./, (char) => char.toUpperCase());
};

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#939393",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 15,
  },
}));

const StyledTableRow = styled(TableRow)(({ theme }) => ({
  "&:nth-of-type(odd)": {
    backgroundColor: theme.palette.action.hover,
  },
  // hide last border
  "&:last-child td, &:last-child th": {
    border: 0,
  },
}));

const TableView = ({ tableData, setSelectedInventario }) => {
  const [currentTableKeys, setCurrentTableKeys] = useState(null);
  const [copiedClipboard, setCopiedClipboard] = useState(false);

  const checkColorStatusChip = (status) => {
    switch (status) {
      case "completado":
        return "#adf2ad";
      case "activo":
        return "#faff7f";
      default:
        return "#faff7f";
    }
  };

  const handleOpenTIDValue = (TID) => () => {
    navigator.clipboard
      .writeText(TID)
      .then(() => {
        setCopiedClipboard(true);
      })
      .catch((error) => {
        setCopiedClipboard(false);
      });
  };

  const handleCloseCopiedValue = () => {
    setCopiedClipboard(false);
  };

  useEffect(() => {
    setCurrentTableKeys(Object.keys(tableData[0]));
  }, []);

  return (
    <TableContainer
      component={Paper}
      style={{
        alignItems: "center",
      }}
    >
      <Table
        aria-label="customized table"
        style={{
          alignItems: "center",
        }}
      >
        <TableHead>
          <TableRow>
            {!_.isEmpty(currentTableKeys) && !_.isNil(currentTableKeys)
              ? currentTableKeys.map((key, index) => {
                  if (key === "image") {
                    return null;
                  }
                  if (key === "habitacionId") {
                    return null;
                  }
                  if (key === "habitacionData") {
                    return (
                      <StyledTableCell
                        key={index}
                        index={key + index}
                        style={{ textAlign: "center" }}
                      >
                        <Grid
                          container
                          alignItems="center"
                          justifyContent="center"
                        >
                          <Grid item xs={12}>
                            <b style={{ fontFamily: "montserrat, sans-serif" }}>
                              {parseTitlesTable("Habitacion")}
                            </b>
                          </Grid>
                        </Grid>
                      </StyledTableCell>
                    );
                  }
                  return (
                    <StyledTableCell
                      key={index}
                      index={key + index}
                      style={{ textAlign: "center" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={12}>
                          <b style={{ fontFamily: "montserrat, sans-serif" }}>
                            {parseTitlesTable(key)}
                          </b>
                        </Grid>
                      </Grid>
                    </StyledTableCell>
                  );
                })
              : null}
          </TableRow>
        </TableHead>
        <TableBody>
          {!_.isEmpty(tableData) &&
            !_.isNil(currentTableKeys) &&
            tableData.map((excelValue, index) => {
              return (
                <StyledTableRow key={index}>
                  {currentTableKeys.map((currentKey, innerIndex) => {
                    if (currentKey === "image") {
                      return null;
                    }
                    if (currentKey === "habitacionId") {
                      return null;
                    }
                    if (currentKey === "estado") {
                      return (
                        <StyledTableCell key={index}>
                          <Chip
                            style={{
                              backgroundColor: checkColorStatusChip(
                                excelValue[currentKey]
                              ),
                            }}
                            label={<b>{excelValue[currentKey]}</b>}
                          />
                        </StyledTableCell>
                      );
                    }
                    if (currentKey === "id") {
                      return (
                        <StyledTableCell
                          key={index}
                          style={{
                            textAlign: "center",
                          }}
                        >
                          <Tooltip
                            title={
                              <>
                                <b>{excelValue[currentKey]}</b>
                              </>
                            }
                            arrow
                            placement="top"
                          >
                            <IconButton
                              onClick={handleOpenTIDValue(
                                excelValue[currentKey]
                              )}
                              edge="end"
                              color="primary"
                            >
                              <ContentCopyIcon />
                            </IconButton>
                          </Tooltip>
                        </StyledTableCell>
                      );
                    }
                    if (currentKey === "habitacionData") {
                      return (
                        <StyledTableCell
                          key={index + innerIndex}
                          index={index}
                          style={{
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            fontFamily: "montserrat, sans-serif",
                          }}
                        >
                          {excelValue[currentKey]?.["title"]}
                        </StyledTableCell>
                      );
                    }
                    if (currentKey === "serviciosEspeciales") {
                      return (
                        <StyledTableCell
                          key={index + innerIndex}
                          index={index}
                          style={{
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            fontFamily: "montserrat, sans-serif",
                          }}
                        >
                          {!_.isEmpty(excelValue[currentKey])
                            ? excelValue[currentKey]
                                .map((element) => element.nombreProducto)
                                .join(", ")
                            : "No hay servicios"}
                        </StyledTableCell>
                      );
                    }
                    if (currentKey.includes("fecha")) {
                      return (
                        <StyledTableCell
                          key={index + innerIndex}
                          index={index}
                          style={{
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            fontFamily: "montserrat, sans-serif",
                          }}
                        >
                          {new Date(excelValue[currentKey]).toDateString()}
                        </StyledTableCell>
                      );
                    }
                    if (currentKey === "inventario") {
                      return (
                        <StyledTableCell
                          key={index + innerIndex}
                          index={innerIndex}
                          style={{
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            color: "black",
                          }}
                        >
                          <Button
                            onClick={() => setSelectedInventario(excelValue)}
                            variant="contained"
                            className="button-text"
                          >
                            <EditIcon />
                          </Button>
                        </StyledTableCell>
                      );
                    } else if (currentKey === "calificacion") {
                      return (
                        <StyledTableCell
                          key={index + innerIndex}
                          index={innerIndex}
                          style={{
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                          }}
                        >
                          <Rating
                            key={innerIndex}
                            name="simple-controlled"
                            value={excelValue[currentKey]}
                            readOnly={
                              excelValue["estado"] === "activo" ? false : true
                            }
                          />
                        </StyledTableCell>
                      );
                    } else {
                      return (
                        <StyledTableCell
                          key={index + innerIndex}
                          index={innerIndex}
                          style={{
                            justifyContent: "center",
                            textAlign: "center",
                            alignItems: "center",
                            fontFamily: "montserrat, sans-serif",
                          }}
                        >
                          {excelValue[currentKey]}
                        </StyledTableCell>
                      );
                    }
                  })}
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
      <Snackbar
        open={copiedClipboard}
        autoHideDuration={5000}
        onClose={handleCloseCopiedValue}
      >
        <Alert
          severity="success"
          icon={<CheckCircleOutlineIcon fontSize="inherit" />}
        >
          <AlertTitle>
            <strong>El ID de la reserva se ha copiado al portapapeles.</strong>
          </AlertTitle>
        </Alert>
             
      </Snackbar>
    </TableContainer>
  );
};

export default TableView;
