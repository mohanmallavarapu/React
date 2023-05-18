import React, { useContext } from "react";
import { TextField, Button } from "@mui/material";
import { multiStepContext } from "./StepContext";

function ShippingAddress() {
  const { setStep, userData, setUserData } = useContext(multiStepContext);
  return (
    <div className="Shipping">
      <h3>ShippingAddress</h3> <br />
      <div>
        <TextField
          required
          id="fname"
          value={userData["firstname"]}
          onChange={(e) =>
            setUserData({ ...userData, firstname: e.target.value })
          }
          label="First name"
          variant="standard"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          required
          id="lname"
          value={userData["lastname"]}
          onChange={(e) =>
            setUserData({ ...userData, lastname: e.target.value })
          }
          label="Last name"
          variant="standard"
        />
      </div>
      <br />
      <TextField
        required
        id="address1"
        value={userData["addressone"]}
        onChange={(e) =>
          setUserData({ ...userData, addressone: e.target.value })
        }
        label="Address line 1"
        variant="standard"
      />
      <br />
      <TextField
        required
        id="address2"
        value={userData["addresstwo"]}
        onChange={(e) =>
          setUserData({ ...userData, addresstwo: e.target.value })
        }
        label="Address line 2"
        variant="standard"
      />
      <br />
      <div>
        <TextField
          required
          id="city"
          value={userData["city"]}
          onChange={(e) => setUserData({ ...userData, city: e.target.value })}
          label="City"
          variant="standard"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          required
          id="state"
          value={userData["state"]}
          onChange={(e) => setUserData({ ...userData, state: e.target.value })}
          label="State/Province/Region"
          variant="standard"
        />
      </div>
      <br />
      <div>
        <TextField
          required
          id="zip"
          value={userData["zip"]}
          onChange={(e) => setUserData({ ...userData, zip: e.target.value })}
          label="Zip/Postal Code"
          variant="standard"
        />
        &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
        <TextField
          required
          id="country"
          value={userData["country"]}
          onChange={(e) =>
            setUserData({ ...userData, country: e.target.value })
          }
          label="Country"
          variant="standard"
        />
      </div>
      <br />
      <div>
        <Button variant="contained" onClick={() => setStep(2)}>
          Next
        </Button>
      </div>
    </div>
  );
}

export default ShippingAddress;
