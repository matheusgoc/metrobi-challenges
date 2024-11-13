import React, { FC } from "react";
import { questionFive } from "./questions";

const Question5: FC = () => {
  return (
    <div className="app-container">
      <p>
        5) A building has 100 floors. One of the floors is the highest floor an
        egg can be dropped from without breaking. If an egg is dropped from
        above that floor, it will break. If it is dropped from that floor or
        below, it will be completely undamaged and you can drop the egg again.
        Given two eggs, find the highest floor an egg can be dropped from
        without breaking, with as few drops as possible in the worst-case
        scenario.
      </p>
      <div>
        <strong>Answer:</strong> Minimum drops required for 100 floors are{" "}
        {questionFive(100)}.
      </div>
    </div>
  );
};

export default Question5;
