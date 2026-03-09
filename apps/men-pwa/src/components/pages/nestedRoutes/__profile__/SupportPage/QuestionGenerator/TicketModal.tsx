import CheckCircle from '@assets/icons/check_circle.svg';
import { CustomButton } from '@repo/core/components/ui/CustomButton';
import { CustomModal } from '@repo/core/components/ui/CustomModal';
import { CustomTypography } from '@repo/core/components/ui/CustomTypography';

import { useRouter } from 'next/navigation';

const TicketModal = ({ text }: { text: string }) => {
  const router = useRouter();

  const onClickHandler = () => {
    router.back();
  };

  return (
    <CustomModal isOpen className="mx-3 !py-4 !px-6 !min-h-[175px]">
      <div className="flex flex-col gap-4 justify-center items-center max-w-sm">
        <CheckCircle />
        <CustomTypography fontSize="Title_Medium" className="text-impo_Neutral_OnSurface">
          ثبت تیکت
        </CustomTypography>
        <CustomTypography fontSize="Body_Medium" className="text-impo_Neutral_OnSurface text-center">
          {text}
        </CustomTypography>
        <CustomButton
          className="mt-auto !bg-impo_PrimaryMan_PrimaryMan border-none"
          onClick={onClickHandler}
          fontSize="Lable_Large"
        >
          باشه
        </CustomButton>
      </div>
    </CustomModal>
  );
};

export default TicketModal;
