import { FC, useState, ChangeEvent } from 'react';
import { useRouter } from 'next/router';
import clsx from 'clsx';

import Axios from '../../../../core/axios';

import { StepLayout } from '../../StepLayout';
import { Button } from '../../../Button';
import { StepInfo } from '../../StepInfo';

import styles from './EnterCodeStep.module.scss';

export const EnterCodeStep: FC = () => {
  const router = useRouter();
  const [isLoading, setIsLoading] = useState(false);
  const [codes, setCodes] = useState(['', '', '', '']);

  const nextDisabled = codes.some((v) => !v);

  const handleChangeInput = (e: ChangeEvent<HTMLInputElement>): void => {
    const id = Number(e.target.getAttribute('id'));
    const value = e.target.value;

    setCodes((prevCodes) => {
      const newCodes = [...prevCodes];
      newCodes[id] = value;
      return newCodes;
    });

    if (e.target.nextSibling) (e.target.nextSibling as HTMLInputElement).focus();
  };

  const onSubmit = async (): Promise<void> => {
    try {
      setIsLoading(true);
      await Axios.get('/todos');
      router.push('/rooms');
    } catch (err) {
      alert('Error while activation');
      setIsLoading(false);
    }
  };

  return (
    <div className={styles.block}>
      {!isLoading ? (
        <>
          <StepInfo icon="/static/numbers.png" title="Enter your activate code" />
          <StepLayout className={clsx('m-auto mt-30', styles.whiteBlock)}>
            <div className={clsx('mb-30', styles.codeInput)}>
              {codes.map((code, index) => (
                <input
                  key={index}
                  type="tel"
                  placeholder="X"
                  maxLength={1}
                  id={String(index)}
                  value={code}
                  onChange={handleChangeInput}
                />
              ))}
            </div>
            <Button disabled={nextDisabled} onClick={onSubmit}>
              Next
              <img className="d-ib ml-10" src="/static/arrow.svg" alt="Next step" />
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
