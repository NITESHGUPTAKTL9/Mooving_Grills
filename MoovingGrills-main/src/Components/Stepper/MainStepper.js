import { useState } from "react";
import { makeStyles } from "@material-ui/core/styles";
import Stepper from "@material-ui/core/Stepper";
import Step from "@material-ui/core/Step";
import StepLabel from "@material-ui/core/StepLabel";
import Button from "@material-ui/core/Button";
import CheckoutItems from "../Checkout/checkout-items.component";
import OrderDetails from "../Checkout/order-details.component";
import OrderCompleted from "../Checkout/order-completed.component";

const useStyles = makeStyles((theme) => ({
  root: {
    width: "100%",
  },
  button: {
    marginRight: theme.spacing(1),
  },
  instructions: {
    marginTop: theme.spacing(1),
    marginBottom: theme.spacing(1),
  },
}));

function getSteps() {
  return ["Add items to purchase", "Enter details for your order", "Finished!"];
}

function getStepContent(step, next) {
  switch (step) {
    case 0:
      return <CheckoutItems onProceed={next} />;
    case 1:
      return <OrderDetails onProceed={next} />;
    case 2:
      return <OrderCompleted />;
    default:
      return "Unknown step";
  }
}

const MainStepper = () => {
  const classes = useStyles();
  const [activeStep, setActiveStep] = useState(0);
  const steps = getSteps();

  const handleNext = () => {
    setActiveStep((prevActiveStep) => prevActiveStep + 1);
  };

  const handleBack = () => {
    setActiveStep((prevActiveStep) => prevActiveStep - 1);
  };

  return (
    <div className={classes.root}>
      <Stepper activeStep={activeStep}>
        {steps.map((label, index) => {
          return (
            <Step key={label}>
              <StepLabel>{label}</StepLabel>
            </Step>
          );
        })}
      </Stepper>
      {activeStep === steps.length ? null : (
        <>
          {getStepContent(activeStep, handleNext)}
          <div>
            <Button
              variant="outlined"
              color="primary"
              disabled={activeStep === 0 || activeStep === steps.length - 1}
              onClick={handleBack}
              className={classes.button}
            >
              Back
            </Button>
          </div>
        </>
      )}
    </div>
  );
};

export default MainStepper;
