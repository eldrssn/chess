export const whatPieceName = (fullName?: string) => {
  if (fullName) {
    const firstLetterOfPieceName = fullName.indexOf("_") + 1;
    return fullName.slice(firstLetterOfPieceName);
  }
};
