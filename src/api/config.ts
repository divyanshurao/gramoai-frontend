function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

export const CONFIG = {
  BASE_URL: "https://api.gramo.ai",
  ENDPOINTS: {
    AUTH: {
      LINKEDIN: "/public/api/oauth/linkedin",
    },
    POST: {
      GENERATE_POSTS:"/api/generate-posts",
      REGENERATE_POST_BY_ID: (postId: string) => `/api/regenerate/${postId}`,
      GET_POSTS: "/api/posts",
      UPDATE_POST_BY_ID: (postId: string) => `/api/post/${postId}`,
      PUBLISH_POST_BY_ID: (postId: string) => `/api/post/${postId}/publish`,
    },
    AI:{
      HUMANIZER:"/api/humanizer"
    }
  },
  AUTH_TOKEN: getCookie('auth_token')
};