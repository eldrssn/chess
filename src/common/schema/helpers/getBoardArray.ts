import { ROW_NUMBERS, COLUMN_CHARS } from "../../../utils/constants";

const getRow = (numberOfRow: number, isReversed?: boolean) => {
  return ROW_NUMBERS.map(
    (_, charIndex) =>
      `${COLUMN_CHARS[charIndex]}${
        ROW_NUMBERS[
          isReversed ? numberOfRow : ROW_NUMBERS.length - 1 - numberOfRow
        ]
      }`
  );
};

export const getBoardArray = (isReversed?: boolean) => {
  return ROW_NUMBERS.reduce<string[]>((prev, _, index) => {
    return [...prev, ...getRow(index, isReversed)];
  }, []);
};
