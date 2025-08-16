import UserTracking from './UserTracking';

const UserTrackingProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <>
      <UserTracking />
      <>{children}</>
    </>
  );
};

export default UserTrackingProvider;
