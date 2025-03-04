import { CreateItemRequest, } from "@/lib/types";
import apiFetch from "../apiClient";

export async function postItem(data: CreateItemRequest) {
    const req = await apiFetch("/items", "POST", data)
    if (req && req.data) {
        return req.data
    }
    return null
}