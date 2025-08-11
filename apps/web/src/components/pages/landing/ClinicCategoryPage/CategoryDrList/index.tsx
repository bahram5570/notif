import DrCard from './DrCard';
import { DrCardProps } from './DrCard/types';

const CategoryDrList = ({ doctorList, params }: { doctorList: DrCardProps[], params: number }) => {
    return (
        <section className='mx-3 grid gap-y-4 mb-10'>
            {
                doctorList && doctorList.map((item, i) => (
                    <DrCard
                        id={item.id}
                        rateCount={item.rateCount}
                        rate={item.rate}
                        name={item.name}
                        image={item.image}
                        nezam={item.nezam}
                        speciality={item.speciality}
                        active={item.active}
                        params={params}
                        key={i}
                    />
                ))
            }
        </section>
    )
}

export default CategoryDrList;
