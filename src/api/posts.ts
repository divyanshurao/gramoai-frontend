import {CONFIG} from "./config"
import { api } from "./axios";
import { AxiosError } from "axios";
import { handleApiError } from "./errorhandler";

export const generatePosts = async (product: string, audience: string, contentStyle: string, journey: string, other: string) => {
    try {
        const response = await api.post(
            CONFIG.ENDPOINTS.POST.GENERATE_POSTS,
            {
                product:product,
                audience:audience,
                contentStyle:contentStyle,
                journey:journey,
                other:other
            },
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

export const regeneratePost = async (postId: string, content: string) => {
    try {
        const response = await api.post(
            CONFIG.ENDPOINTS.POST.REGENERATE_POST_BY_ID(postId),
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
        const res = response.data.data;
        return res;
    } catch (error) {
        if (error instanceof AxiosError) {
            return handleApiError(
                error,
                error.response?.data?.msg || "Error Fetching posts"
            );
        }
    }
};

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

export const updatePost = async (postId: string, content: string) => {
    try {
        const response = await api.put(
            CONFIG.ENDPOINTS.POST.UPDATE_POST_BY_ID(postId),
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
        const res = response.data.data;
        return res;
    } catch (error) {
        if (error instanceof AxiosError) {
            return handleApiError(
                error,
                error.response?.data?.msg || "Error Fetching posts"
            );
        }
    }
};

export const publishPost = async (postId: string) => {
    try {
        console.log("PUBLSIHING")
        const response = await api.post(
            CONFIG.ENDPOINTS.POST.PUBLISH_POST_BY_ID(postId),
            {},
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
