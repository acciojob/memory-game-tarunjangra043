export const generateCells = (size) => {
  let numbers = Array.from({ length: size / 2 }, (_, i) => i + 1);
  numbers = [...numbers, ...numbers];
  return numbers.sort(() => Math.random() - 0.5);
};
