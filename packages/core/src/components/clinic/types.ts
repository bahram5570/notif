import { ClinicStateEnums, SideTypeEnum } from './enums';

// clinic-main page
export type ClinicTicketsTyes = {
  drAcadimicCertificate: string;
  state: ClinicStateEnums;
  drSpeciality: string;
  createTime: string;
  clinicName: string;
  ticketType: number;
  fileName: string;
  ticketId: string;
  drValid: boolean;
  clinicId: number;
  isRate: boolean;
  drImage: string;
  drName: string;
  rate: number;
  text: string;
};

export type ClinicTypesTypes = {
  description: string;
  priceUnit: string;
  price: number;
  image: string;
  name: string;
  id: number;
};

export type ClinicResponseTypes = {
  activeTicketsOneTitle: string;
  tickets: ClinicTicketsTyes[];
  activeTicketsTitle: string;
  activeTicketsMore: string;
  types: ClinicTypesTypes[];
  currentValue: number;
  listOfValues: string;
  description: string;
  title: string;
};

//info page
export type DrTypes = {
  academicCertificate: string;
  hasPrescription: boolean;
  prescriptionText: string;
  ticketCount: string;
  nezamNumber: string;
  speciliaty: string;
  isOnline: boolean;
  firstName: string;
  lastName: string;
  rrCount: number;
  minTime: string;
  resume: string;
  image: string;
  rate: string;
  id: string;
};

export type SupportType = {
  helper: string;
  title: string;
  phone: string;
};

export type InfoTypes = {
  discountPercent: number;
  discountMessage: string;
  discountString: string;
  pdpDescription: string;
  discountPrice: number;
  currentValue: number;
  discountCode: string;
  description: string;
  infoHelper: string;
  priceUnit: string;
  visible: boolean;
  isValid: boolean;
  payPrice: number;
  submit: string;
  name: string;
  dr: DrTypes[];
  price: number;
  info: string;
  cta: string;
  type: number;
  text: string;
  id: number;
  support: SupportType;
};

export type ClinicInfoResponseTypes = {
  type: number;
  info: InfoTypes;
  currentValue: number;
  isValid: boolean;
  text: string;
};

//
export type SelectedDoctorHandlerTypes = (id: string) => void;

// # clinic chat page

export type ChatsTypes = {
  text: string;
  dateTime: string;
  media: string | null;
  sideType: SideTypeEnum;
};

export type FeedbacksTypes = {
  positive: string[];
  negative: string[];
};

export type ChatResponseTypes = {
  rate: number;
  drName: string;
  drRate: string;
  drImage: string;
  isRate: boolean;
  drValid: boolean;
  description: string;
  chats: ChatsTypes[];
  drSpeciality: string;
  state: ClinicStateEnums;
  feedbacks: FeedbacksTypes;
  feedbackPositive: string[];
  feedbackNegative: string[];
  acadimicCertificate: string;
};
