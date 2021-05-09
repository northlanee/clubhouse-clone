import { FC, useRef, useState, useEffect, useContext } from 'react';
import clsx from 'clsx';

import { StepLayout } from '../../StepLayout';
import { Button } from '../../../Button';
import { StepInfo } from '../../StepInfo';
import { Avatar } from '../../../Avatar';

import styles from './ChooseAvatarStep.module.scss';
import { RegistrationContext } from '../../../../pages';

export const ChooseAvatarStep: FC = () => {
  const { onNextStep } = useContext(RegistrationContext);

  const [avatarUrl, setAvatarUrl] = useState(
    'https://sun2-3.userapi.com/s/v1/if1/CAR1Aao3yIica7xq77xIIMMTn29CME-cE5JSJBc8OTNVt29JQjnhR0ZsX_9IO-AzgwVbfgB6.jpg?size=200x0&quality=96&crop=138,44,1048,1048&ava=1'
  );

  const inputFileRef = useRef<HTMLInputElement>(null);

  const handleChangeImage = (event: Event): void => {
    const file = (event.target as HTMLInputElement).files[0];
    if (file) {
      const imageUrl = URL.createObjectURL(file);
      setAvatarUrl(imageUrl);
    }
  };

  useEffect(() => {
    if (inputFileRef.current) {
      inputFileRef.current.addEventListener('change', handleChangeImage);
    }
  }, []);

  return (
    <div className={styles.block}>
      <StepInfo
        icon="/static/celebration.png"
        title="Okay, Archakov Dennis!"
        description="How’s this photo?"
      />
      <StepLayout className={clsx('m-auto mt-40', styles.whiteBlock)}>
        <div className={styles.avatar}>
          <Avatar width="120px" height="120px" src={avatarUrl} />
        </div>
        <div className="mb-30">
          <label htmlFor="image" className="link cup">
            Choose a different photo
          </label>
        </div>
        <input id="image" ref={inputFileRef} type="file" hidden />
        <Button onClick={onNextStep}>
          Next
          <img className="d-ib ml-10" src="/static/arrow.svg" alt="Next step" />
        </Button>
      </StepLayout>
    </div>
  );
};
