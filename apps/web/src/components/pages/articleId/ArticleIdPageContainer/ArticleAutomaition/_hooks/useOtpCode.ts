import { useRef, useState } from 'react';

const LEN = 6;

export function useOtpCode() {
  const [code, setCode] = useState<string[]>(Array(LEN).fill(''));
  const refs = useRef<(HTMLInputElement | null)[]>([]);

  const handleChange = (val: string, i: number) => {
    if (!/^\d?$/.test(val)) return;

    const next = [...code];
    next[i] = val;
    setCode(next);

    if (val && i < LEN - 1) {
      refs.current[i + 1]?.focus();
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>, i: number) => {
    if (e.key === 'Backspace') {
      if (code[i] === '' && i > 0) {
        e.preventDefault();
        refs.current[i - 1]?.focus();
      }
    }

    if (e.key === 'ArrowLeft' && i > 0) {
      e.preventDefault();
      refs.current[i - 1]?.focus();
    }
    if (e.key === 'ArrowRight' && i < LEN - 1) {
      e.preventDefault();
      refs.current[i + 1]?.focus();
    }
  };

  const resetCode = () => {
    setCode(Array(LEN).fill(''));
    refs.current[0]?.focus();
  };

  return { code, refs, handleChange, handleKeyDown, resetCode };
}
