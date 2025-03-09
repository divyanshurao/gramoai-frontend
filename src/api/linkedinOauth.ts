import {CONFIG} from "./config"
import { api } from "./axios";
import { AxiosError } from "axios";
import { handleApiError } from "./errorhandler";
export const initiateLinkedInOAuth = async () => {
    try {
        const response = await api.get(CONFIG.ENDPOINTS.AUTH.LOGIN);
        const linkedInAuthURL = response.data.data; 
        window.location.href = linkedInAuthURL;
      } catch (error) {
        if (error instanceof AxiosError) {
          return handleApiError(
            error,
            error.response?.data?.msg || "Login failed"
          );
        }
    }
};
  