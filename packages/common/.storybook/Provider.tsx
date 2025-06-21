import React from 'react';
import { theme, ThemeProvider } from '../src';
import { Box } from '@chakra-ui/react';
import { HelmetProvider } from 'react-helmet-async';

const Provider = ({ children }) => {
  return (
    <ThemeProvider theme={theme}>
      <HelmetProvider>
        <Box display={'flex'} justifyContent={'center'} alignItems={'center'} height={'10vh'}>
          {/* <ThemeIcon size={'md'} /> */}
        </Box>
        <Box
          overflow={'auto'}
          display={'flex'}
          justifyContent={'center'}
          width={'100vw'}
          alignItems={'center'}
        >
          {children}
        </Box>
      </HelmetProvider>
    </ThemeProvider>
  );
};

export default Provider;
