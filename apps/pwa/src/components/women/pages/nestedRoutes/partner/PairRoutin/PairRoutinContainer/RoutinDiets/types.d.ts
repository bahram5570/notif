import { RoutinResponseTypes } from '@components/women/pages/nestedRoutes/routin/RoutinContainer/__hooks__/useGetData/types';

export interface RoutinDietsProps extends Pick<RoutinResponseTypes, 'name' | 'items'> {}
