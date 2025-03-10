import { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import { api } from "./axios"; 

const LinkedInOAuthHandler = () => {
  const navigate = useNavigate();
  const [loading, setLoading] = useState(true); 

  useEffect(() => {
    const params = new URLSearchParams(window.location.search);
    const code = params.get("code");

    if (code) {
      api
        .post("/auth/linkedin/callback", { code }) 
        .then((response) => {
          localStorage.setItem("token", response.data.token);
          navigate("/input"); 
        })
        .catch((error) => {
          console.error("LinkedIn login failed:", error);
          navigate("/"); 
        })
        .finally(() => setLoading(false)); 
    } else {
      navigate("/");
    }
  }, [navigate]);

  return loading ? '<p>Processing LinkedIn login...</p>' : null; 
};

export default LinkedInOAuthHandler;
