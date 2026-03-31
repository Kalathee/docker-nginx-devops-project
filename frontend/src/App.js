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
            <h1>Frontend Running ✅
                thank you
            </h1>
        </div>
    );
}

export default App;
