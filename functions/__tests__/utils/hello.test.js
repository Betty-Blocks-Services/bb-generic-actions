import { hello } from "../../utils";
import { test, expect } from "bun:test";

test("hello", () => {
  expect(hello("John")).toBe("Hello, John");
});
