import { useRef } from 'react';

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

  return (
    <input
      ref={inputRef}
      type="text"
      value={value}
      className="w-full"
      onChange={(v) => valueHandler(v.target.value)}
      style={{ color: colors.Surface_OnSurfaceVariant, ...typography.Body.Large }}
      onKeyUp={handleKeyDown}
    />
  );
};

export default UserInfoName;
