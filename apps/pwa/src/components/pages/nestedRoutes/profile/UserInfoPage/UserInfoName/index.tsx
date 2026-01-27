import { useRef } from 'react';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import useOperatingSystem from '@hooks/useOperatingSystem';

import { UserInfoNameTypes } from './types';

const UserInfoName = ({ value, valueHandler }: UserInfoNameTypes) => {
  const inputRef = useRef<HTMLInputElement>(null);
  const { operatingSystem } = useOperatingSystem();

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
      className="w-full text-impo_Surface_OnSurfaceVariant bg-impo_Neutral_Background"
      onKeyUp={handleKeyDown}
      onChange={(v) => changeHandler(v.target.value)}
      style={{ ...typographyFontStyles }}
    />
  );
};

export default UserInfoName;
