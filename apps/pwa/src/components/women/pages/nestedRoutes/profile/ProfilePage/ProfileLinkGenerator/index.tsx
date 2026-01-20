import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';

import { ProfileGeneratorProps } from './type';

const ProfileLinkGenerator = ({ Icon, link, name, isFirstItem }: ProfileGeneratorProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  const selectHandler = () => {
    pageNavigationHandler({ linkTo: link, id: 'ProfileLinkGenerator', showProgressBar: true });
  };

  return (
    <div onClick={selectHandler} className="flex flex-row items-center justify-end gap-3 w-full px-5">
      <div
        className={`
                    py-4 
                    w-full 
                    flex 
                    justify-end 
                    items-center 
                    border-t-[1px]
                    ${isFirstItem ? 'border-t-impo_Transparent' : 'border-t-impo_Neutral_Surface'}
                  `}
      >
        <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
          {name}
        </Dark_Typography>
      </div>

      <Icon className="w-10 h-10" />
    </div>
  );
};

export default ProfileLinkGenerator;
