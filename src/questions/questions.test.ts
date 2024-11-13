// findDuplicates.test.ts
import {
  questionFive,
  questionFour,
  questionOne,
  questionSeven,
} from "./questions";

describe("questions", () => {
  describe("one", () => {
    it("should return duplicates for primitive types", () => {
      const arr = [1, 2, 3, 4, 5, 2, 3, 6];
      const result = questionOne(arr);
      expect(result).toEqual([2, 3]);
    });

    it("should return duplicates for objects", () => {
      const objectarr = [{ id: 1 }, { id: 2 }, { id: 1 }];
      const result = questionOne(objectarr);
      expect(result).toEqual([{ id: 1 }]);
    });

    it("should return an empty array for no duplicates", () => {
      const arr = [1, 2, 3, 4, 5];
      const result = questionOne(arr);
      expect(result).toEqual([]);
    });

    it("should work with distinct types", () => {
      const mixedarr = [1, "a", { id: 1 }, 2, "a", { id: 1 }];
      const result = questionOne(mixedarr);
      expect(result).toEqual(["a", { id: 1 }]);
    });
  });
  describe("two", () => {});
  describe("four", () => {
    it("should return true for correct open close brackets", () => {
      expect(questionFour("{[]}")).toBe(true);
      expect(questionFour("{[()]}")).toBe(true);
    });

    it("should return false for incorrect open close brackets", () => {
      expect(questionFour("{(])}")).toBe(false);
      expect(questionFour("{([)]}")).toBe(false);
      expect(questionFour("{[")).toBe(false);
      expect(questionFour(")")).toBe(false);
    });
  });
  describe("five", () => {
    it("should return the minimum number of drops required in the worst-case scenario for 100 floors", () => {
      const result = questionFive(100);
      expect(result).toBe(14);
    });
  });
  describe("seven", () => {
    it("should calculate the maximum value the bag can hold", () => {
      const carrotTypes = [
        { kg: 5, price: 100 },
        { kg: 7, price: 150 },
        { kg: 3, price: 70 },
      ];
      const capacity = 36;
      const result = questionSeven(carrotTypes, capacity);

      expect(result).toBe(840);
    });
  });
});
