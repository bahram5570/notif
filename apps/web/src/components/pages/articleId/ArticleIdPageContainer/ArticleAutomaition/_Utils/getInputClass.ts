export function getInputClass(digit: string, isSuccess: boolean, isErrorShake: boolean): string {
  let base = `
    w-10 h-10 text-center text-xl font-medium
    border rounded-xl outline-none transition-all duration-300
  `;

  if (isSuccess) {
    return `${base} border-green-500 bg-green-50/50 animate-pulse-slow`;
  }

  if (isErrorShake) {
    return `${base} border-red-500 bg-red-50/50 animate-shake-short`;
  }

  if (digit) {
    return `${base} border-impo_Primary_Primary bg-white`;
  }

  return `${base} border-gray-[#D0D0D0] bg-white`;
}
