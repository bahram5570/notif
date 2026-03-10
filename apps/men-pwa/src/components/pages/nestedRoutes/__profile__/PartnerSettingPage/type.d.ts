import { ResponsePropsType } from '../../PartnerSettingContainer/__hooks__/useGetData/type';

export type DeletePartnerPropsType = Pick<ResponsePropsType, 'jointime' | 'name' | 'profileUrl'>;
