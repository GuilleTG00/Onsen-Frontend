import _ from "lodash";

import React from "react";

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

const ModalEditarInventario = () => {
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
            {!_.isEmpty(currentElementKeys)
              ? currentElementKeys.map((key, index) => {
                  return (
                    <StyledTableCell
                      index={key + index}
                      style={{ textAlign: "center" }}
                    >
                      <Grid
                        container
                        alignItems="center"
                        justifyContent="center"
                      >
                        <Grid item xs={11}>
                          <b>{headerParser(key)}</b>
                        </Grid>
                        <Grid item xs={1}>
                          {checkFilters(key)}
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
          {!loading &&
            !_.isEmpty(filteredData) &&
            filteredData.map((excelValue, index) => {
              return (
                <StyledTableRow key={excelValue + index}>
                  {currentElementKeys.map((currentKey, innerIndex) => {
                    return (
                      <StyledTableCell
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
                      flexWrap="nowrap"
                    >
                      <Grid item>
                        <Tooltip title={<b>View</b>} arrow placement="top">
                          <IconButton
                            //onClick={handleOpenTIDValue(excelValue[currentKey])}
                            edge="end"
                            color="primary"
                          >
                            <SearchIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title={<b>Update</b>} arrow placement="top">
                          <IconButton
                            onClick={handleOpenEditModal(excelValue["id"])}
                            edge="end"
                            color="primary"
                          >
                            <EditIcon />
                          </IconButton>
                        </Tooltip>
                      </Grid>
                      <Grid item>
                        <Tooltip title={<b>Delete</b>} arrow placement="top">
                          <IconButton
                            onClick={handleDelete(excelValue["id"])}
                            edge="end"
                            color="error"
                          >
                            <ClearIcon />
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
      {checkIfLoading()}
    </TableContainer>
  );
};

export default ModalEditarInventario;
