import ClinicCategoryPage from '@components/pages/landing/ClinicCategoryPage';
import { HOST_URL } from '@constants/links.constants';
import { clinicDoctorService } from '@services/clinicLandingServices';
import http from '@services/http';
import { Metadata } from 'next';

type ClinicMetaData = {
    metaTitle: string,
    metaDescription: string
}

const getClinicMetaData = async (type: number) => {
    return await http<ClinicMetaData>({
        method: 'GET',
        cache: 'no-store',
        url: `clinic/metadata/${type}`,
    });
};

export async function generateMetadata({ params }: { params: { clinicType: number } }): Promise<Metadata> {
    const { data, error } = await getClinicMetaData(params.clinicType);

    if (data) {
        return {
            title: data.metaTitle || '',
            robots: 'index, follow',
            description: data.metaDescription || '',
            alternates: {
                canonical: `${HOST_URL}/landing/clinic/${params.clinicType}`,
            },
        };
    } else {
        return {
            title: error?.message,
        };
    }
}

const ClinicCategory = async ({ params }: { params: { clinicType: number } }) => {
    const { clinicData } = await clinicDoctorService(params.clinicType);

    const clinicTypeProps = {
        categoryText: clinicData?.categoryText || '',
        categoryTitle: clinicData?.categoryTitle || '',
        items: clinicData?.items ?? [],
        htmlDescription: clinicData?.htmlDescription || '',
    };

    return (
        <ClinicCategoryPage clinicDataProps={clinicTypeProps} params={params.clinicType} />
    )
}

export default ClinicCategory