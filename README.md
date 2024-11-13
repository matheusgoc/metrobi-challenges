# Metrobi Challenge Questions

This repo provides the answers for the technical questions requested by [Metrobi](https://metrobi.com) in the interview process.

## Directions

This is a TypeScript React application. Feel free to check the Metrobi question results by running it locally. The questions code are also available through [codesanbox.io](codesanbox.io) for convenience as shared in the [questions resolution section](#questions-resolution) below.

### Commands

```bash
# install
$ bun install

# run
$ bun start

# test
$ bun run test
```

### Questions Code Structure

- [`src` / `questions` / `questions.ts`](src/questions/questions.ts)
  functions code for each question except queston 3 and 6

- [`src` / `questions` / `questions.test.ts`](src/questions/questions.test.ts)
  unit tests form some questions

- [`src` / `questions` / `question3.tsx`](src/questions/question3.tsx)
  React component for question 3

- [`src` / `questions` / `question3.css`](src/questions/question3.css)
  CSS for question 3

- [`src` / `questions` / `question6.tsx`](src/questions/question6.tsx)
  React component for question 6

- [`src` / `questions` / `question{question number}.tsx`](src/questions)
  React component for demo each question

## Questions Resolution

### Question 1

Write a javascript function that finds the duplicate items in any given array.

**Sandbox**: https://codesandbox.io/p/sandbox/metrobi-question-one-9t452g

```typescript
export const questionOne = (arr: any[]): any[] => {
  const duplicates: any[] = [];
  const itemCheck: Record<string, boolean> = {};

  for (const item of arr) {
    const key = JSON.stringify(item);
    if (itemCheck[key]) {
      duplicates.push(item);
    } else {
      itemCheck[key] = true;
    }
  }

  return duplicates;
};

console.log(questionOne([1, 2, 3, 4, 5, 2, 3, 6])); // [2, 3]
console.log(questionOne([{ id: 1 }, { id: 2 }, { id: 1 }])); // [{ id: 1 }]
```

### Question 2

Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, etc., seconds apart.

**Sandbox**: https://codesandbox.io/p/sandbox/metrobi-question-two-gkt9n9

```typescript
const questionTwo = async (arr: string[]): Promise<void> => {
  for (let i = 0; i < arr.length; i++) {
    await new Promise<void>((resolve) =>
      setTimeout(() => {
        console.log(arr[i]);
        resolve();
      }, Math.pow(2, i) * 1000)
    );
  }
};

questionTwo(["a", "b", "c", "d"]);
```

## Question 3

Write the necessary React code for generating the below figure (using flex).

**Sandbox:** https://codesandbox.io/p/sandbox/metrobi-question-three-kf86hf

![Screenshot 2024-11-12 at 10 44 35 PM](https://github.com/user-attachments/assets/e31c7b20-750d-43d7-be50-9558355affdb)

```typescript
import { FC } from "react";
import "./question3.css";

const Question3: FC = () => {
  return (
    <div className="app-container">
      <p>
        3) Write the necessary React code for generating the below figure (using
        flex).
      </p>
      <main>
        <header>Header</header>
        <div className="container">
          <aside>
            <section className="hero">Hero</section>
            <section className="sidebar">Sidebar</section>
          </aside>
          <div className="content">
            <section className="main-content">Main Content</section>
            <section className="extra-content">Extra Content</section>
          </div>
        </div>
        <div className="related">
          <section className="related-images">Related Images</section>
          <section className="related-posts">Realated Posts</section>
        </div>
        <footer>Footer</footer>
      </main>
    </div>
  );
};

export default Question3;
```

```css
main {
  display: flex;
  flex-flow: column nowrap;
  max-width: 800px;
  margin: auto;
  height: calc(100vh - 20px);
  gap: 10px;
  padding: 10px;
  background-color: #f5f2ff;
  font-family: sans-serif;
}

header,
.hero,
.main-content,
.sidebar,
.extra-content,
.related-images,
.related-posts,
footer {
  padding: 20px;
  text-align: center;
  color: #fff;
  font-size: 2rem;
}

header {
  max-height: 100px;
  background-color: #9ad1e0;
}

footer {
  max-height: 100px;
  background-color: #f4a261;
}

.container {
  flex: 5 0 0;
  display: flex;
  flex-flow: row wrap;
  height: 100%;
  gap: 10px;
}

aside {
  flex: 1 0 0;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

.hero {
  flex: 1 0 0;
  background-color: #c1a1d3;
}

.sidebar {
  flex: 2 0 0;
  background-color: #a7c87c;
}

.content {
  flex: 2 0 0;
  display: flex;
  flex-flow: column wrap;
  gap: 10px;
}

.main-content {
  flex: 2 0 0;
  background-color: #f7c873;
}

.extra-content {
  flex: 1 0 0;
  background-color: #a8a8a8;
}

.related {
  flex: 1 0 0;
  display: flex;
  flex-wrap: row wrap;
  gap: 10px;
}

.related-images {
  flex: 3 0 0;
  background-color: #68b080;
}

.related-posts {
  flex: 1 0 0;
  background-color: #ffb6c1;
}
```

### Question 4

Write an efficient method that tells us whether or not an input string brackets ("{", "}", "(", ")", "[", "]") opened and closed properly.

Example: “{[]}” => true, “{(])}” => false, “{([)]}” => false

**Sandbox**: https://codesandbox.io/p/sandbox/metrobi-question-four-5przqs

```typescript
const questionFour = (str: string): boolean => {
  const stack: string[] = [];
  const pairs: Record<string, string> = { "}": "{", "]": "[", ")": "(" };

  for (let char of str) {
    if ("{[(".includes(char)) stack.push(char);
    else if (pairs[char] !== stack.pop()) return false;
  }

  return stack.length === 0;
};

console.log(questionFour("{[]}")); // true
console.log(questionFour("{(])}")); // false
console.log(questionFour("{([)]}")); // false
```

### Question 5

A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking. If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again. Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible in the worst-case scenario.

**Sandbox:** https://codesandbox.io/p/sandbox/metrobi-queston-five-lmyskv

```typescript
export const questionFive = (n: number) => {
  let floor = 0;

  while ((floor * (floor + 1)) / 2 < n) {
    floor++;
  }

  return floor;
};

console.log(questionFive(100)); // 14
```

### Question 6

Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an interface(we would like to see the paradox demonstrated).

**Sandbox**: https://codesandbox.io/p/sandbox/metrobi-question-six-hl6xxp

https://github.com/user-attachments/assets/29ecce75-36cd-4197-947b-40d1565b8429

```typescript
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
```

### Question 7

Think that you have an unlimited number of carrots, but a limited number of carrot types. Also, you have one bag that can hold a limited weight. Each type of carrot has a weight and a price. Write a function that takes carrotTypes and capacity and return the maximum value the bag can hold.

Example:

- carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}]
- capacity = 36 //kg
- getMaxValue(carrotTypes, capacity)

**Sandbox:** https://codesandbox.io/p/sandbox/metrobi-question-seven-lkttv2

```typescript
interface CarrotType {
  kg: number;
  price: number;
}
const questionSeven = (carrotTypes: CarrotType[], capacity: number): number => {
  // sort the carrot types whith the highest price by kg
  carrotTypes.sort((a, b) => b.price / b.kg - a.price / a.kg);

  let total: number = 0;
  let remainingCapacity = capacity;

  for (const carrot of carrotTypes) {
    if (remainingCapacity === 0) break;
    let units = Math.floor(remainingCapacity / carrot.kg);
    if (units === 0) break;
    total += units * carrot.price;
    remainingCapacity -= units * carrot.kg;
  }

  return total;
};

const types: CarrotType[] = [
  { kg: 5, price: 100 },
  { kg: 7, price: 150 },
  { kg: 3, price: 70 },
];
const capacity = 36;
console.log(getMaxValue(types, capacity)); // 840
```

> [!NOTE]  
> I implemented this last question in such way to prioritized the carrots that has more value by calculating which carrot has the highest price by kg. Therefore, the bag would have more value in terms of carrots price. If the idea was to optimize the distribution through all the carrots types, therefore I unfortunately get it wrong and would need more time to digging in a better solution.
