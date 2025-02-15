import { expect, test, describe, beforeEach } from "vitest";
import { getUserName } from "./storage";

describe("getUserName function", () => {
  beforeEach(() => {
    localStorage.clear();
  });

  test("Returns the name from the user object in storage", () => {
    localStorage.setItem("user", JSON.stringify({ name: "John Doe" }));
    expect(getUserName()).toBe("John Doe");
  });

  test("Returns null when no user exists in storage", () => {
    expect(getUserName()).toBe(null);
  });
});
