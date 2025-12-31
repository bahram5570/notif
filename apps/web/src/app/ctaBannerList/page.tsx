import { ctaBannerListService } from '@services/ctaBannerServices';

import CtaBanner from '@components/CtaBanner';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'بنرهای CTA',
  description: 'بنرهای CTA',
  robots: { follow: false, index: false },
};

const CtaBannerList = async () => {
  const { ctaData } = await ctaBannerListService();

  if (!ctaData) {
    return <></>;
  }

  return (
    <div className="w-full flex flex-col items-center gap-20 px-4 py-10">
      {ctaData.length === 0 && <p className="text-center text-[30px] pt-10">هنوز هیچ بنری تعریف نشده!</p>}

      {ctaData.length > 0 &&
        ctaData.map((item, index) => (
          <div className="w-full max-w-[900px] border-2 rounded-2xl p-6" key={index}>
            <p className="text-left md:text-[20px] text-impo_Neutral_OnBackground" dir="ltr">
              {item.name.trim()}
            </p>

            <div className="pointer-events-none">
              <CtaBanner {...item} />
            </div>
          </div>
        ))}
    </div>
  );
};

export default CtaBannerList;
