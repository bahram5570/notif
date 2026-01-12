import { typographyFontStylesMaker } from '@hooks/useTypographyMaker/__utils__';
import { toPersianNumbers } from '@utils/numbers';

import Dark_Button from '@components/ui/Dark_Button';
import Dark_Typography from '@components/ui/Dark_Typography';
import useAnalytics from '@hooks/useAnalytics';
import useCustomToast from '@hooks/useCustomToast';
import useFileUpload from '@hooks/useFileUpload';
import useOperatingSystem from '@hooks/useOperatingSystem';
import usePageNavigationLoading from '@hooks/usePageNavigationLoading';
import { useRouter } from 'next/navigation';

import FileInput from './FileInput';
import SpecialistProblemModal from './SpecialistProblemModal';
import useValues from './__hooks__/useValues';
import { SpecialistProblemInputsProps } from './types';

const SpecialistProblemInputs = ({ info, infoHelper, questionValuesHandler }: SpecialistProblemInputsProps) => {
  const router = useRouter();
  const { onToast } = useCustomToast();
  const { callEvent } = useAnalytics();
  const { values, valuesHandler } = useValues();
  const { operatingSystem } = useOperatingSystem();
  const { pageNavigationHandler, pageNavigationLoading } = usePageNavigationLoading();

  const typographyFontStyles = typographyFontStylesMaker({ fontSize: 'Body_Small', operatingSystem });
  const loadingId = 'SpecialistProblemInputs';

  const onSuccessHandler = (v: string) => {
    valuesHandler({ name: 'fileName', value: v });
    router.back();
  };

  const { fileDataHandler, uploadImageLoading } = useFileUpload({
    onSuccess: (v) => onSuccessHandler(v),
  });

  const paymentHandler = () => {
    callEvent('Clinic_Payment');
    if (values.text.trim() === '') {
      onToast({ message: 'اول مشکلت بنویس و بعد ارسال کن' });
    } else {
      questionValuesHandler({ text: values.text, fileName: values.fileName });
      pageNavigationHandler({ showProgressBar: false, id: loadingId });
    }
  };

  return (
    <>
      <div className="w-full py-4 px-2 rounded-2xl border-[1px] border-impo_Neutral_Surface">
        <Dark_Typography fontSize="Body_Small" className="text-impo_Neutral_OnBackground">
          {info}
        </Dark_Typography>

        <div className="flex flex-col gap-4 py-4">
          <textarea
            rows={4}
            placeholder={infoHelper}
            value={toPersianNumbers(values.text)}
            style={{ direction: 'rtl', ...typographyFontStyles }}
            onChange={(e) => valuesHandler({ name: 'text', value: e.target.value })}
            className="w-full max-h-[100px] rounded-xl text-right p-2 resize-none outline-none bg-impo_Neutral_Background text-impo_Neutral_OnBackground placeholder:text-impo_Surface_OutlineVariant"
          />
        </div>

        <FileInput fileName={values.fileName} valuesHandler={valuesHandler} />
      </div>

      <div className="w-full mt-auto pt-5">
        <Dark_Button onClick={paymentHandler} isLoading={pageNavigationLoading === loadingId}>
          مرحله بعد
        </Dark_Button>
      </div>

      <SpecialistProblemModal fileDataHandler={fileDataHandler} uploadImageLoading={uploadImageLoading} />
    </>
  );
};

export default SpecialistProblemInputs;
