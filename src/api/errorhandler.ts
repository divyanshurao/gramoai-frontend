import toast from "react-hot-toast";
import { AxiosError } from "axios";

export const handleApiError = (error: AxiosError, customMessage?: string) => {
  console.error(error);
  toast.error(customMessage || "An error occurred. Please try again.");
  throw error;
};