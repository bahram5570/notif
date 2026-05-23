import { useCustomReactQuery } from '@repo/core/hooks/useCustomReactQuery';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { useShareExperienceHandlers } from '@repo/core/hooks/useShareExperienceHandlers';

import { AssociationInfoResponseType } from '../../../../ShareExperienceAssociationItemModal/ShareExperienceAssociationItemContainer/__hooks__/useGetAssociationInfo/type';
import { NewExperienceResponseType, UseSubmitProps } from './types';

const useSubmit = ({ image, text, topicId, associationId, onSuccessNewHandler }: UseSubmitProps) => {
  const { refetchQuery, removeQuery, getQuery, updateQuery } = useCustomReactQuery();
  const { accessOptionHandler } = useShareExperienceHandlers();

  const associationInfoData = getQuery<AssociationInfoResponseType>({ queryKey: [`associationInfoData`] });

  const router = useCustomRouter();
  let toastMessage = '';

  const successHandler = (v: NewExperienceResponseType) => {
    if (v.access.isBan) {
      return accessOptionHandler({
        isBan: v.access.isBan,
        textMessage: v.access.textMessage,
        btnText: v.access.btnText,
      });
    }

    if (v.valid) {
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
      toastMessage = v.toast;
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
