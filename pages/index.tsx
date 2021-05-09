import { FC, useState, createContext } from 'react';

import {
  WelcomeStep,
  EnterNameStep,
  TwitterStep,
  ChooseAvatarStep,
  EnterPhoneStep,
  EnterCodeStep,
} from '../components/registration/steps';

const stepsList = {
  0: WelcomeStep,
  1: EnterNameStep,
  2: TwitterStep,
  3: ChooseAvatarStep,
  4: EnterPhoneStep,
  5: EnterCodeStep,
};

interface RegistrationContextProps {
  onNextStep: () => void;
  step: number;
}

export const RegistrationContext = createContext<RegistrationContextProps>(
  {} as RegistrationContextProps
);

const HomePage: FC = () => {
  const [step, setStep] = useState<number>(0);
  const Step = stepsList[step];

  const onNextStep = (): void => setStep((prev) => prev + 1);

  return (
    <RegistrationContext.Provider value={{ step, onNextStep }}>
      <Step />
    </RegistrationContext.Provider>
  );
};

export default HomePage;
