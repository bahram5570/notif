import WhatsAppIcon from '@assets/icons/WhatsApp.svg';

import CustomLink from '@components/ui/CustomLink';
import CustomTypography from '@components/ui/CustomTypography';

import { WHATSAPP_NUMBER } from '../constants';

const PaymentWhatsAppNumberContainer = () => {
  return (
    <div className="w-full md:w-11/12 lg:w-10/12 px-4 md:px-0 my-4 mx-auto">
      <div className="mt-4 px-9 md:px-[50px] py-4 md:py-[22px] rounded-3xl  md:block flex flex-col items-center justify-center bg-impo_Surface_SurfaceVariant">
        <div className="md:block flex flex-col items-center justify-center">
          <CustomTypography fontSize="Title_Large" className="!text-impo_Neutral_OnBackground">
            ارتباط با ما
          </CustomTypography>
          <CustomTypography fontSize="Body_Large" className="!text-impo_Neutral_OnBackground">
            در صورتی که مشکل یا سوالی برات پیش اومد، از طریق واتساپ باهامون در ارتباط باش:
          </CustomTypography>
        </div>
        <div className="flex items-end justify-end ">
          <CustomLink
            href={WHATSAPP_NUMBER}
            target="_blank"
            style={{ border: `1px solid ` }}
            className="flex items-center justify-center px-4 py-2 rounded-full my-4 gap-1 !text-impo_Primary_Primary border-impo_Primary_Primary"
          >
            <WhatsAppIcon className="!fill-impo_Primary_Primary" />
            <CustomTypography fontSize="Lable_Medium" className="!text-impo_Primary_Primary">
              ارتباط از طریق واتساپ
            </CustomTypography>
          </CustomLink>
        </div>
      </div>
    </div>
  );
};

export default PaymentWhatsAppNumberContainer;
