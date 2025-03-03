import { LoginRequest, User } from "@/lib/types";
import apiFetch from "../apiClient";

export default async function logIn(request: LoginRequest): Promise<User | false> {
    const req = await apiFetch<User>("/auth/login", "POST", request)
    console.log(req)
    if (req) {
        if (req.status !== 200) {
            console.error("Login failed")
        }
        else {
            console.log("Success!")
            return req.data!
        }
    }
    return false
}