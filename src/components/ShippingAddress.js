import React from "react";
import { TextField, Button } from "@mui/material";

function ShippingAddress() {
  return (
    <div className="Shipping">
      <h3>ShippingAddress</h3> <br />
      <div>
        <TextField required id="fname" label="First name" variant="standard" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField required id="lname" label="Last name" variant="standard" />
      </div>
      <br />
      <TextField
        required
        id="address1"
        label="Address line 1"
        variant="standard"
      />
      <br />
      <TextField
        required
        id="address2"
        label="Address line 2"
        variant="standard"
      />
      <br />
      <div>
        <TextField required id="city" label="City" variant="standard" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          required
          id="state"
          label="State/Province/Region"
          variant="standard"
        />
      </div>
      <br />
      <div>
        <TextField
          required
          id="zip"
          label="Zip/Postal Code"
          variant="standard"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField required id="country" label="Country" variant="standard" />
      </div>
      <br />
      <br />
      <div>
        <Button variant="contained">Next</Button>
      </div>
    </div>
  );
}

export default ShippingAddress;
