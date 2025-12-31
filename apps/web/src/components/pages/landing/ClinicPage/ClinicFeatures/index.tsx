import CustomTypography from '@components/ui/CustomTypography';

import FeatureItem from './FeatureItem';
import { FeatureList } from './constants';

const ClinicFeatures = () => {
  return (
    <section
      className="mt-12 bg-[url(/assets/images/clinicLanding/maskPattern.webp)] dark:bg-[url(/assets/images/clinicLanding/maskPatternDark.webp)]"
      style={{
        backgroundSize: 'contain',
        backgroundPosition: 'center -11rem',
        backgroundRepeat: 'no-repeat',
      }}
    >
      <div className="lg:w-10/12 lg:mx-auto">
        <CustomTypography
          fontSize="Headline_Small"
          tagType="h2"
          className="text-center mb-2 !text-impo_Neutral_OnBackground"
        >
          چرا کلینیک آنلاین ایمپو؟
        </CustomTypography>
        <CustomTypography
          fontSize="Body_Medium"
          tagType="p"
          className="text-center mx-4 !text-impo_Neutral_OnBackground"
        >
          مشاوره پزشکی اینترنتی یا همان ویزیت آنلاین با پزشک، راهی سریع، امن و مقرون‌به‌صرفه برای دریافت خدمات درمانی
          بدون نیاز به مراجعه حضوری است.
        </CustomTypography>
        <div className="mt-[33px] mx-4 lg:mx-0 grid">
          {FeatureList.map((item, index) => (
            <FeatureItem
              key={index}
              description={item.description}
              image={item.image}
              imageDark={item.imageDark}
              title={item.title}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ClinicFeatures;
