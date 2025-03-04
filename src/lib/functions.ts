import { Theme } from "./types"

export function toggleColorScheme(colorScheme: "dark" | "light" | "system"): Theme {
    switch(colorScheme) {
        case "dark": return "light"
        case "light": return "system"
        case "system" : return "dark"
        default: return "dark"
    }
}
export async function toBase64(file: File) {
    const buffer = await file.arrayBuffer()
    const base64 = btoa(String.fromCharCode(...new Uint8Array(buffer)))
    return base64
}