import ExportIcon from '@assets/shared/icons/Export.svg';

import { useShareNavigator } from '../../hooks/useShareNavigator';
import { useSystem } from '../../hooks/useSystem';
import { CustomTypography } from '../ui/CustomTypography';
import { SharePartnerCodePropsType } from './type';

export const SharePartnerCode = (props: SharePartnerCodePropsType) => {
  const { appName } = useSystem();
  const { handleShare } = useShareNavigator();
  const isMan = appName === 'MEN_PWA';

  const onClick = () => {
    handleShare(props.shareText || '');
  };
  return (
    <div className="flex justify-center" onClick={onClick}>
      <div
        className={`flex items-center gap-2 px-8 py-1 rounded-full  select-none cursor-pointer w-full h-[48px] ${isMan ? 'bg-impo_PrimaryMan_PrimaryContainerMan' : 'bg-impo_Primary_PrimaryContainer'}`}
      >
        <CustomTypography
          fontSize="Body_Large"
          className={` ${isMan ? 'text-impo_PrimaryMan_PrimaryMan' : 'text-impo_Primary_Primary'}`}
        >
          {props.text}
        </CustomTypography>

        <ExportIcon
          className={`w-6 h-6  ${isMan ? 'stroke-impo_PrimaryMan_PrimaryMan' : 'stroke-impo_Primary_Primary'}`}
        />
      </div>
    </div>
  );
};
