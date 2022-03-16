import "./question.style.css";

const Question = ({ question, answers, category }) => {
    return (
        <div className="question-card">
            <h2 className="question-category">{category}</h2>
            <h3 className="question-text">{question}</h3>
            <div className="answer-list">
                {answers.map((answer) => (
                    <q key={answer} className="question-answer">
                        {answer}
                    </q>
                ))}
            </div>
        </div>
    );
};

export default Question;
