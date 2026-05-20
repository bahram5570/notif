import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useCulture } from '@repo/core/hooks/useCulture';
import { useCustomRouter } from '@repo/core/hooks/useCustomRouter';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';

const useCalendarTypeSubmit = (calendarType: CalendarTypeEnum) => {
  const router = useCustomRouter();
  const { cultureHandler } = useCulture();
  const { data: profileData, updateProfileData } = useGetProfileData();

  const successHandler = () => {
    cultureHandler('calendarType', calendarType);
    updateProfileData();
    router.back();
  };

  const { callApi, isLoading } = usePwaApi({
    method: 'PUT',
    onSuccess: successHandler,
    api: 'profile/woman/info',
  });

  const submitHandler = () => {
    if (profileData) {
      const { name, birthDate, cycleLength, periodLength, sexualStatus } = profileData;

      const payload = {
        name,
        birthDate,
        cycleLength,
        calendarType,
        periodLength,
        sexualStatus,
      };

      callApi(payload);
    }
  };

  return { submitHandler, isLoading };
};

export default useCalendarTypeSubmit;
