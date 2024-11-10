const add = require('../src/add');

test('returns 0 for an empty string', () => {
  expect(add("")).toBe(0);
});

test('returns the number itself if only one number is provided', () => {
  expect(add("1")).toBe(1);
});

test('returns the sum of two numbers', () => {
  expect(add("1,5")).toBe(6);
});

test('returns the sum of multiple numbers', () => {
  expect(add("1,2,3,4,5")).toBe(15); 
});

test('returns the sum of numbers separated by commas and new lines', () => {
  expect(add("1\n2,3")).toBe(6); 
});

test('returns the sum with a custom delimiter', () => {
  expect(add("//;\n1;2")).toBe(3);
});

test('throws an exception for a single negative number', () => {
  expect(() => add("1,-2,3")).toThrow("negative numbers not allowed: -2");
});

test('throws an exception for multiple negative numbers', () => {
  expect(() => add("1,-2,-3,4")).toThrow("negative numbers not allowed: -2, -3");
});
