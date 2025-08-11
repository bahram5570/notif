import { COLORS_LIST } from '@theme/colors';
import { CommentItemProps } from './types';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';
import StarRating from '../../../../../StarRating';

const CommentItem = ({ drAvatar, drBio, userAvatar, userRate = 4, userText, userName }: CommentItemProps) => {
    return <div className='rounded-[16px] px-[8px] py-[16px] mx-4' style={{ backgroundColor: COLORS_LIST.Surface_SurfaceVariant }}>
        <div className='flex gap-x-2'>
            <CustomImage
                alt="userAvatar"
                height={56}
                width={56}
                src={userAvatar}
            />
            <div className='grid gap-y-2'>
                <CustomTypography fontSize="Body_Large" tagType='h6' className='pt-1'>{userName}</CustomTypography>
                <StarRating rating={userRate} />
            </div>
        </div>
        <CustomTypography fontSize="Body_Medium" tagType='p' className='my-3'>{userText}</CustomTypography>
        <div className='flex items-center gap-x-2 mt-[18px]'>
            <CustomImage
                alt="userAvatar"
                height={1000}
                width={1000}
                src={drAvatar}
                className='w-[40px] h-auto'
            />
            <span className='h-[25px] w-[1px] block bg-[#D0D0D0]'></span>
            <CustomTypography fontSize="Body_Small" tagType='p'>{drBio}</CustomTypography>
        </div>
    </div>
}

export default CommentItem;