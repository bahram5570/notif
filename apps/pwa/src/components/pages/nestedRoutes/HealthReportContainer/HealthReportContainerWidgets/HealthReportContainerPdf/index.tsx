import ImpoIcon from '@assets/shared/icons/impoName.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import WidgetGenerator from '@components/Widgets/widgetGenerator';
import { MAX_SCREEN_WIDTH } from '@repo/core/constants/app.constants';
import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { WidgetsEnum } from '@repo/core/providers/WidgetActionsProvider';

import HealthReportDate from './HealthReportDate';
import usePdfDownload from './__hooks__/usePdfDownload';
import { HealthReportContainerPdfProps } from './types';

const HealthReportContainerPdf = ({ data }: HealthReportContainerPdfProps) => {
  const { callEvent } = useAnalytics();

  const { ref, downloadStatus, downloadStatusHandler } = usePdfDownload();

  const PeriodReportType = data.widgets.find((widget) => widget.type === WidgetsEnum.PeriodReportCard);
  const NotData = PeriodReportType?.data.items.length === undefined || PeriodReportType?.data.items.length < 3;

  const clickHandler = () => {
    downloadStatusHandler('preparing');
    callEvent('GetHealthReportAsPdf');
  };

  return (
    <>
      <div
        className="w-full mt-auto py-4 fixed bottom-0 left-0 right-0 mx-auto  z-50 px-4 flex justify-center items-center bg-impo_Neutral_Surface"
        style={{ maxWidth: MAX_SCREEN_WIDTH }}
      >
        <CustomButton
          fontSize="Lable_Large"
          className="!bg-impo_Pink_500 !text-impo_White !border-impo_Pink_500"
          isDisable={NotData}
          isLoading={downloadStatus !== null}
          onClick={clickHandler}
        >
          دریافت pdf گزارش سلامت
        </CustomButton>
      </div>

      {downloadStatus !== null && (
        <>
          <div className="fixed top-0 left-0 right-0 bottom-0 -z-40 bg-impo_White " />

          <div className="fixed top-0 left-0 right-0 bottom-0 w-full -z-50 bg-impo_Grey_50 ">
            <div ref={ref} className="min-w-[210mm] max-w-[210mm] h-fit min-h-[297mm] px-8 py-6 bg-impo_Grey_50 ">
              <div className="w-full flex justify-between items-center border-b-[1px] pb-4 mb-4  dark:border-b-impo_Neutral_OnSurface border-b-impo_Neutral_Surface">
                <CustomTypography
                  fontSize="Lable_Small"
                  className="dark:text-impo_Surface_Outline text-impo_Surface_OutlineVariant"
                >
                  Impo.app
                </CustomTypography>

                <div className="flex items-center gap-2">
                  <CustomTypography fontSize="Lable_Small" className="text-impo_Black">
                    بزرگترین پلتفرم حوزه سلامت قاعدگی زنان
                  </CustomTypography>

                  <ImpoIcon className="w-[72px] h-auto fill-impo_Primary_Primary" />
                </div>
              </div>

              <div className="w-full flex flex-col items-end pb-4">
                <CustomTypography fontSize="Headline_Medium" className="text-impo_Black">
                  {` گزارش دوره ${PeriodReportType?.data?.items?.length} ماهه پریود`}
                </CustomTypography>

                {data && <HealthReportDate data={data} />}
              </div>

              <div className="w-full flex flex-col items-end pb-6">
                <CustomTypography fontSize="Body_Large" className="text-impo_Black">
                  این گزارش نشون دهنده زمان های پیش بینی شده و اتفاق افتاده پریود شماست.
                </CustomTypography>
                <CustomTypography fontSize="Body_Large" className="text-impo_Black">
                  میتونی این گزارش رو برای خودت ذخیره کنی و یا برای پزشکت بفرستی.
                </CustomTypography>
              </div>

              <div className="w-full flex flex-col gap-4">
                {data.widgets.map((widget, index) => (
                  <WidgetGenerator {...widget} isPdfDownloading={true} key={`pdf-${index}`} />
                ))}
              </div>
            </div>
          </div>
        </>
      )}
    </>
  );
};

export default HealthReportContainerPdf;
