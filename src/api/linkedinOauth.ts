import {CONFIG} from "./config"
import { api } from "./axios";
import { AxiosError } from "axios";
import { handleApiError } from "./errorhandler";
export const initiateLinkedInOAuth = async () => {
    try {
      const response = await api.post(
          CONFIG.ENDPOINTS.AUTH.LINKEDIN,
          {
            redirectUrl:`linkedin-connected`
          }
      );
      const linkedInAuthURL = response.data.data; 
      return linkedInAuthURL
    } catch (error) {
      if (error instanceof AxiosError) {
        return handleApiError(
          error,
          error.response?.data?.msg || "Error returning linkedin oauth"
        );
      }
  }
};
  