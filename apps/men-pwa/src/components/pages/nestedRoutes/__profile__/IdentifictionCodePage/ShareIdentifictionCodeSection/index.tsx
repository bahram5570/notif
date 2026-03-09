import ExportIcon from '@assets/icons/Export.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useShareNavigator from '@hooks/useShareNavigator';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';

import { ShareIdentifictionCodeSectionPropsType } from './type';

const ShareIdentifictionCodeSection = ({ interfaceShareText }: ShareIdentifictionCodeSectionPropsType) => {
  const { callEvent } = useAnalytics();
  const { handleShare } = useShareNavigator();

  const clickHandler = () => {
    callEvent('InviteFromShare');
    handleShare('interfaceShareText');
  };

  return (
    <div className="flex justify-center" onClick={clickHandler}>
      <div className="flex items-center gap-2 px-8 py-2 rounded-full select-none cursor-pointer w-full h-[40px] bg-impo_PrimaryMan_PrimaryMan text-impo_White">
        <CustomTypography fontSize="Body_Large" className="text-impo_White">
          اشتراک گذاری
        </CustomTypography>
        <ExportIcon className="w-6 h-6 stroke-impo_White" />
      </div>
    </div>
  );
};

export default ShareIdentifictionCodeSection;
