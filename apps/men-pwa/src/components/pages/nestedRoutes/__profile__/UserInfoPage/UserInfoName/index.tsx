import { useRef } from 'react';

import { toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { useSystem } from '@repo/core/hooks/useSystem';

import { UserInfoNameTypes } from './types';

const UserInfoName = ({ value, valueHandler }: UserInfoNameTypes) => {
  const { operatingSystem } = useSystem();
  const inputRef = useRef<HTMLInputElement>(null);

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Large', operatingSystem });
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
      onKeyUp={handleKeyDown}
      style={{ ...typographyFontStyles }}
      onChange={(v) => changeHandler(v.target.value)}
      className="w-full text-impo_Surface_OnSurfaceVariant bg-impo_Neutral_Background"
    />
  );
};

export default UserInfoName;
