import React from "react";
import clsx from "clsx";

import { StepLayout } from "../../StepLayout";
import { Button } from "../../../Button";
import { StepInfo } from "../../StepInfo";

import styles from "./EnterNameStep.module.scss";

export const EnterNameStep = () => {
  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <StepLayout className={clsx("m-auto", styles.whiteBlock)}>
        <div className="mb-30">
          <input className="field" placeholder="Enter fullname" />
        </div>
        <Button>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </StepLayout>
    </div>
  );
};
