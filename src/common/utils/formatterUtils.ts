export const formatPhoneNumber = (value: string) => {
    if (!value) return value;

    const currentValue = value.replace(/[^\d]/g, "");
    const cvLength = currentValue.length;

    if (cvLength < 4) return `+${currentValue}`;

    if (cvLength < 6)
      return `+${currentValue.slice(0, 3)} (${currentValue.slice(3)})`;

    if (cvLength < 9)
      return `+${currentValue.slice(0, 3)} (${currentValue.slice(
        3,
        5
      )}) ${currentValue.slice(5)}`;

    if (cvLength < 11)
      return `+${currentValue.slice(0, 3)} (${currentValue.slice(
        3,
        5
      )}) ${currentValue.slice(5, 8)}-${currentValue.slice(8)}`;

    return `+${currentValue.slice(0, 3)} (${currentValue.slice(
      3,
      5
    )}) ${currentValue.slice(5, 8)}-${currentValue.slice(
      8,
      10
    )}-${currentValue.slice(10, 12)}`;
  };