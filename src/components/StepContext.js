import React, { useState } from "react";
import Checkout from "./Checkout";

export const multiStepContext = React.createContext();
const StepContext = () => {
  const [currentStep, setStep] = useState(1);
  const [userData, setUserData] = useState([]);
  const [finalData, setFinalData] = useState([]);

  function submitData() {
    console.log(userData);
    setFinalData((finalData) => [...finalData, userData]);
    setUserData();
  }

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
          submitData,
        }}
      >
        <Checkout />
      </multiStepContext.Provider>
    </div>
  );
};

export default StepContext;
