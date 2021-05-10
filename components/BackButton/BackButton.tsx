import { FC } from 'react';
import Link from 'next/link';

interface BackButtonProps {
  title: string;
  href: string;
}

export const BackButton: FC<BackButtonProps> = ({ title, href }) => {
  return (
    <Link href={href}>
      <a>
        <div className="d-flex cup">
          <img src="/static/back-arrow.svg" alt="Back" className="mr-10" />
          <h3>{title}</h3>
        </div>
      </a>
    </Link>
  );
};
