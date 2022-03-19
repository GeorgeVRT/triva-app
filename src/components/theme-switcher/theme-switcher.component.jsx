import "./theme-switcher.style.css";

import { useState } from "react";

const ThemeSwitcher = (onChange) => {
    const [theme, setTheme] = useState(0);

    const [colors, setColors] = useState([
        {
            shadow: "#f5a52b",
            text: "#343536",
            secondText: "#bcbfc2",
            things: "white",
            background: "#eaece5",
        },
        {
            shadow: "#5D83E6",
            text: "#1D2947",
            secondText: "#2B2B45",
            things: "#C2D1FF",
            background: "#BCC2E3",
        },
        {
            shadow: "#43464A",
            text: "#27292B",
            secondText: "#6F747A",
            things: "#D3DCE8",
            background: "#6F747A",
        },
    ]);

    const changeTheme = () => {
        console.log(colors[theme]); //change values from root somewhere here
        document.documentElement.style.setProperty(
            "--shadow-color",
            colors[theme].shadow
        );
        document.documentElement.style.setProperty(
            "--text-color",
            colors[theme].text
        );
        document.documentElement.style.setProperty(
            "--second-text-color",
            colors[theme].secondText
        );
        document.documentElement.style.setProperty(
            "--things-color",
            colors[theme].things
        );
        document.documentElement.style.setProperty(
            "--background-color",
            colors[theme].background
        );
    };

    const handleThemeChange = () => {
        changeTheme();
        if (theme < 2) {
            setTheme(theme + 1);
        } else {
            setTheme(0);
        }
    };

    changeTheme();

    return (
        <div className="switch" onClick={handleThemeChange}>
            <div className={`slider slider-state-${theme}`}></div>
        </div>
    );
};

export default ThemeSwitcher;
