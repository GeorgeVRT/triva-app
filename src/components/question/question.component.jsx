import "./question.style.css";

import { useState } from "react";

//fix answers, last one is true

const Question = ({
    question,
    id,
    playing,
    answers,
    rightAnswer,
    category,
    answered,
}) => {
    const [userSelected, setUserSelected] = useState();
    console.log(playing);
    let previousSelected;
    const selected = (event, index) => {
        if (previousSelected)
            previousSelected.classList.remove("selected-answer");
        previousSelected = event.target;
        event.target.classList.add("selected-answer");
        setUserSelected(index);
    };
    return (
        <div className="question-card">
            <h2 className="question-category">{atob(category)}</h2>
            <h3 className="question-text">{atob(question)}</h3>
            <div className="answer-list">
                {answers.sort().map((answer, index) => (
                    <button
                        key={atob(answer)}
                        onClick={(event) => {
                            if (playing) {
                                answered(event);
                                selected(event, index);
                            }
                        }}
                        className={`question-answer ${
                            userSelected === index ? "selected-answer " : ""
                        }${
                            playing
                                ? ""
                                : `question-answer ${
                                      atob(answer) === atob(rightAnswer)
                                          ? "right-answer"
                                          : "wrong-answer"
                                  }`
                        }`}
                        value={atob(answer)}
                        id={id}
                    >
                        {atob(answer)}
                    </button>
                ))}
            </div>
        </div>
    );
};

export default Question;
