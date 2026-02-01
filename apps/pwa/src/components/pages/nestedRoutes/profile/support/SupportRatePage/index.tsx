'use client';

import { useState } from 'react';

import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@utils/numbers';

import MainPageLayout from '@components/MainPageLayout';
import { HEADER_HEIGHT } from '@components/MainPageLayout/constants';
import { MODAL_QUERY_NAME } from '@components/ui/CustomModal/constants';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import useQueryParamsHandler from '@hooks/useQueryParamsHandler';
import useOperatingSystem from '@repo/core/hooks/useOperatingSystem';

import RateModal from './RateModal';
import StarRate from './StarRate';
import { RateValuesType, ValuesHandlerTypes } from './type';

const SupportRatePage = () => {
  const { operatingSystem } = useOperatingSystem();
  const [rateValues, setRateValues] = useState<RateValuesType>({ rate: 0, rateDescription: '' });
  const { newQueryParamsHandler } = useQueryParamsHandler();
  const { pageNavigationHandler } = usePageNavigationLoading();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Medium', operatingSystem });

  const valuesHandler: ValuesHandlerTypes = (v) => {
    setRateValues({ ...rateValues, [v.name]: v.value });
  };

  const onClickHandler = () => {
    newQueryParamsHandler({ [MODAL_QUERY_NAME]: 'true' });
    pageNavigationHandler({ showProgressBar: true, id: 'rateSupport' });
  };

  return (
    <MainPageLayout rightElement="BackButton" rightElementScript="ثبت نظر" paddingTop={0}>
      <div className="flex flex-col items-end gap-3 min-h-[100dvh] p-4" style={{ paddingTop: HEADER_HEIGHT + 16 }}>
        <div className="flex flex-col gap-10 w-full">
          <StarRate valuesHandler={valuesHandler} rate={rateValues.rate} />
          <div className="w-full p-3 rounded-xl bg-impo_Surface_SurfaceVariant">
            <div className="flex flex-col gap-4">
              <textarea
                rows={5}
                placeholder={
                  'لطفا نظرت رو در اینجا برامون بنویس تا بتونیم بررسی کنیم و در آینده سرویس بهتری ارائه بدیم'
                }
                value={toPersianNumbers(rateValues.rateDescription)}
                onChange={(e) => valuesHandler({ name: 'rateDescription', value: e.target.value })}
                className="w-full max-h-[100px] rounded-xl text-right p-2 resize-none outline-none bg-impo_Surface_SurfaceVariant text-impo_Neutral_OnBackground"
                style={{ ...typographyFontStyles }}
              />
            </div>
          </div>
        </div>

        <div
          onClick={onClickHandler}
          style={{
            cursor: `${rateValues.rate ? 'auto' : 'not-allowed'}`,
            opacity: `${rateValues.rate ? '1' : '0.5'}`,
          }}
          className="w-full flex justify-center items-center rounded-full py-3 px-6 mt-auto bg-impo_Primary_Primary"
        >
          <CustomTypography className="text-impo_PrimaryMan_OnPrimaryMan" fontSize="Title_Small">
            ارسال نظر
          </CustomTypography>
        </div>
      </div>
      <RateModal {...rateValues} />
    </MainPageLayout>
  );
};

export default SupportRatePage;
