import CustomTypography from '@components/ui/CustomTypography';
import QuestionList from './QuestionList';

const ClinicQuestion = () => {
    return (
        <section className='mb-12'>
            <CustomTypography fontSize="Title_Medium" tagType='h5' className='text-center mx-4 mt-12'>سوالات متداول</CustomTypography>
            <QuestionList />
        </section>
    )
}

export default ClinicQuestion;