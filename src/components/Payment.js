import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import { multiStepContext } from "./StepContext";

function Payment() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div className="Shipping">
      <h3>Payment Method</h3>
      <br />
      <div>
        <TextField
          required
          id="cardname"
          value={userData["cardname"]}
          onChange={(e) =>
            setUserData({ ...userData, cardname: e.target.value })
          }
          label="Name on card"
          variant="standard"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          id="cardno"
          value={userData["cardno"]}
          onChange={(e) => setUserData({ ...userData, cardno: e.target.value })}
          label="Card number"
          variant="standard"
        />
      </div>
      <br />
      <div>
        <TextField
          required
          id="expirydt"
          value={userData["expirydt"]}
          onChange={(e) =>
            setUserData({ ...userData, expirydt: e.target.value })
          }
          label="Expiry date"
          variant="standard"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          id="cvv"
          value={userData["cvv"]}
          onChange={(e) => setUserData({ ...userData, cvv: e.target.value })}
          label="CVV"
          variant="standard"
        />
      </div>
      <br />
      <br />
      <div>
        <Button variant="text" onClick={() => setStep(1)}>
          Back
        </Button>
        <Button variant="contained" onClick={() => setStep(3)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default Payment;
