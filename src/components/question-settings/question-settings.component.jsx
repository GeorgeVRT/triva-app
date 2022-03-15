import { useState } from "react";

import "./question-settings.style.css";

import QuestionSelectItem from "../question-select-item/question-select-item.component";

const selectValues = [
    { name: "category", values: ["Any Category", "General Knowledge"] },
    {
        name: "difficulty",
        values: ["Any Difficulty", "Easy", "Medium", "Hard"],
    },
    {
        name: "type",
        values: ["Any Type", "Multiple Choices", "True False"],
    },
];

const QuestionSettings = ({ onSelect }) => {
    return (
        <div className="question-settings-container">
            <label htmlFor="category">amount</label>
            <input type="number" defaultValue={10} />
            {selectValues.map(({ name, values }) => (
                <QuestionSelectItem
                    key={name}
                    onSelect={onSelect}
                    name={name}
                    values={values}
                />
            ))}
        </div>
    );
};

export default QuestionSettings;
