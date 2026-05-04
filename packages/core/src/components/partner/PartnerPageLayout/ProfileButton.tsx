import ProfileIcon from '@assets/shared/icons/headerProfile.svg';

import { usePageNavigationLoading } from '../../../hooks/usePageNavigationLoading';
import { CustomSpinner } from '../../ui/CustomSpinner';
import { ProfileButtonPropsType } from './type';

export const ProfileButton = ({ coverImage }: ProfileButtonPropsType) => {
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  let path = '/protected/profile';

  const clickHandler = () => {
    if (!pageNavigationLoading) {
      pageNavigationHandler({ showProgressBar: false, linkTo: path, id: 'profile' });
    }
  };

  return (
    <div className="relative z-10 flex items-end w-full py-6">
      <div className="flex px-3 py-2 w-full">
        <div className="flex gap-4 items-center">
          <div className="cursor-pointer flex justify-center items-center w-8 h-8" onClick={clickHandler}>
            {pageNavigationLoading === 'profile' ? (
              <CustomSpinner size={28} className="border-impo_Surface_Outline" />
            ) : (
              <ProfileIcon
                className={`w-8 h-full stroke-impo_Surface_Outline ${coverImage && 'stroke-impo_Neutral_OnBackground'}`}
              />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};
