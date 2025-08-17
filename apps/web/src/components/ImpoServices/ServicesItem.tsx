'use client';

import { ImpoServiceData } from './constants';
import CustomLink from '@components/ui/CustomLink';
import CustomImage from '@components/ui/CustomImage';
import CustomTypography from '@components/ui/CustomTypography';

const ServicesItem = () => {
    return (
        <div className='grid md:grid-flow-col auto-cols-fr grid-cols-3 md:gap-x-[50px] gap-y-6 gap-x-[27px] mt-8 rounded-[24px] p-6 md:py-[25px] md:*:px-[37px]' style={{ boxShadow: '0 4px 15px 0 rgba(58, 112, 191, 0.10)' }}>
            {
                ImpoServiceData.map((item, index) => (
                    <CustomLink href={item.url} key={index} className='!p-0'>
                        <div className='grid gap-y-3 justify-self-center justify-items-center'>
                            <CustomImage width={1000} height={0} className='w-[70px] h-[70px] md:w-[90px] md:h-[90px] object-cover' alt={item.title} src={item.image} />
                            <CustomTypography fontSize="Body_Medium" className='text-center'>{item.title}</CustomTypography>
                        </div>
                    </CustomLink>
                ))
            }
        </div>
    )
}
export default ServicesItem;