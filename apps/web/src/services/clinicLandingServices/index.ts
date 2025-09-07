import http from '@services/http';

import { ClinicTypeProps } from '@components/pages/landing/ClinicCategoryPage/CategoryDrList/DrCard/types';
import { DoctorInfoTypes } from '@components/pages/landing/ClinicDoctorPage/types';
import { ItemProps } from '@components/pages/landing/ClinicPage/ClinicCategory/CategoryItem/types';

export const clinicCategoryService = async () => {
  const { data, error } = await http<{ items: ItemProps[] }>({
    url: `clinic/list`,
    method: 'GET',
    cache: 'no-store',
  });

  return { error, categoryData: data?.items };
};

export const clinicDoctorService = async (type: number) => {
  const { data, error } = await http<ClinicTypeProps>({
    url: `clinic/doctor/list/${type}`,
    method: 'GET',
    cache: 'no-store',
  });

  return { error, clinicData: data };
};

export const clinicDoctorInfoService = async (doctorId: string, clinicType: number) => {
  const { data, error } = await http<DoctorInfoTypes>({
    url: `clinic/doctor/info/${doctorId}/${clinicType}`,
    method: 'GET',
    cache: 'no-store',
  });

  return { error, doctorData: data };
};

export const clinicDoctorInfoMetaService = async (doctorId: string, clinicType: number) => {
  const { data, error } = await http<Pick<DoctorInfoTypes, 'speciality' | 'name'>>({
    url: `clinic/doctor/info/meta/${doctorId}/${clinicType}`,
    method: 'GET',
    cache: 'no-store',
  });

  return { error, doctorData: data };
};
