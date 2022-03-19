import "./theme-switcher.style.css";

import { useState } from "react";

const ThemeSwitcher = (onChange) => {
    const [theme, setTheme] = useState(0);

    const handleThemeChange = () => {
        console.log(theme);
        if (theme < 2) {
            setTheme(theme + 1);
        } else {
            setTheme(0);
        }
    };

    return (
        <div className="switch" onClick={handleThemeChange}>
            <div className={`slider slider-state-${theme}`}></div>
        </div>
    );
};

export default ThemeSwitcher;
