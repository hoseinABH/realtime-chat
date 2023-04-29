'use client';

import { FC, ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

interface Props {
  children: ReactNode;
}

const Providers: FC<Props> = (props) => {
  return (
    <>
      <Toaster />
      {props.children}
    </>
  );
};

export default Providers;
