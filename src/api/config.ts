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
  AUTH_TOKEN: getCookie('auth_token') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3RpdmVUZWFtIjp7ImlkIjoidGVhLTEyMyIsIm5hbWUiOiJEZWZhdWx0IFRlYW0iLCJwcml2aWxlZ2UiOnsiYWRtaW4iOnRydWUsInVzZXIiOmZhbHNlfX0sImV4cCI6MTc1MDMwNzU4MiwiaWF0IjoxNzQwMzAyOTgyLCJpc3MiOiJwb3N0LWFnZW50IiwidGVhbXMiOlt7ImlkIjoidGVhLTEyMyIsIm5hbWUiOiJEZWZhdWx0IFRlYW0iLCJwcml2aWxlZ2UiOnsiYWRtaW4iOnRydWUsInVzZXIiOmZhbHNlfX1dLCJ1c2VyIjp7ImVtYWlsIjoiZ2FuZGhpbmVlcmFqMDhAZ21haWwuY29tIiwiaWQiOiJ1cy0xNzBmYzRhOC1kNzFmLTQwODMtYmQ2Ni04YTE1ZTI3MGUwZTgiLCJuYW1lIjoiTmVlcmFqIEdhbmRoaSJ9fQ.admDHEe8PMNAiw-rIp7HE2xswS2sgK8alkDzXqc_uKE"
};