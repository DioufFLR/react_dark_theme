import {Level1} from "./components/Level1";
import {useContext, useState} from "react";
import {ThemeModeContext, THEME} from "./contexts/ThemeModeContext";

export function App() {

    const initialThemeMode = useContext(ThemeModeContext)
    const [themeMode, setThemeMode] = useState(initialThemeMode)

    return (
        <ThemeModeContext.Provider value={ {themeMode, setThemeMode} }>
            <div
                style={ {
                    color: THEME[themeMode].textColor,
                    backgroundColor: THEME[themeMode].backgroundColor,
                    height: '100vh'
                } }>
                <Level1/>
            </div>
        </ThemeModeContext.Provider>

    );
}
