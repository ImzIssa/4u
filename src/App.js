import React, { useState, useEffect } from "react";
import poems from "./data";
import Poem from "./Poem";

function App() {
  const [timeLeft, setTimeLeft] = useState(() => 45);
  const [index, setIndex] = useState(() => {
    return Math.floor(Math.random() * poems.length);
  });
  // const { title, author, body, image } = poems[index];

  useEffect(() => {
    const interval = setInterval(() => {
      setTimeLeft((time) => time - 1);
      // } else {
      //   clearInterval(interval);
      //   setTenzies(true);
      // }
    }, 1000);
    return () => clearInterval(interval);
  }, [timeLeft]);

  useEffect(() => {
    let slider = setInterval(() => {
      setIndex((oldIndex) => {
        let index = oldIndex + 1;
        if (index > poems.length - 1) {
          index = 0;
        }
        return index;
      });
      setTimeLeft(45);
    }, 45_000);
    return () => {
      clearInterval(slider);
    };
  }, [index]);

  return (
    <main>
      <section className="container">
        <div className="title">
          <div className="title-info">
            <h2>4YEO 🌹</h2>
            <span>{timeLeft}</span>
          </div>
          <div className="underline"></div>
        </div>
        <Poem {...poems[index]} />
      </section>
    </main>
  );
}

export default App;
