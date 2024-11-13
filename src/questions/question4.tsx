import React, { FC } from "react";
import { questionFour } from "./questions";

const Question4: FC = () => {
  return (
    <div className="app-container">
      <p>
        4) Write an efficient method that tells us whether or not an input
        string brackets ("{", "}", "(", ")", "[", "]") opened and closed
        properly.
      </p>
      <p>Example: {"“{[]}” => true, “{(])}” => false, “{([)]}” => false"}</p>
      <p>{`{[]} => ${questionFour("{[]}")}`}</p>
      <p>{`{(])} => ${questionFour("{(])}")}`}</p>
      <p>{`{([)]} => ${questionFour("{([)]}")}`}</p>
    </div>
  );
};

export default Question4;
