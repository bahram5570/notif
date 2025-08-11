import { Children } from 'react';

import useTheme from '@hooks/useTheme';

import { ProfileContainerGeneratorTypes } from './types';

const ProfileContainerGenerator = ({ children }: ProfileContainerGeneratorTypes) => {
  const { colors } = useTheme();

  return (
    <div className="w-full px-4 py-2 rounded-xl" style={{ backgroundColor: colors.White }}>
      <>
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className="w-full py-2 border-t-[1px]"
            style={{ borderTopColor: index > 0 ? colors.Neutral_Surface : colors.Transparent }}
          >
            <>{child}</>
          </div>
        ))}
      </>
    </div>
  );
};

export default ProfileContainerGenerator;
