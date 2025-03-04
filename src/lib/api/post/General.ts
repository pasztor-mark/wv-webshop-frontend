import { CreateItemRequest, Item, Paged, } from "@/lib/types";
import apiFetch from "../apiClient";

export async function postItem(data: CreateItemRequest) {
    const req = await apiFetch("/items", "POST", data)
    if (req && req.data) {
        return req.data
    }
    return null
}
export async function getItems(page: number) {
    const req = await apiFetch<Paged<Item>>(`/items/feed?page=${page}&size=${8}`, "GET")
    if (req && req.data) {
        return req.data
    }
    return null
}
