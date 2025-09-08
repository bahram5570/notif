import { RoutinResponseTypes } from '@components/women/pages/nestedRoutes/routin/RoutinContainer/__hooks__/useGetData/types';

type ItemType = Pick<RoutinResponseTypes, 'cta'>;

export interface RoutinCtaPropsType extends ItemType {}
