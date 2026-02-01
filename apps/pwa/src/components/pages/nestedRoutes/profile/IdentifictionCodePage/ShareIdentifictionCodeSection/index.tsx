import ExportIcon from '@assets/icons/Export.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import useAnalytics from '@hooks/useAnalytics';
import useShareNavigator from '@hooks/useShareNavigator';

import { ShareIdentifictionCodeSectionPropsType } from './type';

const ShareIdentifictionCodeSection = ({ interfaceShareText }: ShareIdentifictionCodeSectionPropsType) => {
  const { callEvent } = useAnalytics();
  const { handleShare } = useShareNavigator();

  const clickHandler = () => {
    callEvent('InviteFromShare');
    handleShare(interfaceShareText);
  };

  return (
    <div className="flex justify-center" onClick={clickHandler}>
      <div className="flex items-center gap-2 px-8 py-2 rounded-full border-[1px] select-none cursor-pointer w-full h-[48px] bg-impo_Primary_Primary text-impo_White border-impo_Primary_Primary">
        <CustomTypography fontSize="Body_Large" className="text-impo_White">
          اشتراک گذاری
        </CustomTypography>
        <ExportIcon className="w-6 h-6 stroke-impo_White" />
      </div>
    </div>
  );
};

export default ShareIdentifictionCodeSection;
