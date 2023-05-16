import React from "react";
import { Grid } from "@mui/material";
import Free from "./Free";
import Pro from "./Pro";
import Enterprise from "./Enterprise";

function Pricing() {
  return (
    <>
      <div className="div-title-desc">
        <h1>Pricing</h1>
        <h3>
          Quickly build an effective pricing table for your potential <br />
          customers with this layout. Its built with default MUI <br />
          components with little customization.
        </h3>
      </div>
      <br />
      <div className="packages">
        <Grid container rowSpacing={1} columnSpacing={{ xs: 1, sm: 2, md: 3 }}>
          <Grid xs={4}>
            <Free />
          </Grid>
          <Grid xs={4}>
            <Pro />
          </Grid>
          <Grid xs={4}>
            <Enterprise />
          </Grid>
        </Grid>
      </div>
    </>
  );
}

export default Pricing;
