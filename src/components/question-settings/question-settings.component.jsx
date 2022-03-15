import { useState } from "react";

import "./question-settings.style.css";

import QuestionSelectItem from "../question-select-item/question-select-item.component";

const selectValues = [
    {
        name: "category",
        values: [
            "Any Category",
            9,
            10,
            11,
            12,
            13,
            14,
            15,
            16,
            17,
            18,
            19,
            20,
            21,
            22,
            23,
            24,
            25,
            26,
            27,
        ],
    },
    {
        name: "difficulty",
        values: ["Any Difficulty", "easy", "medium", "hard"],
    },
    {
        name: "type",
        values: ["Any Type", "multiple", "boolean"],
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
