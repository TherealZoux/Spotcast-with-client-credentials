import { Buffer } from "buffer";

const client_id = "a7bee7f7781348199877e340dae76515";
const client_secret = "f947485810f2428caa0957fe8f297842";

const encodedCredentials = Buffer.from(
  `${client_id}:${client_secret}`,
).toString("base64");

const authenticateWithSpotify = async () => {
  const authOptions = {
    method: "POST",
    headers: {
      Authorization: `Basic ${encodedCredentials}`,
      "Content-Type": "application/x-www-form-urlencoded",
    },
    body: new URLSearchParams({
      grant_type: "client_credentials",
    }),
  };

  try {
    const response = await fetch(
      "https://accounts.spotify.com/api/token",
      authOptions,
    );
    if (!response.ok) {
      const errorData = await response.json();
      throw new Error(
        `Error: ${errorData.error}, Description: ${errorData.error_description}`,
      );
    }
    const body = await response.json();
    if (body.access_token) {
      localStorage.setItem("access_token", body.access_token);
      if (localStorage.getItem("access_token")) {
        //window.location.href = window.location.origin;
      }
      return body.access_token;
    } else {
      throw new Error("Failed to retrieve access token");
    }
  } catch (error) {
    console.error("Error:", error.message);
  }
};

export { authenticateWithSpotify };
