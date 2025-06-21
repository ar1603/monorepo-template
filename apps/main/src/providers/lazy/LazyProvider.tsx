import * as React from 'react';
import { LazyProviderProps } from './types';
import { LoadingComponent } from '@template/common';

const LazyProvider = ({ children }: LazyProviderProps) => {
  return (
    <React.Suspense fallback={<LoadingComponent />}>{children}</React.Suspense>
  );
};

export default LazyProvider;
