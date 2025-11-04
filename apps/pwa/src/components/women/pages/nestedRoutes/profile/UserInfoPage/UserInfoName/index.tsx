import { useRef } from 'react';

import { toPersianNumbers } from '@utils/numbers';

import useTheme from '@hooks/useTheme';

import { UserInfoNameTypes } from './types';

const UserInfoName = ({ value, valueHandler }: UserInfoNameTypes) => {
  const { colors, typography } = useTheme();
  const inputRef = useRef<HTMLInputElement>(null);

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      e.preventDefault();
      inputRef.current?.blur();
    }
  };

  const changeHandler = (v: string) => {
    valueHandler(toPersianNumbers(v));
  };

  return (
    <input
      type="text"
      value={value}
      ref={inputRef}
      className="w-full"
      onKeyUp={handleKeyDown}
      onChange={(v) => changeHandler(v.target.value)}
      style={{ color: colors.Surface_OnSurfaceVariant, ...typography.Body.Large }}
    />
  );
};

export default UserInfoName;
