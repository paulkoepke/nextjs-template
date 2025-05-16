'use client';
import React, { JSX, ReactNode } from 'react';

type Props = {
  children: ReactNode;
};
export const Providers = ({ children }: Props): JSX.Element => {
  return (
    <>
        {children}
    </>
  );
};
