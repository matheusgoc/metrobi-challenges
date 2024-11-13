import React, { FC } from "react";
import { questionOne } from "./questions";

const Question1: FC = () => {
  return (
    <div className="app-container">
      <p>
        1) Write a javascript function that finds the duplicate items in any
        given array.
      </p>
      <div>
        [1, 2, 3, 4, 5, 2, 3, 6]{" => "}
        {JSON.stringify(questionOne([1, 2, 3, 4, 5, 2, 3, 6]))}.
      </div>
      <div>
        {"[{ id: 1 }, { id: 2 }, { id: 1 }] => "}
        {JSON.stringify(questionOne([{ id: 1 }, { id: 2 }, { id: 1 }]))}.
      </div>
    </div>
  );
};

export default Question1;
