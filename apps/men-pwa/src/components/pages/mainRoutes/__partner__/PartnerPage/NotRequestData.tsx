import AddLoveIcon from '@assets/shared/icons/add-love.svg';
import { PartnerCustomLink } from '@repo/core/components/partner/PartnerCustomLink';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';

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
        link="/protected/startPartner"
        onClick={() => callEvent('Pair_From_List')}
        id="not-request-data-link"
        className=" !bg-impo_PrimaryMan_PrimaryMan text-impo_White"
      />
    </div>
  );
};

export default NotRequestData;
