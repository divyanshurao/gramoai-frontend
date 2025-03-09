import {CONFIG} from "./config"
 import { api } from "./axios";
 import { AxiosError } from "axios";
 import { handleApiError } from "./errorhandler";
 
 export const getPosts = async () => {
     try {
         const response = await api.get(
             CONFIG.ENDPOINTS.POST.GET_POSTS,
             {
             headers: {
                 Authorization: `Bearer ${CONFIG.AUTH_TOKEN}`
             }
             }
         );
         const authToken = CONFIG.AUTH_TOKEN
         console.log(authToken)
         if (authToken) {
             console.log(authToken)
             CONFIG.AUTH_TOKEN = authToken;
         } else {
             throw new Error('Auth token not found in cookies');
         }
         const posts = response.data.data; 
         console.log("Posts: ", posts.length)
         return posts
       } catch (error) {
         if (error instanceof AxiosError) {
           return handleApiError(
             error,
             error.response?.data?.msg || "Error Fetching posts"
           );
         }
     }
 };