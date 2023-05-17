import React from "react";
import { TextField, Button } from "@mui/material";

function Payment() {
  return (
    <div className="Shipping">
      <h3>Payment Method</h3>
      <br />
      <div>
        <TextField
          required
          id="fname"
          label="Name on card"
          variant="standard"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="lname" label="Card number" variant="standard" />
      </div>
      <br />
      <div>
        <TextField required id="fname" label="Expiry date" variant="standard" />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField id="lname" label="CVV" variant="standard" />
      </div>
      <br />
      <br />
      <div>
        <Button variant="text">Back</Button>
        <Button variant="contained">Next</Button>
      </div>
    </div>
  );
}

export default Payment;
