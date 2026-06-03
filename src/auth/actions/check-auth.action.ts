import { tesloApi } from "@/api/tesloApi";
import type { AuthResponse } from "../interface/auth.response";

export const checkAuth = async (): Promise<AuthResponse> => {
  const token = localStorage.getItem("token");

  if (!token) throw new Error("No token found");
  try {
    const { data } = await tesloApi.get<AuthResponse>("auth/check-status");
    localStorage.setItem("token", data.token);
    return data;
  } catch (error) {
    console.error({ error });
    localStorage.removeItem("token");
    throw new Error("Token is invalid", { cause: error });
  }
};
