import { RegisterPostRequest, RegisterRequest, User } from "@/lib/types";
import apiFetch from "../apiClient";

export function validateRegister(request: RegisterRequest): RegisterPostRequest | null {
    if (request.password !== request.confirmPassword) return null
    //if (request.password.length < 6) return null
    return {
        email: request.email,
        name: request.firstName + " " + request.lastName,
        password: request.password
    }
}

export default async function Register(request: RegisterRequest) {
    const data = validateRegister(request)
        console.log(data)
    if (data === null) return
     
    const req = await apiFetch<User>("/auth/register", "POST", data)
    if (req) {
        if (req.status !== 200) {
            console.error("Register failed")
        }
        else {
            console.log("Success!")
            window.location.replace("/")
            return req.data!   
        }
    }
    return false
}