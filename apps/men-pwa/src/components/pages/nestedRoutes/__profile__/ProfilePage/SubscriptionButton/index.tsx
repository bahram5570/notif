import CrownIcon from '@assets/icons/crown.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import Link from 'next/link';

import { SubscriptionButtonProps } from './types';

const SubscriptionButton = ({ currentDayCount }: SubscriptionButtonProps) => {
  const { operatingSystem } = useOperatingSystem();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Lable_Large', operatingSystem });

  const clickHandler = () => {
    pageNavigationHandler({ id: 'SubscriptionButton', showProgressBar: true });
  };

  return (
    <div className=" px-4 py-2">
      <div className="flex flex-row justify-between items-center gap-1 lg:gap-8 p-4 rounded-lg bg-impo_PrimaryMan_PrimaryMan">
        <Link
          href="/protected/subscription"
          className="relative rounded-full min-w-fit w-fit py-2 px-3 bg-impo_White text-impo_PrimaryMan_PrimaryMan"
          style={{ ...typographyFontStyles }}
          onClick={clickHandler}
        >
          <CustomTypography fontSize="Lable_Medium" className="text-impo_PrimaryMan_PrimaryMan">
            تمدید اشتراک
          </CustomTypography>
        </Link>

        <div className="gap-1 lg:gap-2 flex flex-row items-center">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_White">
            {`${currentDayCount < 0 ? 0 : currentDayCount} روز مانده تا پایان اشتراک`}
          </CustomTypography>

          <CrownIcon className="w-8 h-8 mb-2 fill-impo_White" />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionButton;
