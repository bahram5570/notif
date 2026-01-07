import CustomImage from '@components/ui/CustomImage';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import { PartnerModalNameEnums } from '../../PartnerModals/enums';
import { RequestGeneratorTypeProps } from './type';

const RequestGenerator = ({ item }: RequestGeneratorTypeProps) => {
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();
  const isLoading = pageNavigationLoading === item.name;

  const onAcceptClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.Accept,
      partnerName: item.name,
      id: item.id,
    }),
      pageNavigationHandler({ showProgressBar: true, id: 'Accept' }));
  };

  const onRejectClickHandler = () => {
    (newQueryParamsHandler({
      [MODAL_QUERY_NAME]: 'true',
      name: PartnerModalNameEnums.Reject,
      partnerName: item.name,
      id: item.id,
      isRecv: item.isRecv ? String(item.isRecv) : '',
    }),
      pageNavigationHandler({ showProgressBar: true, id: 'Reject' }));
  };

  return (
    <div className="p-2">
      <div className="flex items-center justify-end gap-2">
        <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnBackground">
          {!item.isRecv ? `درخواست به ${item.name}` : `${item.name}`}
        </Dark_Typography>

        <CustomImage
          src={item.image || '/assets/images/man.webp'}
          width="48px"
          height="48px"
          className="rounded-full"
        />
      </div>
      <div className="flex items-center gap-3">
        {item.isRecv && (
          <Dark_Button onClick={onAcceptClickHandler} isLoading={isLoading}>
            <Dark_Typography fontSize="Lable_Medium" className="text-impo_Primary_OnPrimary">
              قبول کردن
            </Dark_Typography>
          </Dark_Button>
        )}

        {!item.isRecv && (
          <div className="w-fit rounded-full px-4 h-10 bg-impo_Neutral_Surface">
            <div className="flex justify-center items-center h-full">
              <Dark_Typography fontSize="Lable_Medium" className="text-impo_Surface_Outline">
                در انتظار...
              </Dark_Typography>
            </div>
          </div>
        )}

        <Dark_Button
          onClick={onRejectClickHandler}
          className="bg-impo_Surface_OutlineVariant border !border-impo_Neutral_Surface max-w-fit"
          isLoading={isLoading}
        >
          <Dark_Typography fontSize="Lable_Medium" className="text-impo_Neutral_OnSurface">
            {item.isRecv ? 'رد کردن' : 'لغو کردن'}
          </Dark_Typography>
        </Dark_Button>
      </div>
    </div>
  );
};

export default RequestGenerator;
