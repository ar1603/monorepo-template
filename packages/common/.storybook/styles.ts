const providerStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'flex-start',
  alignItems: 'center',
  height: '50vh',
  gap: '10px',
  width: '85vw',
};

const innerProviderStyle = {
  display: 'flex',
  flexDirection: 'column',
  justifyContent: 'center',
  alignItems: 'center',
  height: '100%',
  width: '100%',
  border: '1px solid #000',
};

const lightThemeButton = {
  color: '#0f0f0f',
  border: '1px solid #000',
  backgroundColor: '#FFF',
  padding: '4px 8px',
  borderRadius: '4px',
};

const darkThemeButton = {
  color: '#f9f9f9',
  border: '1px solid #000',
  backgroundColor: '#000',
  padding: '4px 8px',
  borderRadius: '4px',
};

export { innerProviderStyle, providerStyle, lightThemeButton, darkThemeButton };
