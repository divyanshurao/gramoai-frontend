import {CONFIG} from "./config"
import { api } from "./axios";
import { AxiosError } from "axios";
import { handleApiError } from "./errorhandler";
export const generatePosts = async () => {
    try {
        const response = await api.post(CONFIG.ENDPOINTS.POST.GET_POSTS);
      } catch (error) {
        if (error instanceof AxiosError) {
          return handleApiError(
            error,
            error.response?.data?.msg || "Login failed"
          );
        }
    }
};
  