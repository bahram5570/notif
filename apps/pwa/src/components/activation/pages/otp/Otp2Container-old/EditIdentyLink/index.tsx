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
      className="!w-fit bg-impo_Pink border-impo_Pink text-impo_White"
    >
      {isPhone ? 'ویرایش شماره' : 'ویرایش ایمیل'}
    </CustomButton>
  );
};

export default EditIdentyLink;
