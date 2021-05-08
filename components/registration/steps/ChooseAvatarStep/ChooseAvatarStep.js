import React from "react";
import clsx from "clsx";

import { StepLayout } from "../../StepLayout";
import { Button } from "../../../Button";
import { StepInfo } from "../../StepInfo";
import { Avatar } from "../../../Avatar";

import styles from "./ChooseAvatarStep.module.scss";

export const ChooseAvatarStep = () => {
  const [avatarUrl, setAvatarUrl] = React.useState(
    "https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1"
  );

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title="Okay, Archakov Dennis!"
        description="How’s this photo?"
      />
      <StepLayout className={clsx("m-auto mt-40", styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width="120px" height="120px" src={avatarUrl} />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image" type="file" hidden />
        <Button>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" />
        </Button>
      </StepLayout>
    </div>
  );
};
