// Import the necessary functions from the utils module
import { getFullYear, getFooterCopy, getLatestNotification } from "./utils";

// Test case: returns current year
test("returns current year", () => {
  expect(getFullYear()).toBe(new Date().getFullYear()); // Update expected value to match current year
});

// Test case: correct footer copy
test("correct footer copy", () => {
  expect(getFooterCopy(true)).toBe("Holberton School");
  expect(getFooterCopy(false)).toBe("Holberton School main dashboard");
});

// Test case: returns right notification
test("returns right notification", () => {
  expect(getLatestNotification()).toBe("<strong>Urgent Requirement</strong> - complete by EOD");
});
