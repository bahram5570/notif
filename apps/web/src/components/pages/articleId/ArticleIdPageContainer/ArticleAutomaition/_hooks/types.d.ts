export type SubmitHandler = (phone: string, categoryId?: string) => Promise<void>;

export interface UsePhoneSubmitOptions {
  onSuccess: SubmitHandler;
  minLength?: number;
  errorMessage?: string;
}
