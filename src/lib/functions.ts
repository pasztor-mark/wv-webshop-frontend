import { Theme } from "./types"

export function toggleColorScheme(colorScheme: "dark" | "light" | "system"): Theme {
    switch(colorScheme) {
        case "dark": return "light"
        case "light": return "system"
        case "system" : return "dark"
        default: return "dark"
    }
}