'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import Dark_Spinner from '@components/ui/Dark_Spinner';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';

import useDateScript from './__hooks__/useDateScript';
import { BreastfeedingSettingBtnModalPropsType } from './type';

const BreastfeedingSettingBtnModal = ({ name, value }: BreastfeedingSettingBtnModalPropsType) => {
  const dateScript = useDateScript(value.toString());
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const clickHandler = () => {
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true', ['name']: name });
    pageNavigationHandler({ showProgressBar: false, id: name });
  };

  const isLoading = pageNavigationLoading === name;

  return (
    <>
      <div className="w-full flex justify-end items-center" onClick={clickHandler}>
        {isLoading && <Dark_Spinner size={24} />}

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
