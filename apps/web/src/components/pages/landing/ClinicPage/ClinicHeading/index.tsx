import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const ClinicHeading = () => {
    return (
        <div className="mx-[16px] mt-4 grid [grid-template-columns:1fr_40%] items-center justify-between bg-pink-50 px-[16px] rounded-xl">
            <div className='py-[16px]'>
                <h1>
                    <CustomTypography fontSize="Title_Small" className='mb-2' tagType='span'>ویزیت دکتر آنلاین؛ مشاوره پزشکی سریع، </CustomTypography>
                    <CustomTypography fontSize="Title_Small" tagType='span'>تخصصی و مطمئن در </CustomTypography>
                    <CustomTypography fontSize="Title_Medium" tagType='span'>ایمپو</CustomTypography>
                </h1>
            </div>
            <CustomImage
                alt=""
                height={0}
                width={10000}
                src="/assets/images/clinicLanding/heading.webp"
                className="mt-[-50px] w-full h-auto"
            />
        </div>
    )
}

export default ClinicHeading;