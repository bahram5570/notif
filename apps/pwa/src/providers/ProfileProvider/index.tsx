import { pwaHttp } from '@repo/core/utils/pwaHttp';

import { APP_VERSION } from '@repo/core/constants/app.constants';
import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import HandleLoginProvider from './HandleLoginProvider';
import ProfileProviderContainer from './ProfileProviderContainer';
import { ProfileResponseTypes } from './__hooks__/useGetProfileData/type';

const getData = async () => {
  const payload = {
    type: 0,
    packageName: '',
    version: APP_VERSION,
  };

  return await pwaHttp<ProfileResponseTypes>({ url: 'profile/woman/info', method: 'POST', payload });
};

const ProfileProvider = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['profile'],
    queryFn: getData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <HandleLoginProvider />

      <ProfileProviderContainer>
        <>{children}</>
      </ProfileProviderContainer>
    </HydrationBoundary>
  );
};

export default ProfileProvider;
