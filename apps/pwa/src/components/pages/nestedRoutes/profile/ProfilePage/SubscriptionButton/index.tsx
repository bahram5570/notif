import CrownIcon from '@assets/icons/crown.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

import useAnalytics from '@hooks/useAnalytics';
import { useOperatingSystem } from '@repo/core/hooks/useOperatingSystem';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import Link from 'next/link';

import { SubscriptionProps } from '../__hooks__/userNameDetail/type';

const SubscriptionButton = ({ remaindDays }: SubscriptionProps) => {
  const { callEvent } = useAnalytics();
  const { operatingSystem } = useOperatingSystem();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Lable_Large', operatingSystem });

  const clickHandler = () => {
    callEvent('Subscription_From_HasSubscription');
    pageNavigationHandler({ id: 'SubscriptionButton', showProgressBar: true });
  };

  return (
    <div className=" px-4 py-2">
      <div className="flex flex-row justify-between items-center gap-1 lg:gap-8 p-4 rounded-lg bg-impo_Primary_Primary">
        <Link
          href="/protected/subscription"
          className=" rounded-full  relative min-w-fit w-fit py-2 px-3 bg-impo_White text-impo_Primary_Primary"
          style={{ ...typographyFontStyles }}
          onClick={clickHandler}
        >
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Primary_Primary">
            تمدید اشتراک
          </CustomTypography>
        </Link>

        <div className="gap-1 lg:gap-2 flex flex-row items-center">
          <CustomTypography fontSize="Lable_Medium" className="text-impo_White">
            {`${remaindDays < 0 ? 0 : remaindDays} روز مانده تا پایان اشتراک`}
          </CustomTypography>

          <CrownIcon className="w-8 h-8 mb-2 fill-impo_White" />
        </div>
      </div>
    </div>
  );
};

export default SubscriptionButton;
