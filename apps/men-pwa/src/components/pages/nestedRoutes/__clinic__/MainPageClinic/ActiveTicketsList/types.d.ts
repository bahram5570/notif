import { ClinicResponseTypes } from '@repo/core/components/clinic';

type TicketsTypes = { tickets: Pick<ClinicResponseTypes, 'tickets'>['tickets'] | undefined };

export interface ActiveTicketsListProps extends TicketsTypes {}
