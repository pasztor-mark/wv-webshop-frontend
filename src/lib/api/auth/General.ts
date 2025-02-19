import apiFetch from "../apiClient"

export default async function checkAuth() {
    const req = await apiFetch<boolean>("/auth/validity", "GET")
        if (req) {
            if (req.status === 200) return true
        }
        return false
    }
