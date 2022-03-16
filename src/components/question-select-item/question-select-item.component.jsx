const QuestionSelectItem = ({ name, values, onSelect, ids }) => {
    // console.log("IDS: ", ids);
    // values.map((value, index) => console.log(value, index));
    return (
        <>
            <label htmlFor={`${name}`}>{name}</label>
            <select name={`${name}`} onChange={onSelect}>
                {values.map((value, index) => (
                    <option key={ids[index]} value={`${ids[index]}`}>
                        {value}
                    </option>
                ))}
            </select>
        </>
    );
};
export default QuestionSelectItem;
