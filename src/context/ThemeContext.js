// Process to creating a react context

// Create a context
// Take your provider and wrap around the component tree
// Pass the data
// Read the data you have passed.


import { createContext, useState } from 'react';
import PropTypes from 'prop-types';

// Create a Context
export const ThemeContext = createContext();

// Create a provider component
export const ThemeProvider = ({ children }) => {
  const [theme, setTheme] = useState('light');

  const toggleTheme = () => {
    setTheme((prevTheme) => (prevTheme === 'light' ? 'dark' : 'light'));
  };

  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  );
};

// Define prop types for ThemeProvider
ThemeProvider.propTypes = {
  children: PropTypes.node.isRequired,
};
