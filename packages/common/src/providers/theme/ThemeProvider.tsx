import { ChakraProvider, ThemeProviderProps } from '@chakra-ui/react';
import { theme } from '../../components';

const ThemeProvider = ({ children }: ThemeProviderProps) => {
  return <ChakraProvider theme={theme}>{children}</ChakraProvider>;
};

export default ThemeProvider;
