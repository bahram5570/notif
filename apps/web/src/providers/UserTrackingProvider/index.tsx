import UserTracking from './UserTracking';

const UserTrackingProvider = ({ children }: { children: React.ReactNode }) => {
  return (
    <UserTracking>
      <>{children}</>
    </UserTracking>
  );
};

export default UserTrackingProvider;
