import logo from "./logo.svg";
import "./App.css";

import QuestionSettings from "./components/question-settings/question-settings.component";

const App = () => {
    const onSelect = (event) => {
        console.log(event);
    };

    return (
        <div className="App">
            <QuestionSettings onSelect={onSelect} />
        </div>
    );
};

export default App;
