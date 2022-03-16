import "./question-list.style.css";

import Question from "../question/question.component";

const QuestionList = ({ questionList }) => {
    // questionList.map((questionItem) => console.log(questionItem.question));
    return (
        <div className="question-list">
            {questionList.map((questionItem) => (
                <Question
                    key={questionItem.question}
                    question={questionItem.question}
                    category={questionItem.category}
                    answers={questionItem.incorrect_answers.concat([
                        questionItem.correct_answer,
                    ])}
                />
            ))}
        </div>
    );
};
export default QuestionList;
