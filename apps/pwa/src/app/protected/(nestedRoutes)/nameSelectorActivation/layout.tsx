import NameSelectorActivationLayout from '@components/pages/nestedRoutes/NameSelectors/nameSelectorActivation/NameSelectorActivationLayout';

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <NameSelectorActivationLayout>
      <>{children}</>
    </NameSelectorActivationLayout>
  );
};

export default Layout;
