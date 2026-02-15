export function getInputClass(digit: string, isSuccess: boolean, isErrorShake: boolean): string {
  let base = `
    w-10 h-10 text-center text-xl font-medium !text-impo_Neutral_OnBackground
    border rounded-xl outline-none transition-all duration-300
  `;

  if (isSuccess) {
    return `${base} border-impo_Success_Success !text-impo_Success_Success animate-pulse-slow`;
  }

  if (isErrorShake) {
    return `${base} border-impo_Error_Error !text-impo_Error_Error animate-shake-short`;
  }

  if (digit) {
    return `${base} border-impo_Primary_Primary !bg-impo_Neutral_Surface`;
  }

  return `${base} border-gray-[#D0D0D0] !bg-impo_Neutral_Surface`;
}
