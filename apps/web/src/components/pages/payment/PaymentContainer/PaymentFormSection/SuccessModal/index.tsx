import CustomButton2 from '@components/ui/CustomButton2';
import CustomModal from '@components/ui/CustomModal';
import CustomTypography from '@components/ui/CustomTypography';

import { SuccessModalPropsType } from './type';

const SuccessModal = ({ isOpen, onClose }: SuccessModalPropsType) => {
  return (
    <CustomModal onClose={onClose} position="center" isOpen={isOpen}>
      <div className="p-4 flex flex-col items-center justify-center gap-3">
        <CustomTypography fontSize="Title_Small">اطلاعاتت ثبت شد</CustomTypography>
        <CustomTypography fontSize="Body_Small">
          بعد از بررسی در صورت صحت اطلاعات، اشتراکت فعال و از طریق واتساپ بهت اطلاع‌رسانی می‌شه
        </CustomTypography>

        <CustomButton2 onClick={onClose} className="!rounded-xl">
          فهمیدم
        </CustomButton2>
      </div>
    </CustomModal>
  );
};

export default SuccessModal;
