'use client';

import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomButton from '@components/ui/CustomButton';
import CustomInput from '@components/ui/CustomInput';

import useLogin from './__hooks__/useLogin';
import useRevalidate from './__hooks__/useRevalidate';

const RevalidatePage = () => {
  const { password, passwordHandler, loginHandler, confirmed } = useLogin();
  const { tag, tagHandler, revalidateHandler, isLoading } = useRevalidate();

  return (
    <div className="w-full h-full max-w-[400px] px-4 py-10 flex flex-col gap-4">
      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        نام کش هر صفحه url خودشه بدون آدرس سایت.
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground">
        برای نمونه:
      </CustomTypography>

      <CustomTypography fontSize="Body_Large" className="text-impo_Neutral_OnBackground mr-auto">
        {`https://impo.app/period  -->  period`}
      </CustomTypography>

      {!confirmed && (
        <>
          <CustomInput
            value={password}
            fontSize="Body_Large"
            numbersMode="english"
            placeholder="password"
            onValue={passwordHandler}
            style={{ direction: 'ltr' }}
            className="border border-impo_Surface_Outline rounded-full py-1 px-4"
          />

          <CustomButton isDisable={password.trim() === ''} onClick={loginHandler}>
            ورود
          </CustomButton>
        </>
      )}

      {confirmed && (
        <>
          <CustomInput
            value={tag}
            placeholder="url"
            onValue={tagHandler}
            fontSize="Body_Large"
            numbersMode="english"
            style={{ direction: 'ltr' }}
            className="border border-impo_Surface_Outline rounded-full py-1 px-4"
          />

          <CustomButton
            isLoading={isLoading}
            onClick={revalidateHandler}
            isDisable={tag.trim() === ''}
            spinnerClassName="!border-impo_Neutral_Background"
          >
            حذف کش
          </CustomButton>
        </>
      )}
    </div>
  );
};

export default RevalidatePage;
