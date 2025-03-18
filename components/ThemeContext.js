import React, { createContext, useState, useContext } from 'react';

// This component is needed for the dark mode toggle
// The useTheme lets the rest of the code files know if dark mode is on or not

const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [isDarkMode, setIsDarkMode] = useState(false);

    const toggleDarkMode = () => {
        setIsDarkMode(prev => !prev);
    };

    return (
        <ThemeContext.Provider value={{ isDarkMode, toggleDarkMode }}>
            {children}
        </ThemeContext.Provider>
    );
};

export const useTheme = () => useContext(ThemeContext);
// Make sure to import useTheme on every component, and add extra styling options (like darkContainer, darkText, etc)