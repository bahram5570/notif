import { CustomButton } from '@repo/core/components/ui/CustomButton';

import { useRouter } from 'next/navigation';

import { EditIdentyLinkProps } from './types';

const EditIdentyLink = ({ isPhone }: EditIdentyLinkProps) => {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <CustomButton
      onClick={backHandler}
      fontSize="Lable_Large"
      className="!w-[200px] bg-impo_Primary_PrimaryContainer border-impo_Primary_PrimaryContainer mb-3 !text-impo_Black"
    >
      {isPhone ? 'ویرایش شماره همراه' : 'ویرایش ایمیل'}
    </CustomButton>
  );
};

export default EditIdentyLink;
