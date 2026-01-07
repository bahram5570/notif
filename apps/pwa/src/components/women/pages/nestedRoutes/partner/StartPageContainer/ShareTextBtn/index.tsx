import ExportIcon from '@assets/icons/Export.svg';

import Dark_Typography from '@components/ui/Dark_Typography';
import useShareNavigator from '@hooks/useShareNavigator';

import { ShareTextBtnPropsType } from './type';

const ShareTextBtn = ({ shareText }: ShareTextBtnPropsType) => {
  const { handleShare } = useShareNavigator();

  const onClick = () => {
    handleShare(shareText || '');
  };

  return (
    <div className="flex justify-center" onClick={onClick}>
      <div className="flex items-center gap-2 px-8 py-1 rounded-full  select-none cursor-pointer w-full h-[48px] bg-impo_Primary_PrimaryContainer dark:bg-impo_Primary_OnPrimaryContainer">
        <Dark_Typography fontSize="Body_Large" className="text-impo_Primary_Primary">
          ارسال کد برای همدل
        </Dark_Typography>

        <ExportIcon className="w-6 h-6 stroke-impo_Primary_Primary" />
      </div>
    </div>
  );
};

export default ShareTextBtn;
