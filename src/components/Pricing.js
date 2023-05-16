import React from "react";
import { Grid } from "@mui/material";
import Album from "./Album";
import Posts from "./Posts";

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
        <Grid
          container
          spacing={{ xs: 2, md: 3 }}
          columns={{ xs: 4, sm: 8, md: 12 }}
        >
          {Array.from(Array(3)).map((_, index) => (
            <Grid xs={2} sm={4} md={4} key={index}>
              <Album>xs=2</Album>
            </Grid>
          ))}
        </Grid>
      </div>
    </>
  );
}

export default Pricing;
