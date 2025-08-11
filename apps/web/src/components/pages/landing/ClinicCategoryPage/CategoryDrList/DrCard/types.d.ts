export interface DrCardProps {
    id: string,
    name: string,
    speciality: string,
    nezam: string,
    rateCount: number,
    rate: number,
    image: string,
    active: boolean,
    params: number
}

export interface ClinicTypeProps {
    categoryText: string;
    categoryTitle: string;
    items: DrCardProps[];
    htmlDescription: string;
}