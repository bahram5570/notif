export const binarySeparator = (binaryValue: number) => {
  const separatedList: number[] = [];
  let power = 0;

  while (binaryValue > 0) {
    if (binaryValue & 1) {
      separatedList.push(2 ** power);
    }

    binaryValue = binaryValue >> 1;
    power++;
  }

  return separatedList;
};

export function convertToPersianOrdinal(number: number) {
  const persianOrdinals = [
    '',
    'اول',
    'دوم',
    'سوم',
    'چهارم',
    'پنجم',
    'ششم',
    'هفتم',
    'هشتم',
    'نهم',
    'دهم',
    'یازدهم',
    'دوازدهم',
    'سیزدهم',
    'چهاردهم',
    'پانزدهم',
    'شانزدهم',
    'هفدهم',
    'هجدهم',
    'نوزدهم',
    'بیستم',
  ];

  return persianOrdinals[number] || number.toString();
}
