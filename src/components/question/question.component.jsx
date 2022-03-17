import "./question.style.css";

//fix answers, last one is true

const Question = ({ question, id, answers, category, answered }) => {
    // console.log("QUESTION : ", atob(question));
    // answers.map((answer) => console.log(atob(answer)));
    return (
        <div className="question-card">
            <h2 className="question-category">{atob(category)}</h2>
            <h3 className="question-text">{atob(question)}</h3>
            <div className="answer-list">
                {answers.sort().map((answer) => (
                    <button
                        key={atob(answer)}
                        onClick={answered}
                        className="question-answer"
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
