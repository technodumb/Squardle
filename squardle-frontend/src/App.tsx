import { useEffect, useState } from "react";
import "./App.scss";

function App() {
    const [attempt, setAttempt] = useState("");
    const [cellStatus, setCellStatus] = useState([0, 0, 0, 0, 0]);

    const status = ["notExist", "exist", "correct"];

    // call api request function
    const postData = async (
        url = "http://127.0.0.1:3000/attempt/1",
        data = { attemptString: attempt, attemptedBy: "1" }
    ) => {
        return fetch(url, {
            method: "POST",
            headers: {
                "Content-Type": "application/json",
            },
            body: JSON.stringify(data),
        });
    };

    useEffect(() => {
        const listener = async (e: KeyboardEvent) => {
            if (e.key.match(/[a-z]/i) && e.key.length === 1) {
                setAttempt((prev) => (prev.length < 5 ? [...prev, e.key.toUpperCase()].join("") : prev));
            }
            if (e.key === "Backspace") {
                setAttempt((prev) => prev.slice(0, -1));
            }
            if (e.key === "Enter" && attempt.length === 5) {
                const response = postData()
                    .then((res) => {
                        if (res.ok) {
                            return res.json();
                        }
                        throw new Error("Network response was not ok.");
                    })
                    .then((data) => {
                        console.log(data);
                        setCellStatus(data);
                    })
                    .catch((error) => {
                        console.error("There has been a problem with your fetch operation:", error);
                    });
                // setAttempt("");
            }
        };
        window.addEventListener("keydown", listener);
        return () => window.removeEventListener("keydown", listener);
    }, [attempt.length]);
    return (
        <main>
            <section>
                <h1>Attempts</h1>
                <div className="allAttempts">
                    <div className="attempt-box">
                        {[...Array(5)].map((_, i) => (
                            <div key={i} className={`attempt-letter ${status[cellStatus[i]]}`}>
                                {attempt[i] || ""}
                            </div>
                        ))}
                    </div>
                </div>
            </section>
        </main>
    );
}

export default App;
