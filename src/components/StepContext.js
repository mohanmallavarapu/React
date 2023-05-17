import React, { useState } from "react";
import Checkout from "./Checkout";

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);
  return (
    <div>
      <multiStepContext.Provider
        value={{
          currentStep,
          setStep,
          userData,
          setUserData,
          finalData,
          setFinalData,
        }}
      >
        <Checkout />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
