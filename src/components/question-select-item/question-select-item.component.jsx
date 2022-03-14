const QuestionSelectItem = ({ values, name, onSelect }) => {
    return (
        <>
            <label htmlFor={`${name}`}>{name}</label>
            <select name={`${name}`} onChange={onSelect}>
                {values.map((value) => (
                    <option key={value} value={`${value}`}>
                        {value}
                    </option>
                ))}
            </select>
        </>
    );
};

export default QuestionSelectItem;
