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
} from "@mui/material";
import { styled } from "@mui/material/styles";

import EditIcon from "@mui/icons-material/Edit";

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
                            readOnly
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
    </TableContainer>
  );
};

export default TableView;
