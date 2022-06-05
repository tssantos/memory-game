export const FormatTime = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  return `${date.getMinutes()}:${AddLeadingZeros(date.getSeconds())}`;
};

export const AddLeadingZeros = (value: number) =>
  value < 10 ? "0" + value.toString() : value.toString();

export const ShuffleArray = <T>(array: T[]): T[] => {
  for (var i = array.length - 1; i > 0; i--) {
    var j = Math.floor(Math.random() * (i + 1));
    var temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }
  return array;
};

export const CreateShuffledTiles = (tilesCount: number) => {
  const values: number[] = []
  for (let index = 0; index < tilesCount/2; index += 1) {
    values.push(...[index, index]);
  }
  return ShuffleArray(values);
}