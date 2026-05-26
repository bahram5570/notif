'use client';

import { CustomSpinner } from '@repo/core/components/ui/CustomSpinner';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@repo/core/constants/modal.constants';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useQueryParamsHandler } from '@repo/core/hooks/useQueryParamsHandler';

import useDateScript from './__hooks__/useDateScript';
import { BreastfeedingSettingBtnModalPropsType } from './type';

const BreastfeedingSettingBtnModal = ({ name, value }: BreastfeedingSettingBtnModalPropsType) => {
  const dateScript = useDateScript(value.toString());
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, navigationLoadingId } = usePageNavigationLoading();

  const clickHandler = () => {
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', ['name']: name });
    pageNavigationHandler({ id: name });
  };

  const isLoading = navigationLoadingId === name;

  return (
    <>
      <div className="w-full flex justify-end items-center" onClick={clickHandler}>
        {isLoading && <CustomSpinner size={24} />}

        {!isLoading && (
          <CustomTypography fontSize="Body_Large" className="text-impo_Surface_OnSurfaceVariant">
            {dateScript}
          </CustomTypography>
        )}
      </div>
    </>
  );
};

export default BreastfeedingSettingBtnModal;
