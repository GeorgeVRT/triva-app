import { useState, useEffect } from "react";

import "./App.css";

import QuestionSettings from "./components/question-settings/question-settings.component";

const App = () => {
    const [category, setCategory] = useState("Any Category");
    const [difficulty, setDifficulty] = useState("Any Difficulty");
    const [type, setType] = useState("Any Type");

    useEffect(() => {
        console.log(category);
        console.log(difficulty);
        console.log(type);
    }, [category, difficulty, type]);

    const onSelect = (event) => {
        switch (event.target.name) {
            case "category":
                setCategory(event.target.value);
                break;
            case "difficulty":
                setDifficulty(event.target.value);
                break;
            case "type":
                setType(event.target.value);
                break;
        }
    };

    return (
        <div className="App">
            <QuestionSettings onSelect={onSelect} />
        </div>
    );
};

export default App;
