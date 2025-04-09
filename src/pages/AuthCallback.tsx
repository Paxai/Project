import { useEffect } from 'react';
import axios from 'axios';

function AuthCallback() {
  useEffect(() => {
    const code = new URLSearchParams(window.location.search).get("code");

    if (code) {
      axios.post("https://twoj-backend.onrender.com/auth/discord", { code })
        .then(res => {
          console.log("User info:", res.data);
          localStorage.setItem('discordUser', JSON.stringify(res.data));
        })
        .catch(err => {
          console.error("Auth error:", err);
        });
    }
  }, []);

  return <div>Logowanie przez Discord...</div>;
}

export default AuthCallback;
