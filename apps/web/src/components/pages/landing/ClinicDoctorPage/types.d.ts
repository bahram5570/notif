export interface DoctorInfoTypes extends DoctorHeadingProps {
  visitCart: string;
  description: string;
  rate: number;
  ticketCount: number;
  comment: CommentsTypes[];
  clinicPrice: number;
  isActive: boolean;
  htmlDescription: string;
}

export type CommentsTypes = {
  text: string;
  rate: number;
  negitive: string[];
  positive: string[];
};

export interface DrBioProps {
  clinicPrice: number;
  ticketCount: number;
  rate: number;
  htmlDescription: string;
  isActive: boolean;
}

export interface DoctorHeadingProps {
  name: string;
  speciality: string;
  nezam: string;
  bioImage: string;
  banner?: string;
}
