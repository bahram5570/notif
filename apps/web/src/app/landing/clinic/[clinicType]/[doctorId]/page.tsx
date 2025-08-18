import ClinicDoctorPage from '@components/pages/landing/ClinicDoctorPage';
import { HOST_URL } from '@constants/links.constants';
import { clinicDoctorInfoService } from '@services/clinicLandingServices';
import { Metadata } from 'next';

export async function generateMetadata({ params }: { params: { doctorId: string, clinicType: number } }): Promise<Metadata> {
    const { doctorData } = await clinicDoctorInfoService(params.doctorId, params.clinicType);

    if (doctorData) {
        return {
            title: `مشاوره و ویزیت آنلاین دکتر ${doctorData.name} ${doctorData.speciality}` || '',
            robots: 'noindex, nofollow',
            description: `مشاوره و ویزیت آنلاین دکتر ${doctorData.name} ${doctorData.speciality} در ایمپو` || '',
            alternates: {
                canonical: `${HOST_URL}/landing/clinic/${params.clinicType}/${params.doctorId}`,
            },
        };
    } else {
        return {
            title: '',
            robots: 'index, follow',
            description: '',
            alternates: {
                canonical: `${HOST_URL}/landing/clinic/${params.clinicType}/${params.doctorId}`,
            },
        };
    }
}

const ClinicDoctor = async ({ params }: { params: { doctorId: string, clinicType: number } }) => {
    const { doctorData } = await clinicDoctorInfoService(params.doctorId, params.clinicType);
    if (!doctorData) return undefined;

    return (
        <ClinicDoctorPage {...doctorData} />
    )
}

export default ClinicDoctor