import React, { useState } from "react";

import { Grid, Typography, Button, Menu, MenuItem } from "@mui/material";

import RemoveCircleOutlineIcon from "@mui/icons-material/RemoveCircleOutline";
import AddCircleOutlineIcon from "@mui/icons-material/AddCircleOutline";
import KeyboardArrowDownIcon from "@mui/icons-material/KeyboardArrowDown";
import ArrowDropUpIcon from "@mui/icons-material/ArrowDropUp";
import GroupAddIcon from "@mui/icons-material/GroupAdd";

const AcompañantesSelection = ({ companions, handleChange }) => {
  const [anchorEl, setAnchorEl] = useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  return (
    <>
      <Button
        style={{
          color: "black",
          border: "1px solid grey",
          borderRadius: "5px",
          padding: 10,
        }}
        aria-controls={open ? "companions-menu" : undefined}
        aria-haspopup="true"
        aria-expanded={open ? "true" : undefined}
        onClick={handleClick}
      >
        <Grid container alignItems="center" justifyContent="center" spacing={5}>
          <Grid item xs={4}>
            <GroupAddIcon />
          </Grid>
          <Grid item xs={4}>
            <Typography variant="h5">
              {companions.adultos + companions.jovenes + companions.niños}
            </Typography>
          </Grid>
          <Grid item xs={4}>
            {open ? <ArrowDropUpIcon /> : <KeyboardArrowDownIcon />}
          </Grid>
        </Grid>
      </Button>
      <Menu
        id="companions-menu"
        anchorEl={anchorEl}
        disableRipple
        open={open}
        onClose={handleClose}
      >
        <MenuItem disableTouchRipple>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={4}>
              <Typography>Adultos</Typography>
            </Grid>
            <Grid item xs={8}>
              <Button onClick={() => handleChange("adultos", "decrement")}>
                <RemoveCircleOutlineIcon />
              </Button>
              <Typography display="inline" mx={2}>
                {companions.adultos}
              </Typography>
              <Button onClick={() => handleChange("adultos", "increment")}>
                <AddCircleOutlineIcon />
              </Button>
            </Grid>
          </Grid>
        </MenuItem>
        <MenuItem disableTouchRipple>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={4}>
              <Typography>Jóvenes</Typography>
            </Grid>
            <Grid item xs={8}>
              <Button onClick={() => handleChange("jovenes", "decrement")}>
                <RemoveCircleOutlineIcon />
              </Button>
              <Typography display="inline" mx={2}>
                {companions.jovenes}
              </Typography>
              <Button onClick={() => handleChange("jovenes", "increment")}>
                <AddCircleOutlineIcon />
              </Button>
            </Grid>
          </Grid>
        </MenuItem>
        <MenuItem disableTouchRipple>
          <Grid container alignItems="center" spacing={2}>
            <Grid item xs={4}>
              <Typography>Niños</Typography>
            </Grid>
            <Grid item xs={8}>
              <Button onClick={() => handleChange("niños", "decrement")}>
                <RemoveCircleOutlineIcon />
              </Button>
              <Typography display="inline" mx={2}>
                {companions.niños}
              </Typography>
              <Button onClick={() => handleChange("niños", "increment")}>
                <AddCircleOutlineIcon />
              </Button>
            </Grid>
          </Grid>
        </MenuItem>
      </Menu>
    </>
  );
};

export default AcompañantesSelection;
