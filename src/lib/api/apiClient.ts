import axios, { AxiosRequestConfig } from "axios";

const apiClient = axios.create({
    baseURL: "http://localhost:8080/api",
    withCredentials: true,
    headers: {
        "Content-Type": "application/json"
    }
    ,validateStatus: function(_) {
        return true
    }
})

export type HttpRequestMethods = "GET" | "POST" | "PUT" | "PATCH" | "DELETE"
export default async function apiFetch<T>(endpoint: string, method: HttpRequestMethods, body?: Record<string, any>): Promise<{ data: T | null; status: number } | null> {
    try {
        const cfg: AxiosRequestConfig = {
            method,
            url: endpoint,
            data: body || undefined,
            withCredentials: true
        }
        const req = await apiClient.request<T>(cfg)
        return {
            data: req.data, status: req.status
        }
    }
    catch (err) {
        return null
    }
}
