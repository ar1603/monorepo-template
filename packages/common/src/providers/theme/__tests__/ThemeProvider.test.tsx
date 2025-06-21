import { render } from '@testing-library/react';
import ThemeProvider from '../ThemeProvider';
import { theme } from '../../../components';

describe('ThemeProvider', () => {
  it('should render ThemeProvider', () => {
    const { container } = render(
      <ThemeProvider theme={theme}>
        <div>Test</div>
      </ThemeProvider>,
    );

    expect(container).toMatchSnapshot();
  });
});
