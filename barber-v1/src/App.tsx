import { Box, Button, Step, StepLabel, Stepper } from "@mui/material";
import { useState } from "react";

const steps = ["Dados pessoais", "Endereço", "Confirmação"];

export default function App() {
  const [activeStep, setActiveStep] = useState(0);

  const handleNext = () => {
    setActiveStep((prev) => prev + 1);
  };

  const handleBack = () => {
    setActiveStep((prev) => prev - 1);
  };

  return (
    <Box sx={{ width: "100%" }}>
      <Stepper activeStep={activeStep}>
        {steps.map((label) => (
          <Step key={label}>
            <StepLabel>{label}</StepLabel>
          </Step>
        ))}
      </Stepper>

      <Box sx={{ mt: 4 }}>
        <h2>{steps[activeStep]}</h2>

        <Button disabled={activeStep === 0} onClick={handleBack} sx={{ mr: 1 }}>
          Voltar
        </Button>

        <Button variant="contained" onClick={handleNext}>
          {activeStep === steps.length - 1 ? "Finalizar" : "Próximo"}
        </Button>
      </Box>
    </Box>
  );
}
