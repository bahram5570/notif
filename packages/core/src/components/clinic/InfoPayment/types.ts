import { ClinicInfoResponseTypes } from '../types';

type InfoTypes = Pick<
  Pick<ClinicInfoResponseTypes, 'info'>['info'],
  'discountPrice' | 'currentValue' | 'payPrice' | 'price' | 'priceUnit'
>;

export interface InfoPaymentProps extends InfoTypes {}
