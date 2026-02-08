import useGetProfileData from '@providers/ProfileProvider/__hooks__/useGetProfileData';
import { useCulture } from '@repo/core/hooks/useCulture';
import { usePwaApi } from '@repo/core/hooks/usePwaApi';
import { CalendarTypeEnum } from '@repo/core/providers/CultureProvider';
import { useRouter } from 'next/navigation';

const useCalendarTypeSubmit = (calendarType: CalendarTypeEnum) => {
  const router = useRouter();
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
