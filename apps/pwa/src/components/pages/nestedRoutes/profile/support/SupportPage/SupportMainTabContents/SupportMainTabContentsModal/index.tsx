import ArrowIcon from '@assets/shared/icons/calendarArrow.svg';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODALS } from '@providers/ModalsQueryParamsProvider/modalsConstants';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';
import { useWidgetActions } from '@repo/core/hooks/useWidgetActions';
import { ActionTypes } from '@repo/core/providers/WidgetActionsProvider';
import { useRouter } from 'next/navigation';

import { SupportMainTabContentsModalTypes } from './types';

const SupportMainTabContentsModal = ({ supportSheets }: SupportMainTabContentsModalTypes) => {
  const router = useRouter();
  const { actionHandler } = useWidgetActions();
  const { getQueryParams } = useQueryParamsHandler();

  const selectHandler = (action: ActionTypes) => {
    router.back();

    setTimeout(() => {
      actionHandler(action);
    }, 100);
  };

  const isOpen = getQueryParams(MODALS.SUPPORT_SHEETS) !== null;

  return (
    <>
      <CustomModal isOpen={isOpen} isFullScreen={false} isSlidingMode={true}>
        <div className="flex flex-col gap-2">
          {supportSheets.map((item, index) => (
            <div
              key={index}
              onClick={() => selectHandler(item.action)}
              className="w-full bg-impo_Neutral_Surface rounded-2xl p-4"
            >
              <CustomTypography fontSize="Lable_MediumProminet" className="text-impo_Primary_Primary ml-auto">
                {item.title}
              </CustomTypography>

              <div className="w-full flex justify-between items-start gap-4 mt-2">
                <ArrowIcon className="w-5 h-auto stroke-impo_Surface_Outline" />

                <CustomTypography fontSize="Body_Small" className="text-impo_Surface_Outline">
                  {item.description}
                </CustomTypography>
              </div>
            </div>
          ))}
        </div>
      </CustomModal>
    </>
  );
};

export default SupportMainTabContentsModal;
