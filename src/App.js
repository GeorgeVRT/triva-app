import { useState, useEffect } from "react";

import "./App.css";

import QuestionSettings from "./components/question-settings/question-settings.component";
import QuestionList from "./components/question-list/question-list.component";

const App = () => {
    const [category, setCategory] = useState("Any Category");
    const [difficulty, setDifficulty] = useState("Any Difficulty");
    const [type, setType] = useState("Any Type");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [questions, setQuestions] = useState();

    useEffect(() => {
        fetch(`https://opentdb.com/api.php?amount=10`)
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((err) => {
                setError(err.message);
                setQuestions(null);
            })
            .finally(() => {
                setLoading(false);
            });
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

    console.log(questions);

    return (
        <div className="App">
            <QuestionSettings onSelect={onSelect} />
            {!loading && <QuestionList questionList={questions.results} />}
        </div>
    );
};

export default App;
