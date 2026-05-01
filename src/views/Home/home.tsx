import { useState } from "react";
import "./home.css";

function Home() {
  // const [count, setCount] = useState(0)
  const [message, setMessage] = useState({});

  async function callHelloApi() {
    try {
      const response = await fetch("http://localhost:3000/api/hello");
      if (!response.ok) {
        throw new Error(`HTTP error: ${response.status}`);
      }
      const data = await response.json();
      setMessage(data);
      console.log(data);
    } catch (error) {
      console.error("Error fetching hello API:", error);
    }
  }

  return (
    <div>
      <h1>Home</h1>
      <button onClick={() => callHelloApi()}>Call Hello API</button>
      <div>{message.message}</div>
    </div>
  );
}

export default Home;
