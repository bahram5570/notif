import ProfileIcon from '@assets/icons/headerProfile.svg';

import Dark_Spinner from '@components/ui/Dark_Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

const ProfileButton = () => {
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
              <Dark_Spinner size={28} className="border-impo_Surface_Outline" />
            ) : (
              <ProfileIcon className="w-8 h-full stroke-impo_Surface_Outline" />
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProfileButton;
