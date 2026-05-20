import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';

import { AssociationInfoResponseType } from '../../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationInfo/type';
import { NewExperienceResponseType, UseSubmitProps } from './types';

const useSubmit = ({ image, text, topicId, associationId, onSuccessNewHandler }: UseSubmitProps) => {
  const { refetchQuery, removeQuery, getQuery, updateQuery } = useCustomReactQuery();

  const associationInfoData = getQuery<AssociationInfoResponseType>({ queryKey: [`associationInfoData`] });

  const router = useCustomRouter();
  let toastMessage = '';

  const successHandler = ({ toast, valid }: NewExperienceResponseType) => {
    if (valid) {
      router.back();
      if (!associationId) {
        setTimeout(() => {
          router.back();
          onSuccessNewHandler();
        }, 0);
      } else {
        if (associationInfoData) {
          const newData = { ...associationInfoData };
          newData.experienceCount = newData.experienceCount + 1;

          updateQuery({ queryKey: [`associationInfoData`], payload: newData });
        }
        removeQuery({ queryKey: [`associationExperienceList`] });
        refetchQuery({ queryKey: [`associationExperiences${associationId}`] });
      }
    } else {
      toastMessage = toast;
    }
  };

  const { isLoading: isSubmitLoading, callApi } = usePwaApi<NewExperienceResponseType>({
    api: 'shareeexperience/v3/experience',
    onSuccess: (v) => successHandler(v),
    method: 'POST',
  });

  const submitHandler = () => {
    callApi({ image, text, topicId, associationId });
  };

  return { submitHandler, isSubmitLoading, toastMessage };
};

export default useSubmit;
