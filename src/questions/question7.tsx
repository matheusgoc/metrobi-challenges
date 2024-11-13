import React, { FC } from "react";
import { questionSeven } from "./questions";

const Question7: FC = () => {
  return (
    <div className="app-container">
      <p>
        7) Think that you have an unlimited number of carrots, but a limited
        number of carrot types. Also, you have one bag that can hold a limited
        weight. Each type of carrot has a weight and a price. Write a function
        that takes carrotTypes and capacity and return the maximum value the bag
        can hold.
      </p>
      <p>
        Example: carrotTypes
        {" = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]"}
        <br />
        capacity = 36 //kg
        <br />
        getMaxValue(carrotTypes, capacity)
      </p>
      <div>
        <strong>Answer:</strong>{" "}
        {questionSeven(
          [
            { kg: 5, price: 100 },
            { kg: 7, price: 150 },
            { kg: 3, price: 70 },
          ],
          36
        )}
      </div>
      <p>
        Example 2: carrotTypes
        {
          " = [{kg: 1200, price: 89}, {kg: 230, price: 234}, {kg: 9223, price: 20}]"
        }
        <br />
        capacity = 3200 //kg
        <br />
        getMaxValue(carrotTypes, capacity)
      </p>
      <div>
        <strong>Answer:</strong>{" "}
        {questionSeven(
          [
            { kg: 1200, price: 89 },
            { kg: 230, price: 234 },
            { kg: 9223, price: 20 },
          ],
          3200
        )}
      </div>
    </div>
  );
};

export default Question7;
