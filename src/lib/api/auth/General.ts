import apiFetch from "../apiClient";

export default async function checkAuth() {
  const req = await apiFetch<boolean>("/auth/validity", "GET");
  if (req) {
    if (req.status === 200) return true;
  }
  return false;
}
export async function initialValidation(route = "/", auth = true) {
  const res = await checkAuth();
  if (auth) {

      if (res) {
          window.location.replace(route);
        }
        }
    else {
        if (!res) {
            window.location.replace(route)
        }
    }
}
