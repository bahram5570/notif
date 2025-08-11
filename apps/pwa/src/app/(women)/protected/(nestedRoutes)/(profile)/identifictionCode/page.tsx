import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/women/pages/nestedRoutes/profile/IdentifictionCodePage'),
  {
    ssr: false,
  },
);

const IdentificationCode = () => {
  return <DynamicComponentWithNoSSR />;
};

export default IdentificationCode;
