import { useMemo } from 'react';

import { MODAL_QUERY_NAME } from '../../../../constants/modal.constants';
import { usePageNavigationLoading } from '../../../../hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '../../../../hooks/useQueryParamsHandler';
import { useSystem } from '../../../../hooks/useSystem';
import { CustomButton } from '../../../ui/CustomButton';
import { CustomImage } from '../../../ui/CustomImage';
import { CustomTypography } from '../../../ui/CustomTypography';
import { PartnerModalNameEnums } from '../PartnerModals/enums';
import { RequestGeneratorTypeProps } from './type';

const RequestGenerator = ({ item }: RequestGeneratorTypeProps) => {
  const { appName } = useSystem();
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const isLoading = navigationLoadingId === item.name;

  const onAcceptClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.Accept,
      partnerName: item.name,
      id: item.id,
    }),
      pageNavigationHandler({ navigationType: 'logo', id: 'Accept' }));
  };

  const onRejectClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.Reject,
      partnerName: item.name,
      id: item.id,
      isRecv: item.isRecv ? String(item.isRecv) : '',
    }),
      pageNavigationHandler({ navigationType: 'logo', id: 'Reject' }));
  };

  const className = useMemo(() => {
    switch (appName) {
      case 'MEN_PWA':
        return '!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan';

      default:
        return '';
    }
  }, [appName]);

  return (
    <div className="p-2">
      <div className="flex items-center justify-end gap-2">
        <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {!item.isRecv ? `درخواست به ${item.name}` : `${item.name}`}
        </CustomTypography>

        <CustomImage
          src={item.image || '/assets/shared/images/avatar_partner_girl.webp'}
          width="48px"
          height="48px"
          className="rounded-full"
        />
      </div>
      <div className="flex items-center gap-3">
        {item.isRecv && (
          <CustomButton className={`max-w-fit ${className} `} onClick={onAcceptClickHandler} isLoading={isLoading}>
            <CustomTypography fontSize="Lable_Medium" className="text-impo_Primary_OnPrimary">
              قبول کردن
            </CustomTypography>
          </CustomButton>
        )}

        {!item.isRecv && (
          <div className="w-fit rounded-full px-4 h-10 bg-impo_Neutral_Surface">
            <div className="flex justify-center items-center h-full">
              <CustomTypography fontSize="Lable_Medium" className="text-impo_Surface_Outline">
                در انتظار...
              </CustomTypography>
            </div>
          </div>
        )}

        <CustomButton
          onClick={onRejectClickHandler}
          className="bg-impo_Surface_OutlineVariant border !border-impo_Neutral_Surface max-w-fit"
          isLoading={isLoading}
        >
          <CustomTypography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
            {item.isRecv ? 'رد کردن' : 'لغو کردن'}
          </CustomTypography>
        </CustomButton>
      </div>
    </div>
  );
};

export default RequestGenerator;
