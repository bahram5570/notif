import { FileInput } from '@repo/core/components/FileInput';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomTextareaInput } from '@repo/core/components/ui/CustomTextareaInput';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';
import { toPersianNumbers } from '@repo/core/utils/numbers';
import { typographyFontStylesMaker } from '@repo/core/utils/system';

// import useFileUpload from '@hooks/useFileUpload';

import { useAnalytics } from '@repo/core/hooks/useAnalytics';
import { useCustomToast } from '@repo/core/hooks/useCustomToast';
import { usePageNavigationLoading } from '@repo/core/hooks/usePageNavigationLoading';
import { useSystem } from '@repo/core/hooks/useSystem';
import { useRouter } from 'next/navigation';

import SpecialistProblemModal from './SpecialistProblemModal';
import useValues from './__hooks__/useValues';
import { SpecialistProblemInputsProps } from './types';

const SpecialistProblemInputs = ({ info, infoHelper, questionValuesHandler, submit }: SpecialistProblemInputsProps) => {
  const router = useRouter();
  const toast = useCustomToast();
  const { callEvent } = useAnalytics();
  const { values, valuesHandler } = useValues();
  const { operatingSystem } = useSystem();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem });
  const loadingId = 'SpecialistProblemInputs';

  const onSuccessHandler = (v: string) => {
    valuesHandler(v, 'fileName');
    router.back();
  };

  // const { fileDataHandler, uploadImageLoading } = useFileUpload({
  //   onSuccess: (v) => onSuccessHandler(v),
  // });

  const paymentHandler = () => {
    callEvent('Clinic_Payment');
    if (values.text.trim() === '') {
      toast.notifyToastHandler({ message: 'اول مشکلت بنویس و بعد ارسال کن', type: 'warning' });
    } else {
      questionValuesHandler({ text: values.text, fileName: values.fileName });
      pageNavigationHandler({ showProgressBar: false, id: loadingId });
    }
  };

  return (
    <>
      <div className="w-full py-4 px-2 rounded-2xl border-[1px] border-impo_Neutral_Surface">
        <CustomTypography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {info}
        </CustomTypography>

        <div className="flex flex-col gap-4 py-4">
          <CustomTextareaInput
            placeholder={infoHelper}
            rows={4}
            value={toPersianNumbers(values.text)}
            style={{ ...typographyFontStyles }}
            onChangeHandler={valuesHandler}
            name="text"
            className="w-full max-h-[100px]  p-2"
          />
        </div>

        <FileInput fileName={values.fileName} valuesHandler={valuesHandler} label="ارسال آزمایش یا گزارش (اختیاری)" />
      </div>

      <div className="w-full mt-auto py-5">
        <CustomButton
          onClick={paymentHandler}
          isLoading={pageNavigationLoading === loadingId}
          className="!bg-impo_PrimaryMan_PrimaryMan !border-impo_PrimaryMan_PrimaryMan"
        >
          {submit}
        </CustomButton>
      </div>

      {/* <SpecialistProblemModal fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} /> */}
    </>
  );
};

export default SpecialistProblemInputs;
