import React from "react";
import clsx from "clsx";
import NumberFormat from "react-number-format";

import { StepLayout } from "../../StepLayout";
import { Button } from "../../../Button";
import { StepInfo } from "../../StepInfo";

import styles from "./EnterPhoneStep.module.scss";

export const EnterPhoneStep = () => {
  const [values, setValues] = React.useState({});

  const nextDisabled =
    !values.formattedValue || values.formattedValue.includes("_");

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/phone.png"
        title="Enter your phone #"
        description="We will send you a confirmation code"
      />
      <StepLayout className={clsx("m-auto mt-30", styles.whiteBlock)}>
        <div className={clsx("mb-30", styles.input)}>
          <img src="/static/ukraine-flag.png" alt="flag" width={24} />
          <NumberFormat
            className="field"
            format="+### (##) ###-##-##"
            mask="_"
            placeholder="+380 (99) 888-77-66"
            value={values.value}
            onValueChange={({ formattedValue, value }) =>
              setValues({ formattedValue, value })
            }
          />
        </div>
        <Button disabled={nextDisabled}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
        <p className={clsx(styles.policyText, "mt-30")}>
          By entering your number, you’re agreeing to our Terms of Service and
          Privacy Policy. Thanks!
        </p>
      </StepLayout>
    </div>
  );
};
