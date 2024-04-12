import React, { useContext, useState } from "react";

const ThemeContext = React.createContext(true);

export const useTheme = () => useContext(ThemeContext);

function ThemeProvider({ children }) {
    const [isDarkTheme, setIsDarkTheme] = useState(false);

    const toggleDarkTheme = () =>
        setIsDarkTheme((currentTheme) => !currentTheme);

    return (
        <ThemeContext.Provider value={{ isDarkTheme, toggleDarkTheme }}>
            {children}
        </ThemeContext.Provider>
    );
}
export default ThemeProvider;
