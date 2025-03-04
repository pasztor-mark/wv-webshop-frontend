import { User } from "@/lib/types";
import apiFetch from "../apiClient";

export default async function checkAuth() {
  const req = await apiFetch<boolean>("/auth/validity", "GET");
  console.log("VALIDITY",req);
  if (req) {
  
    if (req.status === 200) return true;
  }
  return false;
}
export async function getSelf() {
  const req = await apiFetch<User>("/users/self", "GET");
  if (req) {
    if (req.status === 200) {
      localStorage.setItem("user", JSON.stringify(req.data));
      return req.data;
    }
  }
  return null;
}
export async function initialValidation(route = "/", auth = true) {
  const res = await checkAuth();
  if (auth) {
    
      if (!res) {
          window.location.replace(route);
        }

  }
}
export async function invalidateToken() {
  await apiFetch("/auth/invalidate", "DELETE");
}
