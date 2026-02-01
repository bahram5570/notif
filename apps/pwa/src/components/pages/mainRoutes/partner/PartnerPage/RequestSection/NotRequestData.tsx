import AddLoveIcon from '@assets/icons/add-love.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useAnalytics from '@hooks/useAnalytics';

import CustomLink from '../CustomLink';

const NotRequestData = () => {
  const { callEvent } = useAnalytics();

  return (
    <div className="flex flex-col justify-center items-center gap-3">
      <AddLoveIcon />
      <CustomTypography className="text-impo_Neutral_OnBackground text-center p-3 " fontSize="Body_Small">
        هنوز هیچکس برات درخواست همدلی نفرستاده! اما خودت می‌تونی همدلی رو شروع کنی
      </CustomTypography>

      <CustomLink
        lable="شروع همدلی"
        link="/protected/partnerStart"
        onClick={() => callEvent('Pair_From_List')}
        id="not-request-data-link"
      />
    </div>
  );
};

export default NotRequestData;
