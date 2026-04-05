import CopyIcon from '@assets/shared/icons/Copy.svg';
import Refresh from '@assets/shared/icons/refresh.svg';

import useCopy from '../../../hooks/useCopy';
import { CustomSpinner } from '../../ui/CustomSpinner';
import { CustomTypography } from '../../ui/CustomTypography';
import useRefreshCode from './__hooks__/useRefreshCode';
import { RefreshPartnerCodePropsType } from './type';

export const RefreshPartnerCode = (props: RefreshPartnerCodePropsType) => {
  const { onRefreshCodeHandler, refreshLoading } = useRefreshCode({ callBackHandler: props.callBackHandler });
  const { copyToClipboard } = useCopy();
  const loading = props.isLoading || refreshLoading;

  const copyHandler = () => {
    if (!props.partnerCode) return;
    copyToClipboard(props.partnerCode);
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
              <CustomSpinner className="border-impo_Primary_Primary" size={30} />
            </div>
          )}
          {!props.isLoading && props.partnerCode && (
            <CustomTypography
              fontSize="Title_Small"
              className={`${props.isMan && 'text-impo_PrimaryMan_PrimaryMan'} text-impo_Neutral_OnBackground px-2`}
            >
              {props.partnerCode}
            </CustomTypography>
          )}
        </div>
        {props.partnerCode && (
          <div onClick={copyHandler}>
            <CopyIcon className="w-8 scale-100 h-8 stroke-impo_Surface_Outline" />
          </div>
        )}
      </div>
    </div>
  );
};
