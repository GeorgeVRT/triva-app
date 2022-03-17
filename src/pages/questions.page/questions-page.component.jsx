import { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

import QuestionList from "../../components/question-list/question-list.component";

const QuestionsPage = () => {
    const [questions, setQuestions] = useState();

    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(false);

    const { amount, category, difficulty, type } = useParams();

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
