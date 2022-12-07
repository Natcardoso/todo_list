import React from "react";
import { TodoApp } from "./components/TodoApp";
import { GlobalStyle } from "./globalStyles";

function App() {
    return (
        <div className="App">
            <TodoApp />
            <GlobalStyle />
        </div>
    );
}

export default App;
