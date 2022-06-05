export const FormatTime = (seconds: number): string => {
  const date = new Date(seconds * 1000);
  return `${date.getMinutes()}:${AddLeadingZeros(date.getSeconds())}`;
}

export const AddLeadingZeros = (value: number) => 
  value < 10 ? '0' + value.toString() : value.toString()

  