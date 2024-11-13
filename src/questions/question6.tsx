import React, { useState, useEffect } from "react";

const Question6: React.FC = () => {
  const [achillesPosition, setAchillesPosition] = useState(0);
  const [tortoisePosition, setTortoisePosition] = useState(50);
  const [isRunning, setIsRunning] = useState(false);

  useEffect(() => {
    if (!isRunning) return;

    const interval = setInterval(() => {
      setAchillesPosition((prev) => prev + (tortoisePosition - prev) / 2);
      setTortoisePosition((prev) => Math.min(prev + (100 - prev) / 10, 100));
    }, 500);

    return () => clearInterval(interval);
  }, [isRunning, tortoisePosition]);

  useEffect(() => {
    if (tortoisePosition >= 90) {
      setIsRunning(false);
      setAchillesPosition(0);
      setTortoisePosition(50);
    }
  }, [tortoisePosition]);

  return (
    <div className="app-container">
      <p>
        6) Write the code that animates “Zeno's Paradox of Achilles and the
        Tortoise” on an interface(we would like to see the paradox
        demonstrated).
      </p>
      <div style={{ width: "100%", textAlign: "center", margin: "10px" }}>
        <button
          onClick={() => setIsRunning(true)}
          disabled={isRunning}
          style={{ fontSize: "1.3rem" }}
        >
          {isRunning ? "Running..." : "Start"}
        </button>
      </div>
      <div
        style={{
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          gap: "20px",
        }}
      >
        <div
          style={{
            position: "relative",
            height: "30px",
            width: "100%",
            border: "1px solid black",
          }}
        >
          <div
            style={{
              position: "absolute",
              left: `${achillesPosition}%`,
              transition: "left 0.5s",
            }}
          >
            🏃‍♂️ Achilles
          </div>
          <div
            style={{
              position: "absolute",
              left: `${tortoisePosition}%`,
              transition: "left 0.5s",
            }}
          >
            🐢 Tortoise
          </div>
        </div>
      </div>
    </div>
  );
};

export default Question6;
