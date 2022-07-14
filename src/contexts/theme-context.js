import { createContext, useState } from "react";

export const themes = {
    light: {
        background: '#ffffff',
        container: '#E3350D'
    },
    dark: {
        background: '#E3350D',
        container: '#ffffff60'
    }
}

export const ThemeContext = createContext({});

export const ThemeProvider = (props) => {
    const [ theme, setTheme ] = useState(themes.light);   

    return (
        <ThemeContext.Provider value={{theme, setTheme}}>
            {props.children}
        </ThemeContext.Provider>
    )
}