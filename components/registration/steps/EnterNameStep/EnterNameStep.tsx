import { FC, useContext, useState, ChangeEvent } from 'react';
import clsx from 'clsx';

import { StepLayout } from '../../StepLayout';
import { Button } from '../../../Button';
import { StepInfo } from '../../StepInfo';

import styles from './EnterNameStep.module.scss';
import { RegistrationContext } from '../../../../pages';

export const EnterNameStep: FC = () => {
  const { onNextStep } = useContext(RegistrationContext);
  const [nameValue, setNameValue] = useState('');

  const nextDisabled = !nameValue;

  const onNameChange = (e: ChangeEvent<HTMLInputElement>): void => setNameValue(e.target.value);

  const nextStepHandler = (): void => {
    onNextStep();
  };

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/man.png"
        title="What’s your full name?"
        description="People use real names on Clubhouse :) Thnx!"
      />
      <StepLayout className={clsx('m-auto', styles.whiteBlock)}>
        <div className="mb-30">
          <input
            className="field"
            value={nameValue}
            onChange={onNameChange}
            placeholder="Enter fullname"
          />
        </div>
        <Button onClick={nextStepHandler} disabled={nextDisabled}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" alt="Next step" />
        </Button>
      </StepLayout>
    </div>
  );
};
