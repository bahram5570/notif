'use client';

import ProgressCycleLoading from '@components/ProgressCycleLoading';
import useRouteSequence from '@hooks/useRouteSequence';

import { NAME_SELECTOR_TABINDEX_QUERY_NAME } from '../../../nameSelector/NameSelectorLayout/constants';
import { NameSelectorTabsEnum } from '../../../nameSelector/NameSelectorLayout/enum';
import useNameSelectorActivationSubmit from '../../__hooks__/useNameSelectorActivationSubmit';

const NameSelectorActivationCompletionPage = () => {
  const { sequenceHandler } = useRouteSequence();
  const { isSuccess } = useNameSelectorActivationSubmit();

  const completeHandler = () => {
    sequenceHandler([
      `/protected/cycle`,
      `/protected/cycle`,
      `/protected/cycle`,
      `/protected/nameSelector?${NAME_SELECTOR_TABINDEX_QUERY_NAME}=${NameSelectorTabsEnum.Suggestion}`,
    ]);
  };

  return (
    <div className="w-full h-full min-h-[100dvh] flex items-center bg-impo_Neutral_Background">
      <ProgressCycleLoading
        isSuccess={isSuccess}
        onComplete={completeHandler}
        image={'/assets/images/selectName.webp'}
        titles={{
          main: 'در حال ساخت و پردازش یک لیست از اسامی خاص، متناسب با فیلترهای انتخابی‌ات هستیم',
          subTitle1: 'فقط چند ثانیه بهمون زمان بده ',
          subTitle2: 'تا لیست پیشنهادی رو بسازیم',
        }}
      />
    </div>
  );
};

export default NameSelectorActivationCompletionPage;
