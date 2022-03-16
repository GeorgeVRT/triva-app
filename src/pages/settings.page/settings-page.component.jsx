import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

import "./settings-page.style.css";

import QuestionSettings from "../../components/question-settings/question-settings.component";
// import QuestionList from "../../components/question-list/question-list.component";

const SettingsPage = () => {
    const [amount, setAmount] = useState(10);
    const [category, setCategory] = useState("Any Category");
    const [difficulty, setDifficulty] = useState("Any Difficulty");
    const [type, setType] = useState("Any Type");

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const [questions, setQuestions] = useState();

    const onSelect = (event) => {
        console.log(event.target.value);
        switch (event.target.name) {
            case "amount":
                setAmount(event.target.value);
                break;
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

    // console.log(questions);

    return (
        <div className="App">
            <QuestionSettings onSelect={onSelect} />
            {/* {!loading && <QuestionList questionList={questions.results} />} */}
            <Link to={`/questions/${amount}/${category}/${difficulty}/${type}`}>
                <h1 className="start-button">Start Trivia</h1>
            </Link>
        </div>
    );
};

export default SettingsPage;
