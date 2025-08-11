import CustomImage from '@components/ui/CustomImage';
import emptyComment from '@assets/images/clinicLanding/emptyComment.webp';
import CustomTypography from '@components/ui/CustomTypography';

const EmptyComment = () => {
    return (
        <div className='mt-[39px] grid gap-y-4 justify-center justify-self-center justify-items-center'>
            <CustomImage alt='noComment' src={emptyComment} width={96} height={96} />
            <CustomTypography fontSize="Body_Medium" tagType='p'>هنوز نظری برای پزشک ثبت نشده</CustomTypography>
        </div>
    )
}

export default EmptyComment;