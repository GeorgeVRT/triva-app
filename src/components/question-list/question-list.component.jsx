import { useState } from "react";

import "./question-list.style.css";

import Question from "../question/question.component";

const QuestionList = ({ questionList }) => {
    const userAnswers = Array(questionList.length);
    const rightAnswers = [];
    questionList.map((questionItem) =>
        rightAnswers.push(questionItem.correct_answer)
    );
    const answered = (event) => {
        userAnswers[event.target.id] = btoa(event.target.value);
    };
    const checkAnswers = (ansArr) => {
        const commonAnswers = userAnswers.filter((value) =>
            rightAnswers.includes(value)
        );
        console.log("you got", commonAnswers.length, "/", questionList.length);
    };
    return (
        <div className="question-list">
            {questionList.map((questionItem, index) => (
                <Question
                    key={index}
                    id={index}
                    question={questionItem.question}
                    category={questionItem.category}
                    answers={questionItem.incorrect_answers.concat([
                        questionItem.correct_answer,
                    ])}
                    answered={answered}
                />
            ))}
            <button onClick={checkAnswers} className="send-answer">
                answer
            </button>
        </div>
    );
};
export default QuestionList;
