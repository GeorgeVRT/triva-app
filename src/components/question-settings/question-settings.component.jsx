import { useState } from "react";

import "./question-settings.style.css";

import QuestionSelectItem from "../question-select-item/question-select-item.component";

const QuestionSettings = ({ onSelect }) => {
    // {"Any Category", "General Knowledge"},
    // {"Any Difficulty", "Easy", "Medium", "Hard"},
    // {"Any Type", "Multiple Choices", "True False"},

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

    // selectValues.map((selectValue) => {
    //     console.log(selectValue);
    // });

    return (
        <div className="question-settings-container">
            <label htmlFor="category">amount</label>
            <input type="number" />
            <QuestionSelectItem
                key={selectValues[1].name}
                onSelect={onSelect}
                name={selectValues[1].name}
                values={selectValues[1].values}
            />
            {selectValues.map((selectValue) => {
                <QuestionSelectItem
                    key={selectValue.name}
                    onSelect={onSelect}
                    name={selectValue.name}
                    values={selectValue.values}
                />;
            })}
            {/* <select name="category" onChange={onSelect}>
                {categories.map((category) => (
                    <option key={category} value={`${category}`}>
                        {category}
                    </option>
                ))}
            </select>
            <label htmlFor="category">difficulty</label>
            <select name="difficulty">
                {difficulties.map((difficulty) => (
                    <option key={difficulty} value={`${difficulty}`}>
                        {difficulty}
                    </option>
                ))}
            </select>
            <label htmlFor="category">type</label>
            <select name="type">
                {types.map((type) => (
                    <option key={type} value={`${type}`}>
                        {type}
                    </option>
                ))}
            </select> */}
        </div>
    );
};

export default QuestionSettings;
