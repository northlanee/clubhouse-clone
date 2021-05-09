import { FC } from 'react';
import clsx from 'clsx';

import styles from './StepLayout.module.scss';

interface StepLayoutProps {
  className?: string;
}

export const StepLayout: FC<StepLayoutProps> = ({ children, className }) => {
  return <div className={clsx(styles.block, className)}>{children}</div>;
};
