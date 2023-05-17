import React, { useContext } from "react";
import ShippingAddress from "./ShippingAddress";
import Payment from "./Payment";
import OrderSummary from "./OrderSummary";
import { Box } from "@mui/material";
import { Stepper, StepLabel, Step } from "@mui/material";
import { multiStepContext } from "./StepContext";

function Checkout() {
  const { currentStep, finalData } = useContext(multiStepContext);
  function showStep(step) {
    switch (step) {
      case 1:
        return <ShippingAddress />;
      case 2:
        return <Payment />;
      case 3:
        return <OrderSummary />;
    }
  }

  return (
    <>
      <Box
        margin="auto"
        marginTop="2px"
        justifyContent="center"
        bgcolor="Background"
        borderRadius="12px"
        boxShadow="2"
        width="650px"
        height="580px"
      >
        <h2>Checkout</h2>
        <div className="center-stepper">
          <Stepper
            style={{ width: "100%" }}
            activeStep={currentStep - 1}
            orientation="horizontal"
          >
            <Step>
              <StepLabel>Shipping Address</StepLabel>
            </Step>
            <Step>
              <StepLabel>Payment Method</StepLabel>
            </Step>
            <Step>
              <StepLabel>Order Summary</StepLabel>
            </Step>
          </Stepper>
        </div>
        {showStep(currentStep)}
      </Box>
    </>
  );
}

export default Checkout;
