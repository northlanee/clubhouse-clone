import React from "react";
import clsx from "clsx";

import { StepLayout } from "../../StepLayout";
import { Button } from "../../../Button";
import { StepInfo } from "../../StepInfo";

import styles from "./EnterCodeStep.module.scss";

export const EnterCodeStep = () => {
  const [isLoading, setIsLoading] = React.useState(false);
  const [codes, setCodes] = React.useState(["", "", "", ""]);

  return (
    <div className={styles.block}>
      {!isLoading ? (
        <>
          <StepInfo
            icon="/static/numbers.png"
            title="Enter your activate code"
          />
          <StepLayout className={clsx("m-auto mt-30", styles.whiteBlock)}>
            <div className={clsx("mb-30", styles.codeInput)}>
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="tel"
                  placeholder="X"
                  maxLength={1}
                  id={String(index)}
                  value={code}
                />
              ))}
            </div>
            <Button>
              Next
              <img className="d-ib ml-10" src="/static/arrow.svg" />
            </Button>
          </StepLayout>
        </>
      ) : (
        <div className="text-center">
          <div className="loader"></div>
          <h3 className="mt-5">Activation in progress ...</h3>
        </div>
      )}
    </div>
  );
};
