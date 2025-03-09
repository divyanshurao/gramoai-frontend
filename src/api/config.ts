function getCookie(name: string): string | null {
  const value = `; ${document.cookie}`;
  const parts = value.split(`; ${name}=`);
  if (parts.length === 2) return parts.pop()?.split(';').shift() || null;
  return null;
}

export const CONFIG = {
  BASE_URL: "http://localhost:8001",
  ENDPOINTS: {
    AUTH: {
      LOGIN: "/public/api/oauth/linkedin",
    },
    POST: {
      GET_POSTS: "/api/posts"
    }
  },
  AUTH_TOKEN: getCookie('auth_token') || "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJhY3RpdmVUZWFtIjp7ImlkIjoidGVhLTEyMyIsIm5hbWUiOiJEZWZhdWx0IFRlYW0iLCJwcml2aWxlZ2UiOnsiYWRtaW4iOnRydWUsInVzZXIiOmZhbHNlfX0sImV4cCI6MTc1MDMwNzU4MiwiaWF0IjoxNzQwMzAyOTgyLCJpc3MiOiJwb3N0LWFnZW50IiwidGVhbXMiOlt7ImlkIjoidGVhLTEyMyIsIm5hbWUiOiJEZWZhdWx0IFRlYW0iLCJwcml2aWxlZ2UiOnsiYWRtaW4iOnRydWUsInVzZXIiOmZhbHNlfX1dLCJ1c2VyIjp7ImVtYWlsIjoiZ2FuZGhpbmVlcmFqMDhAZ21haWwuY29tIiwiaWQiOiJ1cy0xNzBmYzRhOC1kNzFmLTQwODMtYmQ2Ni04YTE1ZTI3MGUwZTgiLCJuYW1lIjoiTmVlcmFqIEdhbmRoaSJ9fQ.admDHEe8PMNAiw-rIp7HE2xswS2sgK8alkDzXqc_uKE"
};