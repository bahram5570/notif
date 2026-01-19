import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import Link from 'next/link';

import { ProfileGeneratorProps } from './type';

const ProfileLinkGenerator = ({ Icon, link, name, isLastItem }: ProfileGeneratorProps) => {
  const { pageNavigationHandler } = usePageNavigationLoading();

  return (
    <Link
      href={link}
      onClick={() => pageNavigationHandler({ id: 'ProfileLinkGenerator', showProgressBar: true })}
      className="flex flex-row items-center justify-end w-full  px-5"
    >
      <div className="flex flex-row items-center gap-3 justify-end w-full">
        <div
          className={`
                      py-4 
                      w-full 
                      flex 
                      justify-end 
                      border-impo_Neutral_Surface
                      items-center 
                      ${isLastItem ? 'border-none' : 'border-b'}
                    `}
        >
          <Dark_Typography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
            {name}
          </Dark_Typography>
        </div>

        {<Icon className="w-10 h-10" />}
      </div>
    </Link>
  );
};

export default ProfileLinkGenerator;
