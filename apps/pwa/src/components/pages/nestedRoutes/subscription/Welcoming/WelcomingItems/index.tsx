import BellIcon from '@assets/icons/bell.svg';
import StarIcon from '@assets/icons/star-2.svg';
import TickIcon from '@assets/icons/tick-2.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { WelcomingItemsProps } from './type';

const WelcomingItems = ({ items }: WelcomingItemsProps) => {
  const getIconByIndex = (index: number) => {
    switch (index) {
      case 0:
        return <TickIcon />;
      case 1:
        return <BellIcon />;
      case 2:
        return <StarIcon />;
      default:
        return <TickIcon />;
    }
  };

  return (
    <div className="bg-[#F7F7F750] dark:bg-impo_Neutral_Surface mt-4 rounded-3xl px-5 py-6">
      <div className="relative">
        <div
          className="absolute right-[18px] top-0 bottom-0  w-3"
          style={{
            background: 'linear-gradient(180deg, rgba(255, 164, 188, 0.5) 80%, rgba(197, 221, 255, 0) 100%)',
          }}
        />

        <div className="flex flex-col">
          {items.map((item, index) => (
            <div key={index} className="grid grid-cols-[1fr_48px] gap-3">
              <div className="pb-10 flex flex-col items-end text-right gap-1">
                <CustomTypography fontSize="Lable_Large" className="text-impo_Surface_InverseSurface">
                  {item.title}
                </CustomTypography>

                <CustomTypography fontSize="Body_Small" className="text-impo_Surface_OnSurfaceVariant">
                  {item.description}
                </CustomTypography>
              </div>

              <div className="relative flex justify-center">
                <div className="relative z-10">{getIconByIndex(index)}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default WelcomingItems;
