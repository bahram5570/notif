export type SubmitHandler = (phone: string) => void | Promise<void>;

export interface UsePhoneSubmitOptions {
  onSuccess: SubmitHandler;
}
