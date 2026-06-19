import { describe, it, expect } from "vitest";

const addTwoNumbers = (a, b) => {
	return a + b;
};

describe("addTwoNumbers", () => {
	it("should return 5 when adding 2 and 3", () => {
		expect(addTwoNumbers(2, 3)).toBe(5);
	});
});

// let result = addTwoNumbers(2, 3);
// if (result !== 5) {
// 	throw new Error("not equal");
// } else {
// 	console.log("equal");
// }
