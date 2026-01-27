import { ChildTypeEnum } from '@constants/activation.constants';
import useApi from '@hooks/useApi';
import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useRouter } from 'next/navigation';

import { SubmitHandlerPropsType } from './type';

const useSubmit = ({ childBirthDate, childName, childType }: SubmitHandlerPropsType) => {
  const router = useRouter();
  const { updateProfileData } = useGetProfileData();

  const successHandler = () => {
    updateProfileData();
    router.back();
  };

  const { callApi, isLoading } = useApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'info/breastfeeding/edit',
  });

  const submitHandler = () => {
    const payload = {
      ...(childType !== ChildTypeEnum.Twin && { childName }),
      birthDate: childBirthDate,
      childType,
    };

    callApi(payload);
  };

  return { submitHandler, isLoading };
};

export default useSubmit;
