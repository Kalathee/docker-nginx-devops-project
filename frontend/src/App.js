import { useEffect } from "react";
import './App.css';

function App() {

    useEffect(() => {
        fetch("/api")
            .then(res => res.text())
            .then(data => console.log(data));
    }, []);

    return (
        <div className="App">
            <h1>Frontend Running ✅</h1>
        </div>
    );
}

export default App;