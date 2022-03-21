import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import QuestionList from "../../components/question-list/question-list.component";

const QuestionsPage = () => {
    const [questions, setQuestions] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { amount, category, difficulty, type } = useParams();

    let savedTheme = JSON.parse(localStorage.getItem("theme"));
    if (savedTheme === null) savedTheme = 0;

    const [theme, setTheme] = useState(savedTheme);

    console.log("theme : ", theme);

    const colors = [
        {
            shadow: "#f5a52b",
            text: "#343536",
            secondText: "#bcbfc2",
            things: "white",
            background: "#eaece5",
            selected: "#343536",
        },
        {
            shadow: "#5D83E6",
            text: "#1D2947",
            secondText: "#2B2B45",
            things: "#C2D1FF",
            background: "#BCC2E3",
            selected: "#343536",
        },
        {
            shadow: "#43464A",
            text: "#27292B",
            secondText: "#F3FFF6",
            things: "#D3DCE8",
            background: "#6F747A",
            selected: "#D3DCE8",
        },
    ];

    const changeTheme = () => {
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
        document.documentElement.style.setProperty(
            "--selected-text-color",
            colors[theme].selected
        );
    };

    changeTheme();

    useEffect(() => {
        fetch(
            `https://opentdb.com/api.php?${"amount=" + amount}&${
                category === "Any Category" ? "" : "category=" + category
            }&${
                difficulty === "Any Difficulty"
                    ? ""
                    : "difficulty=" + difficulty
            }&${type === "Any Type" ? "" : "type=" + type}&encode=base64`
        )
            .then((response) => response.json())
            .then((data) => setQuestions(data))
            .catch((err) => {
                setError(err.message);
                setQuestions(null);
            })
            .finally(() => {
                setLoading(false);
            });
    }, [amount, category, difficulty, type]);

    return <>{!loading && <QuestionList questionList={questions.results} />}</>;
};

export default QuestionsPage;
