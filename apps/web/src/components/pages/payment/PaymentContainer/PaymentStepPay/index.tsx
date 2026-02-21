'use client';

import WhatsAppIcon from '@assets/icons/WhatsApp.svg';
import TelegramIcon from '@assets/icons/telegram2.svg';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import CustomLink from '@components/ui/CustomLink';

import useCopy from '../__hooks__/useCopy';
import { TELEGRAM_LINK, WHATSAPP_NUMBER } from '../constants';

const PaymentStepPay = () => {
  const { copylink } = useCopy();
  return (
    <div className="  flex flex-col gap-6 sm:justify-start justify-center sm:items-start items-center pt-20 md:pt-0  ">
      <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnBackground">
        مراحل پرداخت:
      </CustomTypography>
      <div className="flex flex-col sm:justify-start justify-center sm:items-start items-center gap-3">
        <ol className="list-disc pr-4">
          <li className="mb-2 !text-impo_Neutral_OnBackground">
            <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              ورود به سایت Paypal
            </CustomTypography>
          </li>
          <li className="mb-2 !text-impo_Neutral_OnBackground">
            <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              حالا روی گزینه Send Money کلیک کن.
            </CustomTypography>
          </li>
          <li className="mb-2 !text-impo_Neutral_OnBackground">
            <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              آدرس ایمیل
              <u className="cursor-pointer" onClick={copylink}>
                sajjadiamirhossein30@gmail.com
              </u>
              رو وارد کن.
            </CustomTypography>
          </li>
          <li className="mb-2 !text-impo_Neutral_OnBackground">
            <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              {' '}
              مبلغ مورد نظر رو وارد کن.{' '}
            </CustomTypography>
          </li>
          <li className="mb-2 !text-impo_Neutral_OnBackground">
            <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              اگه دوست داری میتونی توضیحات پرداخت رو اضافه کنی.
            </CustomTypography>
          </li>
          <li className="mb-2 !text-impo_Neutral_OnBackground">
            <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              روی گزینه Continue کلیک کن.
            </CustomTypography>
          </li>
          <li className="mb-2 !text-impo_Neutral_OnBackground">
            <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              اطلاعات کارت اعتباریت رو وارد کن.
            </CustomTypography>
          </li>
          <li className="mb-2 !text-impo_Neutral_OnBackground">
            <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
              {' '}
              و در نهایت روی گزینه Pay Now کلیک کن.
            </CustomTypography>
          </li>
        </ol>
      </div>

      <div className="  flex flex-col gap-6 sm:justify-start justify-center sm:items-start items-center pt-20 md:pt-0  ">
        <CustomTypography fontSize="Title_Small" className=" !text-impo_Neutral_OnBackground">
          قدم سوم:
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className=" !text-impo_Neutral_OnBackground">
          بعد از پرداخت، تصویر و مستندات پرداخت و همچنین شماره‌ای که با اون توی ایمپو ثبت‌نام کردید رو از طریق یکی از
          راه‌های زیر برامون ارسال کن:
        </CustomTypography>
        <div className="flex flex-col sm:flex-row gap-3">
          <CustomLink
            href={TELEGRAM_LINK}
            target="_blank"
            style={{ border: `1px solid` }}
            className="flex items-center justify-center px-4 py-2 rounded-full my-4 gap-1 !text-impo_Primary_Primary !border-impo_Neutral_Surface"
          >
            <TelegramIcon className="w-[30px] h-auto" />
            <CustomTypography className="!text-impo_Neutral_OnSurface" fontSize="Body_Medium">
              ارتباط از طریق تلگرام
            </CustomTypography>
          </CustomLink>
          <CustomLink
            href={WHATSAPP_NUMBER}
            target="_blank"
            style={{ border: `1px solid ` }}
            className="flex items-center justify-center px-4 py-2 rounded-full my-4 gap-1 !text-impo_Primary_Primary !border-impo_Neutral_Surface"
          >
            <WhatsAppIcon className="!fill-impo_Success_Success" />
            <CustomTypography className="!text-impo_Neutral_OnSurface" fontSize="Body_Medium">
              ارتباط از طریق واتساپ
            </CustomTypography>
          </CustomLink>
        </div>
      </div>
      <div className="  flex flex-col gap-6 sm:justify-start justify-center sm:items-start items-center pt-20 md:pt-0  ">
        <CustomTypography fontSize="Title_Small" className="!text-impo_Neutral_OnSurface">
          قدم چهارم:
        </CustomTypography>
        <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnSurface">
          در کوتاه‌ترین زمان ممکن پشتیبانی ما پاسخ پیامت رو می‌ده و اکانتت فعال می‌شه.
        </CustomTypography>
      </div>
    </div>
  );
};

export default PaymentStepPay;
