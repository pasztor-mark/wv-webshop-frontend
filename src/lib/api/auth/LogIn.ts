import { LoginRequest } from "@/lib/types";
import apiFetch from "../apiClient";

export default async function logIn(request: LoginRequest) {
    const req = await apiFetch("/auth/login", "POST", request)
    console.log(req)
    if (req) {
        if (req.status !== 200) {
            console.error("Login failed")
        }
        else {
            console.log("Success!")
            return true   
        }
    }
    return false
}