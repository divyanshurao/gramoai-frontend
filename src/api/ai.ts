import {CONFIG} from "./config"
import { api } from "./axios";
import { AxiosError } from "axios";
import { handleApiError } from "./errorhandler";

export const humanizer = async (content: string) => {
    try {
        const response = await api.post(
            CONFIG.ENDPOINTS.AI.HUMANIZER,
            {
                content: content
            },
            {
                headers: {
                    Authorization: `Bearer ${CONFIG.AUTH_TOKEN}`
                }
            }
        );
        const authToken = CONFIG.AUTH_TOKEN;
        console.log(authToken);
        if (authToken) {
            console.log(authToken);
            CONFIG.AUTH_TOKEN = authToken;
        } else {
            throw new Error('Auth token not found in cookies');
        }
        const humanizedText = response.data.data; 
        console.log("humanized Text: ", humanizedText);
        return humanizedText;
      } catch (error) {
        if (error instanceof AxiosError) {
          return handleApiError(
            error,
            error.response?.data?.msg || "Error returning humanized text"
          );
        }
    }
};
  