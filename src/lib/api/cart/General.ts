import apiFetch from "../apiClient"

export async function changeCart(id: number, quantity: number) {
    const req = await apiFetch(`/cart/change/${id}`, "PUT", { quantity })
    if (req && req.data) {
        return req.data
    }
    return null
}