import AddLoveIcon from '@assets/shared/icons/add-love.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { PartnerCustomLink } from '../PartnerCustomLink';

const NotRequestData = () => {
  const { callEvent } = useAnalytics();

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <AddLoveIcon />
      <CustomTypography className="text-impo_Neutral_OnBackground text-center p-3 " fontSize="Body_Small">
        هنوز هیچکس برات درخواست همدلی نفرستاده! اما خودت می‌تونی همدلی رو شروع کنی
      </CustomTypography>

      <PartnerCustomLink
        lable="شروع همدلی"
        link="/protected/partnerStart"
        onClick={() => callEvent('Pair_From_List')}
        id="not-request-data-link"
      />
    </div>
  );
};

export default NotRequestData;
