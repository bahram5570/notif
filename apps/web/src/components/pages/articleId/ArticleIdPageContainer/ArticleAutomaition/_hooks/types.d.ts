export type SubmitHandler = (phone: string, categoryId?: string) => Promise<void>;

export interface UsePhoneSubmitOptions {
  onSuccess: SubmitHandler;
  minLength?: number;
  errorMessage?: string;
}

export type VerifyOtpResponse = {
  valid: boolean;
  link?: string;
  message?: string;
};

export type SendOtpTyps = {
  valid: boolean;
  id: string;
};

