import React, { useContext } from "react";
import { Button } from "@mui/material";
import { multiStepContext } from "./StepContext";

function OrderSummary() {
  const { setStep, userData, setUserData, submitData } =
    useContext(multiStepContext);
  return (
    <div>
      <Button variant="text" onClick={() => setStep(2)}>
        Back
      </Button>
      <Button variant="contained" onClick={submitData}>
        Submit
      </Button>
    </div>
  );
}

export default OrderSummary;
