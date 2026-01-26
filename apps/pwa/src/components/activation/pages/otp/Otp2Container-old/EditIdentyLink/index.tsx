import Dark_Button from '@components/ui/Dark_Button';
import { useRouter } from 'next/navigation';

import { EditIdentyLinkProps } from './types';

const EditIdentyLink = ({ isPhone }: EditIdentyLinkProps) => {
  const router = useRouter();

  const backHandler = () => {
    router.back();
  };

  return (
    <Dark_Button
      onClick={backHandler}
      fontSize="Lable_Large"
      className="!w-fit bg-impo_Pink border-impo_Pink text-impo_White"
    >
      {isPhone ? 'ویرایش شماره' : 'ویرایش ایمیل'}
    </Dark_Button>
  );
};

export default EditIdentyLink;
