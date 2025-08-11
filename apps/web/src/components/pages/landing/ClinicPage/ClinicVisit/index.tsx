import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import roadmapVisit from '@assets/images/clinicLanding/roadmapVisit.webp'

import { COLORS_LIST } from '@theme/colors';
import CustomLink from '@components/ui/CustomLink';
import VisitList from './VisitList';
import { PWA_LINK_WOMEN_URL } from '@constants/links.constants';

const ClinicVisit = () => {
    return (
        <section className="mt-12">
            <CustomTypography fontSize="Title_Medium" tagType='h2' className='text-center mx-4 mb-[27px]'>چطور از ایمپو ویزیت آنلاین بگیرم؟</CustomTypography>
            <div className='flex mx-8 gap-x-[15px] items-center'>
                <CustomImage
                    alt="roadmapVisit"
                    height={0}
                    width={10000}
                    src={roadmapVisit}
                    className='w-[70px] h-auto'
                />
                <VisitList />
            </div>
            <div className='mx-4 mt-9'>
                <CustomLink
                    href={PWA_LINK_WOMEN_URL}
                    className="h-[40px] lg:h-[60px] p-6 flex items-center justify-center rounded-full"
                    style={{ backgroundColor: COLORS_LIST.Primary_Primary }}
                >
                    <CustomTypography fontSize="Lable_Large" color="Primary_OnPrimary">
                        دریافت ویزیت آنلاین
                    </CustomTypography>
                </CustomLink>
            </div>
        </section>
    )
}

export default ClinicVisit;