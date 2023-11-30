import { useEffect, useState } from "react";
import reactLogo from "./assets/react.svg";
import viteLogo from "/vite.svg";
import "./App.css";

function App() {
  const [count, setCount] = useState(0);
  const [books, setBooks] = useState(0);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch("http://localhost:8080/api/items");
        if (!response.ok) {
          throw new Error("ayaaaaa no good");
        }
        const data = await response.json();
        setBooks(data.numBooks);
      } catch (error) {
        console.log(error);
      }
    };

    fetchData();
  }, []);

  const buttonHandler = async () => {
    try {
      const response = await fetch("http://localhost:8080/api/items", {
        method: "POST",
      });
      if (!response.ok) throw new Error("post bad");

      setBooks((prev) => {
        return prev + 1;
      });
    } catch (error) {
      console.log(error);
    }
  };

  return (
    <>
      <div>
        <a href="https://vitejs.dev" target="_blank">
          <img src={viteLogo} className="logo" alt="Vite logo" />
        </a>
        <a href="https://react.dev" target="_blank">
          <img src={reactLogo} className="logo react" alt="React logo" />
        </a>
      </div>
      <h1>Vite + React</h1>
      <div className="card">
        <button onClick={() => setCount((count) => count + 1)}>
          count is {count}
          books is {books}
        </button>
        <button
          onClick={() => {
            buttonHandler();
          }}
        >
          {" "}
          Add Books{" "}
        </button>
        <p>
          Edit <code>src/App.tsx</code> and save to test HMR
        </p>
      </div>
      <p className="read-the-docs">
        Click on the Vite and React logos to learn more
      </p>
    </>
  );
}

export default App;
