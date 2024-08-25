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
  Tooltip,
  IconButton,
  tableCellClasses,
  Paper,
} from "@mui/material";

import { styled } from "@mui/material/styles";

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: "#939393",
    color: theme.palette.common.black,
  },
  [`&.${tableCellClasses.body}`]: {
    fontSize: 12,
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

const TableView = ({ tableData }) => {
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
                          <b>
                            {key}
                            {/*headerParser(key)*/}
                          </b>
                        </Grid>
                      </Grid>
                    </StyledTableCell>
                  );
                })
              : null}
            <StyledTableCell
              style={{
                justifyContent: "center",
                textAlign: "center",
                alignItems: "center",
              }}
            >
              <b>Order Actions</b>
            </StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {!_.isEmpty(tableData) &&
            !_.isNil(currentTableKeys) &&
            tableData.map((excelValue, index) => {
              return (
                <StyledTableRow key={index}>
                  {currentTableKeys.map((currentKey, innerIndex) => {
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
                        {excelValue[currentKey]}
                      </StyledTableCell>
                    );
                  })}
                  <StyledTableCell
                    style={{
                      justifyContent: "center",
                      textAlign: "center",
                      alignItems: "center",
                    }}
                  >
                    <Grid
                      container
                      spacing={1}
                      direction="row"
                      justifyContent="center"
                      flexWrap="nowrap"
                    >
                      <Grid item>
                        <Tooltip title={<b>View</b>} arrow placement="top">
                          <IconButton
                            //onClick={handleOpenTIDValue(excelValue[currentKey])}
                            edge="end"
                            color="primary"
                          >
                            SEARCH
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title={<b>Update</b>} arrow placement="top">
                          <IconButton
                            //onClick={handleOpenEditModal(excelValue["id"])}
                            edge="end"
                            color="primary"
                          >
                            EDIT
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title={<b>Delete</b>} arrow placement="top">
                          <IconButton
                            //onClick={handleDelete(excelValue["id"])}
                            edge="end"
                            color="error"
                          >
                            CLEAR
                          </IconButton>
                        </Tooltip>
                      </Grid>
                    </Grid>
                  </StyledTableCell>
                </StyledTableRow>
              );
            })}
        </TableBody>
      </Table>
    </TableContainer>
  );
};

export default TableView;
