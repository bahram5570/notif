import dynamic from 'next/dynamic';

const DynamicComponentWithNoSSR = dynamic(
  () => import('@components/pages/nestedRoutes/__profile__/IdentifictionCodePage'),
  {
    ssr: false,
  },
);

const IdentificationCode = () => {
  return <DynamicComponentWithNoSSR />;
};

export default IdentificationCode;
