// 1) Write a javascript function that finds the duplicate items in any given array.
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
// usage
// console.log(questionOne([1, 2, 3, 4, 5, 2, 3, 6])); // [2, 3]
// console.log(questionOne([{ id: 1 }, { id: 2 }, { id: 1 }])); // [{ id: 1 }]

// 2) Write an async javascript function that writes every item in any given array with 1, 2, 4, 8, etc., seconds apart.
export const questionTwo = async (arr: string[]): Promise<void> => {
  for (let i = 0; i < arr.length; i++) {
    await new Promise<void>(
      (resolve) =>
        setTimeout(() => {
          console.log(arr[i]);
          resolve();
        }, Math.pow(2, i) * 1000) // increase delay exponentialy
    );
  }
};
// usage
// const arr = ["a", "b", "c", "d"];
// questionTwo(arr);

// 3) Write the necessary React code for generating the below figure (using flex).
// see questions/question3.tsx

// 4) Write an efficient method that tells us whether or not an input string brackets ("{", "}", "(", ")", "[", "]")
// opened and closed properly. Example: “{[]}” => true, “{(])}” => false, “{([)]}” => false
export const questionFour = (str: string): boolean => {
  const stack: string[] = [];
  const pairs: Record<string, string> = { "}": "{", "]": "[", ")": "(" };

  for (let char of str) {
    if ("{[(".includes(char)) stack.push(char);
    else if (pairs[char] !== stack.pop()) return false;
  }

  return stack.length === 0;
};
// usage
// console.log(questionFour("{[]}")); // true
// console.log(questionFour("{(])}")); // false
// console.log(questionFour("{([)]}")); // false

// 5) A building has 100 floors. One of the floors is the highest floor an egg can be dropped from without breaking.
// If an egg is dropped from above that floor, it will break. If it is dropped from that floor or below, it will be completely undamaged and you can drop the egg again.
// Given two eggs, find the highest floor an egg can be dropped from without breaking, with as few drops as possible in the worst-case scenario.
// export const questionFive = (e: number, f: number) => {
export const questionFive = (n: number) => {
  let floor = 0;

  while ((floor * (floor + 1)) / 2 < n) {
    floor++;
  }

  return floor;
};
// usage
// console.log(questionFive(100));

// 6) Write the code that animates “Zeno's Paradox of Achilles and the Tortoise” on an interface(we would like to see the paradox demonstrated).
// see questions/question6.tsx

// 7) Think that you have an unlimited number of carrots, but a limited number of carrot types.
// Also, you have one bag that can hold a limited weight. Each type of carrot has a weight and a price.
// Write a function that takes carrotTypes and capacity and return the maximum value the bag can hold. [Python or Javascript]
// Example:
// carrotTypes = [{kg: 5, price: 100}, {kg: 7, price: 150}, {kg: 3, price: 70}] capacity = 36 //kg
// getMaxValue(carrotTypes, capacity)
interface CarrotType {
  kg: number;
  price: number;
}
export const questionSeven = (
  carrotTypes: CarrotType[],
  capacity: number
): number => {
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
// usage
// const types: CarrotType[] = [
//   { kg: 5, price: 100 },
//   { kg: 7, price: 150 },
//   { kg: 3, price: 70 },
// ];
// const capacity = 36;
// console.log(getMaxValue(types, capacity)); // 840
