import { useState, useEffect } from "react";

import "./question-settings.style.css";

import QuestionSelectItem from "../question-select-item/question-select-item.component";

const selectValues = [
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
    const [loading, setLoading] = useState(true);
    const [categories, setCategories] = useState();

    useEffect(() => {
        fetch(`https://opentdb.com/api_category.php`)
            .then((response) => response.json())
            .then((data) => setCategories(data.trivia_categories))
            .finally(setLoading(false));
    }, []);

    let categoriesNames = [];
    let categoriesIds = [];

    try {
        categoriesNames = categories.map(({ name }) => name);
        categoriesIds = categories.map(({ id }) => id);
    } catch {
        console.log(0);
    }

    return (
        <div className="question-settings-container">
            <label className="question-attribute-name" htmlFor="category">
                amount
            </label>
            <input
                className="question-attribute-select"
                type="number"
                onChange={onSelect}
                name="amount"
                defaultValue={10}
            />
            {!loading && (
                <QuestionSelectItem
                    key={"category"}
                    onSelect={onSelect}
                    name={"category"}
                    values={categoriesNames}
                    ids={categoriesIds}
                />
            )}
            {selectValues.map(({ name, values }) => (
                <QuestionSelectItem
                    key={name}
                    onSelect={onSelect}
                    name={name}
                    values={values}
                    ids={values}
                />
            ))}
        </div>
    );
};

export default QuestionSettings;
