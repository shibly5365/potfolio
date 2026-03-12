/* eslint-disable react-refresh/only-export-components */
import React, { createContext, useContext, useState, useEffect, useCallback, useMemo } from "react";

const ThemeContext = createContext();

export const useTheme = () => useContext(ThemeContext);

export const ThemeProvider = ({ children }) => {
    const [theme, setTheme] = useState("dark");

    useEffect(() => {
        // Check for saved theme
        const savedTheme = localStorage.getItem("portfolio-theme");
        if (savedTheme) {
            setTheme(savedTheme);
        }
    }, []);

    const toggleTheme = useCallback(() => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);
        localStorage.setItem("portfolio-theme", newTheme);
    }, [theme]);

    const contextValue = useMemo(
        () => ({ theme, toggleTheme }),
        [theme, toggleTheme]
    );

    return (
        <ThemeContext.Provider value={contextValue}>
            <div className={theme === "dark" ? "dark" : ""}>
                {children}
            </div>
        </ThemeContext.Provider>
    );
};
