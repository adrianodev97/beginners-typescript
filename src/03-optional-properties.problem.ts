import { expect, it } from "vitest";

interface INamesType { 
  first: string; 
  last?: string; 
}

export const getName = (params: INamesType) => {
  if (params.last) {
    return `${params.first} ${params.last}`;
  }
  return params.first;
};

it("Should work with just the first name", () => {
  const name = getName({
    first: "Matt"
  });

  expect(name).toEqual("Matt");
});

it("Should work with the first and last name", () => {
  const name = getName({
    first: "Matt",
    last: "Pocock",
  });

  expect(name).toEqual("Matt Pocock");
});
