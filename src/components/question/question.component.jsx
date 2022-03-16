import "./question.style.css";

const Question = ({ question, answers, category }) => {
    console.log("QUESTION : ", atob(question));
    answers.map((answer) => console.log(atob(answer)));
    return (
        <div className="question-card">
            <h2 className="question-category">{atob(category)}</h2>
            <h3 className="question-text">{atob(question)}</h3>
            <div className="answer-list">
                {answers.map((answer) => (
                    <p key={atob(answer)} className="question-answer">
                        {atob(answer)}
                    </p>
                ))}
            </div>
        </div>
    );
};

export default Question;
