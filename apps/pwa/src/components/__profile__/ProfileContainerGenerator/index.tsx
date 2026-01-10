import { Children } from 'react';

import { ProfileContainerGeneratorTypes } from './types';

const ProfileContainerGenerator = ({ children }: ProfileContainerGeneratorTypes) => {
  return (
    <div className="w-full px-4 py-2 rounded-xl bg-impo_Neutral_Background">
      <>
        {Children.map(children, (child, index) => (
          <div
            key={index}
            className={`w-full py-2 border-t-[1px] ${index > 0 ? 'border-impo_Neutral_Surface' : 'border-impo_Transparent'}`}
          >
            <>{child}</>
          </div>
        ))}
      </>
    </div>
  );
};

export default ProfileContainerGenerator;
