import CopyIcon from '@assets/icons/Copy.svg';
import Refresh from '@assets/icons/refresh.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import Dark_Spinner from '@components/ui/Dark_Spinner';

import useCopy from '../__hooks__/useCopy';
import { PartnerCodePropsType } from './type';

const PartnerCode = ({ isLoading, refreshLoading, onRefreshCodeHandler, partnerCode }: PartnerCodePropsType) => {
  const { copyToClipboard } = useCopy();
  const loading = isLoading || refreshLoading;

  const copyHandler = () => {
    if (!partnerCode) return;
    copyToClipboard(partnerCode);
  };

  return (
    <div className="w-full">
      <div className="flex w-full justify-between p-1 items-center rounded-xl gap-2 border border-dashed border-impo_Surface_OutlineVariant">
        <div onClick={onRefreshCodeHandler}>
          <Refresh className="w-8 h-8 " />
        </div>
        <div className="w-full flex justify-center items-center">
          {loading && (
            <div className="flex w-20 justify-center items-center">
              <Dark_Spinner className="border-impo_Primary_Primary" size={30} />
            </div>
          )}
          {!isLoading && partnerCode && (
            <CustomTypography fontSize="Title_Small" className="text-impo_Neutral_OnBackground px-2">
              {partnerCode}
            </CustomTypography>
          )}
        </div>
        {partnerCode && (
          <div onClick={copyHandler}>
            <CopyIcon className="w-8 scale-100 h-8 stroke-impo_Surface_Outline" />
          </div>
        )}
      </div>
    </div>
  );
};

export default PartnerCode;
