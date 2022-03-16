import { useState, useEffect } from "react";
import { Route, Routes } from "react-router-dom";

import "./App.css";

import SettingsPage from "./pages/settings.page/settings-page.component";
import QuestionsPage from "./pages/questions.page/questions-page.component";

const App = () => {
    return (
        <Routes>
            <Route path="/" element={<SettingsPage />} />
            <Route
                path="/questions/:amount/:category/:difficulty/:type"
                element={<QuestionsPage />}
            />
        </Routes>
    );
};

export default App;
