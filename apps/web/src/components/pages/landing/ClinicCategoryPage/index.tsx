import { SMALL_SCREEN_MAX_WIDTH } from '@constants/app.constants';

import HeaderFooterContainer from '@components/HeaderFooterContainer';

import CategoryDoctorContents from './CategoryDoctorContents';
import CategoryDrList from './CategoryDrList';
import { ClinicTypeProps } from './CategoryDrList/DrCard/types';
import CategoryHeading from './CategoryHeading';
import { HeadingPattern } from './constants';

const ClinicCategoryPage = ({ clinicDataProps, params }: { clinicDataProps: ClinicTypeProps; params: number }) => {
  return (
    <HeaderFooterContainer>
      <div
        className="pt-[85px] w-full md:mt-12"
        style={{
          backgroundImage: `url(/assets/images/clinicLanding/${HeadingPattern[clinicDataProps.categoryTitle as keyof typeof HeadingPattern] || 'headingPattern.webp'})`,
          backgroundSize: 'contain',
          backgroundRepeat: 'no-repeat',
          backgroundPositionY: '20px',
          maxWidth: SMALL_SCREEN_MAX_WIDTH,
        }}
      >
        <CategoryHeading categoryTitle={clinicDataProps.categoryTitle} categoryText={clinicDataProps.categoryText} />
        <CategoryDrList doctorList={clinicDataProps.items} params={params} />
        <CategoryDoctorContents contents={clinicDataProps.htmlDescription} />
      </div>
    </HeaderFooterContainer>
  );
};

export default ClinicCategoryPage;
