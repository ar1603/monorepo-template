import { ChakraProvider } from '@chakra-ui/react';
import { theme } from '@template/common';
import { ThemeProviderProps } from './types';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
