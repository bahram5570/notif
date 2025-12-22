import errorIcon from '@assets/images/errorIcon.webp';
import logoPayment from '@assets/images/logoPayment.webp';

import CustomImage from '@components/ui/CustomImage';
import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'پرداخت ناموفق ',
  description: 'ایمپو همه جوره در مسیر خودمراقبتی همراهته.',
  robots: { follow: false, index: false },
};

const PaymentError = () => {
  return (
    <div className="w-full flex justify-self-center justify-center h-dvh py-6 px-4">
      <div className="">
        <CustomImage src={logoPayment} alt="logoPayment" className="w-[80px] h-[80px] flex justify-self-center" />
        <CustomTypography fontSize="Lable_Large" className="text-center mt-6 !text-impo_Error_Error">
          پرداختت ناموفق بود
        </CustomTypography>

        <CustomTypography fontSize="Body_Large" className="text-center mt-2 !text-impo_Neutral_OnBackground">
          در صورت پرداخت ناموفق مبلغ کسر شده از حساب شما طی 72 ساعت آینده به حسابتان برگشت داده خواهد شد.
        </CustomTypography>
        <CustomImage src={errorIcon} alt="errorIcon" className="w-[64px] h-[64px] flex justify-self-center mt-3" />

        <CustomLink
          href={'https://impo.app'}
          className="h-10 w-[216px] flex justify-center justify-self-center items-center mx-6  hover:!opacity-100 mt-8 bg-black rounded-full text-center"
        >
          <CustomTypography fontSize="Lable_Large" className="text-center !text-impo_White">
            بازگشت به ایمپو
          </CustomTypography>
        </CustomLink>
      </div>
    </div>
  );
};

export default PaymentError;
