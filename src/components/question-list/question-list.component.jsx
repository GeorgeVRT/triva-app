import { useState } from "react";
import { useNavigate } from "react-router-dom";

import "./question-list.style.css";

import Question from "../question/question.component";

const QuestionList = ({ questionList }) => {
    const navigate = useNavigate();
    const userAnswers = Array(questionList.length);
    const rightAnswers = [];

    const [playing, setPlaying] = useState(true);

    questionList.map((questionItem) =>
        rightAnswers.push(questionItem.correct_answer)
    );
    const answered = (event) => {
        userAnswers[event.target.id] = btoa(event.target.value);
        event.target.color = "red";
    };
    const checkAnswers = (ansArr) => {
        const commonAnswers = userAnswers.filter((value) =>
            rightAnswers.includes(value)
        );
        if (!playing) {
            alert(`you got ${commonAnswers.length} / ${questionList.length}`);
            navigate("/");
            setPlaying(true);
        } else {
            console.log(rightAnswers);
            setPlaying(false);
        }
    };
    return (
        <div className="question-list">
            {questionList.map((questionItem, index) => (
                <Question
                    key={index}
                    id={index}
                    playing={playing}
                    rightAnswer={rightAnswers[index]}
                    question={questionItem.question}
                    category={questionItem.category}
                    answers={questionItem.incorrect_answers.concat([
                        questionItem.correct_answer,
                    ])}
                    answered={answered}
                />
            ))}
            <button onClick={checkAnswers} className="send-answer">
                {playing ? "answer" : "continue"}
            </button>
        </div>
    );
};
export default QuestionList;
