import { pwaHttp } from '@repo/core/utils/pwaHttp';

import { HydrationBoundary, QueryClient, dehydrate } from '@tanstack/react-query';

import ProfileProviderContainer from './ProfileProviderContainer';
import { ProfileResponseTypes } from './__hooks__/useGetProfileData/type';

const getData = async () => {
  return await pwaHttp<ProfileResponseTypes>({ url: 'info/allDatav5', method: 'GET' });
};

const ProfileProvider = async ({ children }: { children: React.ReactNode }) => {
  const queryClient = new QueryClient();

  await queryClient.prefetchQuery({
    queryKey: ['profile'],
    queryFn: getData,
  });

  return (
    <HydrationBoundary state={dehydrate(queryClient)}>
      <ProfileProviderContainer>
        <>{children}</>
      </ProfileProviderContainer>
    </HydrationBoundary>
  );
};

export default ProfileProvider;
