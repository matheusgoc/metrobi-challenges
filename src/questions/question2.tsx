import React, { FC, useEffect } from "react";
import { questionTwo } from "./questions";

const Question2: FC = () => {
  useEffect(() => {
    questionTwo(["a", "b", "c", "d"]);
  }, []);

  return (
    <div className="app-container">
      <p>
        2) Write an async javascript function that writes every item in any
        given array with 1, 2, 4, 8, etc., seconds apart.
      </p>
      <p>
        Example: for [“a”, “b”, “c”, “d”], “a” is printed 1 second after the
        code runs, “b” is printed 2 seconds after the code runs, “c” is printed
        4 seconds after the code runs, etc.
      </p>
      <div>
        Check it out at <strong>DevTools Console Log Output</strong>
      </div>
    </div>
  );
};

export default Question2;
