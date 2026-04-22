import { ClinicInfoResponseTypes } from '@repo/core/components/clinic';

type DrTypes = Pick<ClinicInfoResponseTypes, 'info'>['info']['dr'][0];
type InfoTypes = Pick<DrTypes, 'firstName' | 'lastName' | 'image' | 'nezamNumber' | 'speciliaty'>;

export interface DoctorInfoProps extends InfoTypes {}
