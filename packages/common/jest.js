jest.useFakeTimers();

jest.mock('@fontsource/bungee-shade', () => ({
  __esModule: true,
  default: 'bungee-shade',
}));

// React markdown preview mock.
jest.mock('@uiw/react-markdown-preview', () => ({
  __esModule: true,
  default: 'markdown-preview',
}));

/**
 * Mock helmet module
 */
jest.mock('react-helmet-async', () => ({
  Helmet: jest.fn(({ children }) => <div>{children}</div>),
  HelmetProvider: () => jest.fn(),
}));

jest.mock('react-router-dom', () => ({
  useLocation: jest.fn(() => ({
    pathname: '/about',
  })),
}));

window.matchMedia =
  window.matchMedia ||
  function () {
    return {
      matches: false,
      addListener: function () {},
      removeListener: function () {},
    };
  };
