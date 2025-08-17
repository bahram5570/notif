import CustomTypography from '@components/ui/CustomTypography';
import ServicesItem from './ServicesItem';

const ImpoServices = () => {
    return (
        <section className="w-full flex flex-col items-center px-4">
            <CustomTypography fontSize="Headline_Small">خدمات ایمپو</CustomTypography>
            <ServicesItem />
        </section>
    )
}
export default ImpoServices;