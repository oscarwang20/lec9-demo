// Dynamic API URL selection based on environment
export const API_URL =
  import.meta.env.MODE === "development"
    ? "http://localhost:8080"
    : "https://server-ancient-voice-8322.fly.dev";

export const API_KEY = import.meta.env.VITE_SUPER_SECRET_KEY;

if (!API_KEY) {
  throw new Error("API_KEY is not defined in environment variables");
}
