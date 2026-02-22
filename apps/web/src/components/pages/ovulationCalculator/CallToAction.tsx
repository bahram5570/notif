import { ctaBannerService } from '@services/ctaBannerServices';

import CtaBanner from '@components/CtaBanner';

const CallToAction = async ({ name }: { name: string }) => {
  const { ctaData } = await ctaBannerService(name);

  return <>{ctaData && <CtaBanner {...ctaData} />}</>;
};

export default CallToAction;
